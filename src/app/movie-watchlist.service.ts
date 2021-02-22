import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieWatchlistService {
  apiKey: string = 'c92a26a58678fac95ac049b1e5e1d7e4';
  movieDBTrendingUrl: string =
    'https://api.themoviedb.org/3/trending/movie/day';
  movieDBSearchUrl: string = 'https://api.themoviedb.org/3/search/movie';
  movieDBGenreUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  movieDBDiscoverUrl: string = 'https://api.themoviedb.org/3/discover/movie';
  watchlist: any[] = [];

  constructor(private http: HttpClient) {}

  getTrendingMovies = (): any => {
    console.log('I heard this');
    return this.http.get(this.movieDBTrendingUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  };

  addwatchList = (movie: any): void => {
    this.watchlist.push(movie);
    console.log(this.watchlist);
  };

  removewatchList = (movie: any): any => {
    this.watchlist.splice(movie);
    console.log(this.watchlist);
  };

  getwatchList = (): any[] => {
    return this.watchlist;
  };

  getGenreMovies = (): any => {
    return this.http.get(this.movieDBGenreUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  };

  searchMovies = (searchTerm: string): any => {
    return this.http.get(this.movieDBSearchUrl, {
      params: {
        api_key: this.apiKey,
        query: searchTerm,
      },
    });
  };

  discoverMovies = (genre: string, rating: string) => {
    return this.http.get(this.movieDBDiscoverUrl, {
      params: {
        api_key: this.apiKey,
        with_genres: genre,
        'vote_average.gte': rating,
      },
    });
  };
}
