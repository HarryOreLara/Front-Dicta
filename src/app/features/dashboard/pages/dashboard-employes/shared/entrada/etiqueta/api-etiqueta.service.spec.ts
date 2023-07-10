import { TestBed } from '@angular/core/testing';

import { ApiEtiquetaService } from './api-etiqueta.service';

describe('ApiEtiquetaService', () => {
  let service: ApiEtiquetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEtiquetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
