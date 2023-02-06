import { TestBed } from '@angular/core/testing';

import { CongesConfirmerService } from './conges-confirmer.service';

describe('CongesConfirmerService', () => {
  let service: CongesConfirmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongesConfirmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
