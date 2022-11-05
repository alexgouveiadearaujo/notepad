import { ListNoteComponent } from './components/notes/list-note/list-note.component';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteNoteComponent } from './components/notes/delete-note/delete-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'list-note',
    pathMatch:'full'
  },
  {
    path:'create-note',
    component: CreateNoteComponent
  },
  {
    path:'list-note',
    component: ListNoteComponent
  },
  {
    path:'notes/delete-note/:id',
    component: DeleteNoteComponent
  },
  {
    path:'notes/edit-note/:id',
    component: EditNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
