import { TestBed } from '@angular/core/testing';

import { CongesRefuserService } from './conges-refuser.service';

describe('CongesRefuserService', () => {
  let service: CongesRefuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongesRefuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
