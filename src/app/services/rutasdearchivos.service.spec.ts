import { TestBed } from '@angular/core/testing';

import { RutasdearchivosService } from './rutasdearchivos.service';

describe('RutasdearchivosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RutasdearchivosService = TestBed.get(RutasdearchivosService);
    expect(service).toBeTruthy();
  });
});
