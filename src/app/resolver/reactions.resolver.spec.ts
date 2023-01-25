import { TestBed } from '@angular/core/testing';

import { ReactionsResolver } from './reactions.resolver';

describe('ReactionsResolver', () => {
  let resolver: ReactionsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReactionsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
