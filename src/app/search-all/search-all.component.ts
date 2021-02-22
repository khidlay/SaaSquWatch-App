import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieWatchlistService } from '../movie-watchlist.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.css'],
})
export class SearchAllComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<NgForm>();
  @Output() genreEvent = new EventEmitter<NgForm>();

  genres: any = [];
  ratings: any = [];

  constructor(private movieService: MovieWatchlistService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  emitSearchEvent = (form: NgForm) => {
    console.log(form);
    this.searchEvent.emit(form);
  };

  emitGenreEvent = (form: NgForm) => {
    console.log(form);
    this.genreEvent.emit(form);
  };

  getGenres = () => {
    this.movieService.getGenreMovies().subscribe((response) => {
      console.log(response);
      this.genres = response.genres;
    });
  };

  getRatings = () => {
    this.movieService.discoverRatings(this.ratings).subscribe((response) => {
      console.log(response);
      this.ratings = response.ratings;
    });
  };
}
