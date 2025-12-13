import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinStokvelModal } from './join-stokvel-modal';

describe('JoinStokvelModal', () => {
  let component: JoinStokvelModal;
  let fixture: ComponentFixture<JoinStokvelModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinStokvelModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinStokvelModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
