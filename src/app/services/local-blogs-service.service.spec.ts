import { TestBed } from '@angular/core/testing';

import { LocalBlogsServiceService } from './local-blogs-service.service';

describe('LocalBlogsServiceService', () => {
  let service: LocalBlogsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalBlogsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
