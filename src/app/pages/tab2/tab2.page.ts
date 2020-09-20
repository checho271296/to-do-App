import { Component, Input } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  @Input() item : List;
  constructor(public tasksService:TasksService  ) {}

}
