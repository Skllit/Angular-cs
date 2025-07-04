import { Component } from '@angular/core';
import { TaskComponent } from './Componants/task/task.component';
import { Input,output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Secondapp';

  tasks:string[]=["task1","task2","task3"]

  deleteTask(task:string){
this.tasks=this.tasks.filter((t)=>t!==task)

  }
}
