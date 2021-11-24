import { TestBed } from '@angular/core/testing';

import { ObservadorService } from './observador.service';

describe('ObservadorService', () => {
  let service: ObservadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
