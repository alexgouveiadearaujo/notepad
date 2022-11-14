import { Router } from '@angular/router';
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
  filter = '';
  favorite: boolean = false;
  favoriteList: INote[] = [];
  title: string =   'Meu Mural';

  constructor(private service: NoteService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .list(this.currentPage, this.filter, this.favorite)
      .subscribe((list) => {
        this.listNotes = list;
      });
  }

  reloadComponent() {
    this.favorite = false;
    this.currentPage = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  loadMoreNotes() {
    this.service
      .list(++this.currentPage, this.filter, this.favorite)
      .subscribe((list) => {
        this.listNotes.push(...list);
        if (!list.length) this.moreNotess = false;
      });
  }

  searchFilter() {
    this.moreNotess = true;
    this.currentPage = 1;
    this.service
      .list(this.currentPage, this.filter, this.favorite)
      .subscribe((list) => {
        this.listNotes = list;
      });
  }

  favoritesList() {
    this.title = 'Meus Favoritos'
    this.favorite = true;
    this.moreNotess = true;
    this.currentPage = 1;
    this.service
      .list(this.currentPage, this.filter, this.favorite)
      .subscribe((favorites) => {
        this.listNotes = favorites;
        this.favoriteList = favorites;
      });
  }
}
