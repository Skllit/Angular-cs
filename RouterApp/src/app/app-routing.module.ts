import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './COmponants/note/note.component';
import { NotesComponent } from './COmponants/notes/notes.component';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {path:'notes/:id',component:NoteComponent},
  {path:'notes',component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
