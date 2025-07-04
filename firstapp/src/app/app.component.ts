import { MessageService } from './Services/message.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Post } from './Interface/Post.interface';
import { NgForm } from '@angular/forms';
import { FormGroup,Validator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',

})
// implements OnInit
export class AppComponent implements OnInit {




  user:{Name:string,email:string}={
  Name :'',
  email :''
}
  userName:string="Stark"
  isloggedin:boolean=true;
  grade:string="B"
  names:string[]=["abc","bcd","efg"];

  title:string="bob";
  counter:number=0;
  inputText:string="hello";

  firstText:string="hello"
  messages:string[]=[];
  posts:Post[]=[];


 userForm!:FormGroup;
  constructor(private messageService:MessageService,private formBuilder:FormBuilder){
    this.messages=this.messageService.getmessage()
    this.userForm=this.formBuilder.group({
      Name:['',Validators.required],
      Email:['',Validators.email]
    })

  }
  Submit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
    }
  }

  submitForm(form:NgForm){
    if(form.valid){
      console.log(form.value,this.user)
    }

  }
ngOnInit(): void {

  // this.messageService.getPost().subscribe(res=>{
  //   this.posts=res;
  // })

  this.messageService.getPost().subscribe({
    next:(res:Post[])=>{
      this.posts=res;
    },
    error:(error)=>{
      console.log(error)

    }
  })

}







  incrementCounter(){
    this.counter++;
  }

}
