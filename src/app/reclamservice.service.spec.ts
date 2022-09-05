import { TestBed } from '@angular/core/testing';

import { ReclamserviceService } from './reclamservice.service';

describe('ReclamserviceService', () => {
  let service: ReclamserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
