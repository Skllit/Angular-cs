import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task:string="";
  @Output() taskDeleted=new EventEmitter<void>();


  onDeleteclick():void{
    this.taskDeleted.emit();
  }

}
