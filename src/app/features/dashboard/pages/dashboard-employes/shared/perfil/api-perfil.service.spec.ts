import { TestBed } from '@angular/core/testing';

import { ApiPerfilService } from './api-perfil.service';

describe('ApiPerfilService', () => {
  let service: ApiPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
