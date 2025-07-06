import { NoteService } from './../../Services/note.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Note } from '../../Interfaces/note';

@Component({
  selector: 'app-note-form',
  standalone: false,
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss'
})
export class NoteFormComponent implements OnInit {
  noteForm!:FormGroup;

  constructor(private noteService:NoteService,private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.noteForm=this.formBuilder.group({
      id:1,
      title:['',Validators.required],
      content:['',Validators.required]
    })

  }
  onFormSumbit():void{
    if(this.noteForm.invalid)return;
    const note:Note=this.noteForm.value;
    this.noteService.CreateNote(note);

    this.noteForm.reset();
  }

}
