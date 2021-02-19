import { Component, OnInit } from '@angular/core';
import { MovieWatchlistService } from '../movie-watchlist.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {
  constructor(private movieService: MovieWatchlistService) {}

  ngOnInit(): void {}
}
