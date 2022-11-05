import { INote } from './../INote';
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
})
export class EditNoteComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchId(parseInt(id!)).subscribe((note) => {
      this.form = this.formBuilder.group({
        id: [note.id],
        content: [
          note.content,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        authorship: [
          note.authorship,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        model: [note.model],
        favorite: [note.favorite],
      });
    });
  }

  editNote() {
    this.service.edit(this.form.value).subscribe(() => {
      this.router.navigate(['/list-note']);
    });
  }
  cancel() {
    this.router.navigate(['/list-note']);
  }

  habilitarBtn(): string {
    if (this.form.valid) {
      return 'botao';
    } else return 'botao__desabilitado';
  }
}
