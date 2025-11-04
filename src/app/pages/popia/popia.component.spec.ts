import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopiaComponent } from './popia.component';

describe('PopiaComponent', () => {
  let component: PopiaComponent;
  let fixture: ComponentFixture<PopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
