import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() done = true;
  @ViewChild(IonList) list: IonList;
  
  constructor(private router: Router,public tasksService :TasksService,
              private alertController: AlertController) { }

  ngOnInit() {}


  selectedList(list : List){
    if(this.done){
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`)
    }else{
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`)
    }
  }

  deleteItem(item : List){
    this.tasksService.deleteList(item);
  }

  async updateItem(item: List){
    const alert =  await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New name',
      inputs : [{
        name: 'title',
        type: 'text',
        value: item.title,
        placeholder : 'List name'
      }],
      buttons: [
        {
          text: 'Cancel',
          role : 'Cancel',
          handler: () => {
            console.log("Cancel");
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Edit',
          handler: (data) => {
            if(data.lenght === 0){
              return;
            }
          
            this.tasksService.editList(item.id,data.title)
            this.list.closeSlidingItems();

          }
        }
      ]
    });

    alert.present();
  }
}
