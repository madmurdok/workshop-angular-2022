import { TestBed } from '@angular/core/testing';

import { ActivatedRouteWrapperService } from './activated-route-wrapper.service';

describe('ActivatedRouteWrapperService', () => {
  let service: ActivatedRouteWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatedRouteWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
