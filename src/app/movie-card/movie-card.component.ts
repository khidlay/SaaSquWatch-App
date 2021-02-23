import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MovieWatchlistService } from '../movie-watchlist.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Output() watchlistEvent = new EventEmitter<any>();
  @Output() deletewatchlistEvent = new EventEmitter<void>();
  @Input() movieRef: any;
  @Input() watchlistRef!: any[];

  watchlist: any[] = [];
  popup: boolean = false;

  constructor(private movieService: MovieWatchlistService) {}

  ngOnInit(): void {}

  emitwatchlistEvent = (form: NgForm): void => {
    this.watchlistEvent.emit(form);
  };

  emitDeletewatchlistEvent = (movie): void => {
    this.deletewatchlistEvent.emit(movie);
  };

  checkwatchList = (movie: any): boolean => {
    return this.movieRef.some((item) => {
      return item.id === movie.id;
    });
  };

  showPopup = (): void => {
    this.popup = !this.popup;
  };
}
