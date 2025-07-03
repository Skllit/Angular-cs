import { MessageService } from './Services/message.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',

})
// implements OnInit
export class AppComponent implements OnInit {
  userName:string="Stark"
  isloggedin:boolean=true;
  grade:string="B"
  names:string[]=["abc","bcd","efg"];

  title:string="bob";
  counter:number=0;
  inputText:string="hello";

  firstText:string="hello"
  messages:string[]=[];

  posts:any[]=[];

  constructor(private messageService:MessageService){
    this.messages=this.messageService.getmessage()

  }
ngOnInit(): void {
  this.messageService.getPost().subscribe(res=>{
    this.posts=res;
  })

}







  incrementCounter(){
    this.counter++;
  }

}
