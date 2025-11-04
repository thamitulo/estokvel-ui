import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokvelBasicsComponent } from './stokvel-basics.component';

describe('StokvelBasicsComponent', () => {
  let component: StokvelBasicsComponent;
  let fixture: ComponentFixture<StokvelBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StokvelBasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokvelBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
