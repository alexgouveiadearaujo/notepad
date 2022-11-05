import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INote } from '../INote';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private service: NoteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // id:[1],
      content: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      authorship: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      model: ['modelo1'],
      favorite: [false]
    });
  }

  saveNote() {
    console.log(this.form.get('authorship')?.errors);
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/list-note']);
      });
    }
  }

  cancelNote() {
    this.router.navigate(['/list-note']);
  }

  habilitarBtn():string{
    if(this.form.valid){
      return 'botao'
    }
    return 'botao__desabilitado'
  }

}
