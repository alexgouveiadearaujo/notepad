import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListNoteComponent } from './components/notes/list-note/list-note.component';
import { NoteComponent } from './components/notes/note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteNoteComponent } from './components/notes/delete-note/delete-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { LoadMoreBtnComponent } from './components/notes/list-note/load-more-btn/load-more-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateNoteComponent,
    ListNoteComponent,
    NoteComponent,
    DeleteNoteComponent,
    EditNoteComponent,
    LoadMoreBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
