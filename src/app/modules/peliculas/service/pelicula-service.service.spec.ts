import { TestBed } from '@angular/core/testing';

import { PeliculaServiceService } from './pelicula-service.service';

describe('PeliculaServiceService', () => {
  let service: PeliculaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
