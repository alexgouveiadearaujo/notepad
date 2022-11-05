import { INote } from './../INote';
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css'],
})
export class ListNoteComponent implements OnInit {
  listNotes: INote[] = [];
  currentPage: number = 1;
  moreNotess: boolean = true;
  filter = ''

  constructor(private service: NoteService) {}

  ngOnInit(): void {
    this.service.list(this.currentPage , this.filter).subscribe((list) => {
      this.listNotes = list;
    });
  }

  loadMoreNotes() {
    this.service.list(++this.currentPage , this.filter).subscribe((list) => {
      this.listNotes.push(...list);
      if (!list.length) this.moreNotess = false;
    });
  }

  searchFilter(){
    this.moreNotess = true;
    this.currentPage = 1;
    this.service.list(this.currentPage , this.filter).subscribe((list)=>{
      this.listNotes = list;
    })
  }

}
