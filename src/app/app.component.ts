import { Component } from '@angular/core';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-ToDo';
  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);
  }
  removeTask (id:number)

{

console.warn(id)

this.list=this.list.filter(item=>item.id!==id)
}
userData:any=[]
constructor(private todo:TodoService){
  this.todo.getUserData().subscribe(data=>{
    console.log(data);
    this.userData=data;
  });

}
}
