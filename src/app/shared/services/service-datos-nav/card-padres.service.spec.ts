import { TestBed } from '@angular/core/testing';

import { CardPadresService } from './card-padres.service';

describe('CardPadresService', () => {
  let service: CardPadresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardPadresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
