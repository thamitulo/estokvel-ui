import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokvelListComponent } from './stokvel-list.component';

describe('StokvelListComponent', () => {
  let component: StokvelListComponent;
  let fixture: ComponentFixture<StokvelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StokvelListComponent]
    });
    fixture = TestBed.createComponent(StokvelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
