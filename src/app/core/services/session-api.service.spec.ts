import { TestBed } from '@angular/core/testing';

import { SessionApiService } from './session-api.service';

describe('ServicesService', () => {
  let service: SessionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
