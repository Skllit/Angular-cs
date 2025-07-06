import { Note } from './../../Interfaces/note';
import { NoteService } from './../../Services/note.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-note-list',
  standalone: false,
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements OnInit {
  notes:Note[]=[];

  constructor(private noteService:NoteService){}

  ngOnInit(): void {
         this.noteService.getNotes().subscribe((n:Note[])=>{
          this.notes=n;

    })
  }

  deleteNote(id:number){
    this.noteService.deleteNotes(id)

  }
  editNote(note:Note){

  }
}
