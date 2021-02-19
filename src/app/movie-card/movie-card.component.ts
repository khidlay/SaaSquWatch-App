import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  emitwatchlistEvent = (movie: any): void => {
    this.watchlistEvent.emit(movie);
  };

  checkwatchList = (movie: any): boolean => {
    return this.movieRef.some((item) => {
      return item.id === movie.id;
    });
  };
}
