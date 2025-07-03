import { MessageService } from './Services/message.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
// implements OnInit
export class AppComponent {
  grade:string="B"
  names:string[]=["abc","bcd","efg"];
  title:string="bob";
  counter:number=0;
  inputText:string="hello";
  userName:string="Stark"
  isloggedin:boolean=true;









  incrementCounter(){
    this.counter++;
  }

}
