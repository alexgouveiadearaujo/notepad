import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INote } from '../INote';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css'],
})
export class DeleteNoteComponent implements OnInit {
  note: INote = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
    favorite: false
  };

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchId(parseInt(id!)).subscribe((note) => {
      this.note = note;
    });
  }

  deleteNote() {
    if (this.note.id) {
      this.service.delete(this.note.id).subscribe(() => {
        this.router.navigate(['/list-note']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/list-note']);
  }
}
