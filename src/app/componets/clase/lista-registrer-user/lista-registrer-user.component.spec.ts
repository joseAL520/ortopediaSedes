import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistrerUserComponent } from './lista-registrer-user.component';

describe('ListaRegistrerUserComponent', () => {
  let component: ListaRegistrerUserComponent;
  let fixture: ComponentFixture<ListaRegistrerUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRegistrerUserComponent]
    });
    fixture = TestBed.createComponent(ListaRegistrerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
