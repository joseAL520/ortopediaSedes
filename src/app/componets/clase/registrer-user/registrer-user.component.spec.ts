import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerUserComponent } from './registrer-user.component';

describe('RegistrerUserComponent', () => {
  let component: RegistrerUserComponent;
  let fixture: ComponentFixture<RegistrerUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrerUserComponent]
    });
    fixture = TestBed.createComponent(RegistrerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
