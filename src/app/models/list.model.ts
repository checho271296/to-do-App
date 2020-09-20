import { ListItem } from './list-item.model';
export class List{
    id: number;
    title : string;
    date : Date;
    doneDate : Date;
    done : boolean;
    items : ListItem[];

    constructor(title:string ){
        this.title = title;
        this.date = new Date();
        this.done = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}