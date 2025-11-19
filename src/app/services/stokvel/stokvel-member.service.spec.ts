import { TestBed } from '@angular/core/testing';

import { StokvelMemberService } from './stokvel-member.service';

describe('StokvelMemberService', () => {
  let service: StokvelMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StokvelMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
