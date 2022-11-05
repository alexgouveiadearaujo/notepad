import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-more-btn',
  templateUrl: './load-more-btn.component.html',
  styleUrls: ['./load-more-btn.component.css']
})
export class LoadMoreBtnComponent implements OnInit {
  @Input()
  moreNotes:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
