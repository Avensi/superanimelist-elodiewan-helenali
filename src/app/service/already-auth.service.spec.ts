import { TestBed } from '@angular/core/testing';

import { AlreadyAuthService } from './already-auth.service';

describe('AlreadyAuthService', () => {
  let service: AlreadyAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlreadyAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
