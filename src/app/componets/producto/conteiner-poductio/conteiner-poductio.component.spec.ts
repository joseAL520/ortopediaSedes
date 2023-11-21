import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteinerPoductioComponent } from './conteiner-poductio.component';

describe('ConteinerPoductioComponent', () => {
  let component: ConteinerPoductioComponent;
  let fixture: ComponentFixture<ConteinerPoductioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConteinerPoductioComponent]
    });
    fixture = TestBed.createComponent(ConteinerPoductioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
