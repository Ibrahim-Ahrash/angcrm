import { TestBed } from '@angular/core/testing';

import { ConfServService } from './conf-serv.service';

describe('ConfServService', () => {
  let service: ConfServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
