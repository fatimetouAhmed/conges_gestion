import { TestBed } from '@angular/core/testing';

import { TypeCongesService } from './type-conges.service';

describe('TypeCongesService', () => {
  let service: TypeCongesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeCongesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
