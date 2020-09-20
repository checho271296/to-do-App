import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  listInfo : List;
  itemName = '';
  constructor(private tasksService:TasksService, private activatedRoute:ActivatedRoute) { 
    const idList = this.activatedRoute.snapshot.paramMap.get('id');
    this.listInfo = this.tasksService.getList(idList); 
  }

  ngOnInit() {
  }

  addItem(){
    if(this.itemName.length === 0){
      return;
    }
    const newItem  = new ListItem(this.itemName);
    this.listInfo.items.push(newItem);
    this.itemName = '';
    this.tasksService.saveStorage();
  }

  changeState(item : ListItem){
    
    const missing = this.listInfo.items.filter(data => !data.done).length;
    if(missing === 0){
      this.listInfo.done = true;
      this.listInfo.doneDate = new Date();
    }else{
      this.listInfo.done = false;
      this.listInfo.doneDate = null;
    }
    this.tasksService.saveStorage();
  }
  deleteItem(i : number){
    this.listInfo.items.splice(i,1);
    this.tasksService.saveStorage();
  }

}
