import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { IApiService } from './api.interface';

describe('ApiService', () => {
  let service: IApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
