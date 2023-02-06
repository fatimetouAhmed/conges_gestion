import { TestBed } from '@angular/core/testing';

import { EmploiyesService } from './emploiyes.service';

describe('EmploiyesService', () => {
  let service: EmploiyesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploiyesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
