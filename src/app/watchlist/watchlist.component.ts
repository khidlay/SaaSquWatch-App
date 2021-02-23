import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, OnInit } from '@angular/core';
import { MovieWatchlistService } from '../movie-watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  watchlist: any[] = [];
  constructor(private movieService: MovieWatchlistService) {}

  ngOnInit(): void {
    this.getAndSetWatchList();
  }

  getAndSetWatchList = () => {
    this.watchlist = this.movieService.getwatchList();
  };

  onDelete = (movie: any) => {
    this.movieService.toggleWatchList(movie);
    this.getAndSetWatchList();
  };
}
