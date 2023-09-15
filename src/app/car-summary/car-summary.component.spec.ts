import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSummaryComponent } from './car-summary.component';

describe('CarSummaryComponent', () => {
  let component: CarSummaryComponent;
  let fixture: ComponentFixture<CarSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSummaryComponent]
    });
    fixture = TestBed.createComponent(CarSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
