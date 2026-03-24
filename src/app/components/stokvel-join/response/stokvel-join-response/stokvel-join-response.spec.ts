import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokvelJoinResponse } from './stokvel-join-response';

describe('StokvelJoinResponse', () => {
  let component: StokvelJoinResponse;
  let fixture: ComponentFixture<StokvelJoinResponse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StokvelJoinResponse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokvelJoinResponse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
