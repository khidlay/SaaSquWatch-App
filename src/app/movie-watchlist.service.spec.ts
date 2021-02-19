import { TestBed } from '@angular/core/testing';

import { MovieWatchlistService } from './movie-watchlist.service';

describe('MovieWatchlistService', () => {
  let service: MovieWatchlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieWatchlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
