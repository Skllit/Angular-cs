import { MessageService } from './Services/message.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  providers:[MessageService]
})
// implements OnInit
export class AppComponent {
  userName:string="Stark"
  isloggedin:boolean=true;
  grade:string="B"
  names:string[]=["abc","bcd","efg"];

  title:string="bob";
  counter:number=0;
  inputText:string="hello";

  firstText:string="hello"
  messages:string[]=[];

  constructor(private messageService:MessageService){
    this.messages=this.messageService.getmessage()

  }








  incrementCounter(){
    this.counter++;
  }

}
