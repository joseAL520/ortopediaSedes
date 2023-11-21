import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadoresComponent } from './entrenadores.component';

describe('EntrenadoresComponent', () => {
  let component: EntrenadoresComponent;
  let fixture: ComponentFixture<EntrenadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrenadoresComponent]
    });
    fixture = TestBed.createComponent(EntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
