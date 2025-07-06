import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { Note } from '../Interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes:Note[]=[];
  private notesSubject=new BehaviorSubject<Note[]>([]);


  constructor() { }

  CreateNote(note:Note):void{
    note.id=this.notes.length;
    this.notes.push(note);
    this.notesSubject.next(this.notes)
  }

  getNotes():Observable<Note[]>{
    return this.notesSubject.asObservable();
  }


  deleteNotes(id:number):void{
    this.notes=this.notes.filter((n)=>n.id!==id)
    this.notesSubject.next(this.notes)

  }

}


