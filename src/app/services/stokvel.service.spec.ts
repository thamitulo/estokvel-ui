import { TestBed } from '@angular/core/testing';

import { StokvelService } from './stokvel.service';

describe('StokvelService', () => {
  let service: StokvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StokvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
