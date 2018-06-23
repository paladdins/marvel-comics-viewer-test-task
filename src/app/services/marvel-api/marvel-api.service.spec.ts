import { TestBed, inject } from '@angular/core/testing';

import { MarvelApiService } from './marvel-api.service';

describe('MarvelApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelApiService]
    });
  });

  it('should be created', inject([MarvelApiService], (service: MarvelApiService) => {
    expect(service).toBeTruthy();
  }));
});
