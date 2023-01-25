import { TestBed } from '@angular/core/testing';

import { AnimeReactionService } from './anime-reaction.service';

describe('AnimeReactionService', () => {
  let service: AnimeReactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeReactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
