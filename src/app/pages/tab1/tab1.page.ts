import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  constructor(private tasksService:TasksService, private router: Router,
              private alertController: AlertController  ) {
    
  }


  async addList(){

    const alert =  await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New list',
      inputs : [{
        name: 'title',
        type: 'text',
        placeholder : 'List name'
      }],
      buttons: [
        {
          text: 'Cancel',
          role : 'Cancel',
          handler: () => {
            console.log("Cancel");
          }
        },
        {
          text: 'Add',
          handler: (data) => {
            console.log(data);
            if(data.lenght === 0){
              return;
            }
            //Create new list
            const id = this.tasksService.createList(data.title);
            this.router.navigateByUrl(`/tabs/tab1/add/${id}`);

          }
        }
      ]
    });

    alert.present();
  }
}
