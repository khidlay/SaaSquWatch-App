import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieWatchlistService } from '../movie-watchlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieResults: any;
  watchlist: any[] = [];

  constructor(private movieService: MovieWatchlistService) {}

  ngOnInit(): void {
    this.getTrending();
  }

  getTrending = () =>
    this.movieService.getTrendingMovies().subscribe((response: any) => {
      console.log(response);
      this.movieResults = response;
    });

  onSubmit = (form: NgForm) => {
    console.log(form);
    console.log(form.form.value.searchTerm);
    this.movieService
      .searchMovies(form.form.value.searchTerm)
      .subscribe((response: any) => {
        console.log(response);
        this.movieResults = response;
      });
  };

  onDiscoverSubmit = (form: NgForm) => {
    let rating = form.form.value.rating;
    let genre = form.form.value.genre;
    this.movieService
      .discoverMovies(genre, rating)
      .subscribe((response: any) => {
        this.movieResults = response;
      });
  };

  getGenre = () =>
    this.movieService.getGenreMovies().subscribe((response: any) => {
      this.movieResults = response;
    });

  onwatchList = (movie: any): void => {
    this.movieService.addwatchList(movie);
    this.getAndSetWatchList();
  };

  // So home page knows about watchlist
  getAndSetWatchList = (): void => {
    this.watchlist = this.movieService.getwatchList();
  };
}
