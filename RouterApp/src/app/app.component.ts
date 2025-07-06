import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RouterApp';
  constructor( private Routes:Router){}

  gotoone(){
    this.Routes.navigate(['/notes'])

  }
  gototwo(id:number){
    this.Routes.navigate(['/notes','124'])

  }
}
