import { Component, Input, OnInit } from '@angular/core';
import { INote } from '../INote';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input()
  note: INote = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
    favorite: false,
  };

  constructor(private service: NoteService) {}

  ngOnInit(): void {}

  noteSize(): string {
    if (this.note.content.length >= 256) {
      return 'note-g';
    }
    return 'note-p';
  }

  changeFavoriteIcon(): string {
    if (this.note.favorite == false) {
      return 'inativo';
    }
    return 'ativo';
  }

  updateFavorite(){
    this.service.changeFavorite(this.note).subscribe();
  }

}
