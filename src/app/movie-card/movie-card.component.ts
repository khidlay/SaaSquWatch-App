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
  @Input() movieRef: any;
  @Input() watchlistRef!: any[];

  watchlist: any[] = [];

  constructor(private movieService: MovieWatchlistService) {}

  ngOnInit(): void {}

  emitwatchlistEvent = (form: NgForm): void => {
    this.watchlistEvent.emit(form);
  };

  checkwatchList = (movie: any): boolean => {
    return this.movieRef.some((item) => {
      return item.id === movie.id;
    });
  };
}
