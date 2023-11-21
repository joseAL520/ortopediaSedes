import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePromotionsComponent } from './table-promotions.component';

describe('TablePromotionsComponent', () => {
  let component: TablePromotionsComponent;
  let fixture: ComponentFixture<TablePromotionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePromotionsComponent]
    });
    fixture = TestBed.createComponent(TablePromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
