import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosuelSedeComponent } from './carosuel-sede.component';

describe('CarosuelSedeComponent', () => {
  let component: CarosuelSedeComponent;
  let fixture: ComponentFixture<CarosuelSedeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarosuelSedeComponent]
    });
    fixture = TestBed.createComponent(CarosuelSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
