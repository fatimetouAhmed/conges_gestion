import { TestBed } from '@angular/core/testing';

import { DemandeCongeService } from './demande-conge.service';

describe('DemandeCongeService', () => {
  let service: DemandeCongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeCongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
