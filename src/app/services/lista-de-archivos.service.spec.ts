import { TestBed } from '@angular/core/testing';

import { ListaDeArchivosService } from './lista-de-archivos.service';

describe('ListaDeArchivosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaDeArchivosService = TestBed.get(ListaDeArchivosService);
    expect(service).toBeTruthy();
  });
});
