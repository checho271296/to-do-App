import { ListItem } from './list-item.model';
export class List{
    id: number;
    tittle : string;
    date : Date;
    doneDate : Date;
    done : boolean;
    items : ListItem[];

    constructor(ttile:string ){
        this.tittle = this.tittle;
        this.date = new Date();
        this.done = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}