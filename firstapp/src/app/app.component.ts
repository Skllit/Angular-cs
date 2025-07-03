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
  title:string="bob";
  counter:number=0;

  inputText:string="hello";

  incrementCounter(){
    this.counter++;
  }

}
