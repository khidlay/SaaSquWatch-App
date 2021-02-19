import { Component, OnInit } from '@angular/core';
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
