import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  lists : List[] = [];


  constructor() {
      this.loadStorage();
   }

   createList(title:string){
     const newList = new List(title);
     this.lists.push(newList);
     this.saveStorage();
     return newList.id;
   }

   deleteList(list : List){
     this.lists = this.lists.filter(data => list.id !== data.id);
     this.saveStorage();
   }

   editList(id: number,name :string){
      let idList = this.lists.findIndex((obj => obj.id == id));
      this.lists[idList].title = name;
      this.saveStorage();
   }

   getList(id:string | number){
      id = Number(id);
      return this.lists.find(data => data.id === id);
   }
 
   saveStorage(){
    localStorage.setItem('data',JSON.stringify(this.lists));
   }

   loadStorage(){
    if(localStorage.getItem('data')){
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
   }
}
