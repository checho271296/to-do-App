import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(lists: List[], done:boolean=true): List[] {
    // If true, return all completed list, otherwise imcompleted lists
    return lists.filter(data => data.done == done);
     
  }

}
