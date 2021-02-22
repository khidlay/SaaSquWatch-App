import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.css'],
})
export class SearchAllComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<NgForm>();
  constructor() {}

  ngOnInit(): void {}

  emitSearchEvent = (form: NgForm) => {
    console.log(form);
    this.searchEvent.emit(form);
  };
}
