import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokvelCreateComponent } from './stokvel-create.component';

describe('StokvelCreateComponent', () => {
  let component: StokvelCreateComponent;
  let fixture: ComponentFixture<StokvelCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StokvelCreateComponent]
    });
    fixture = TestBed.createComponent(StokvelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
