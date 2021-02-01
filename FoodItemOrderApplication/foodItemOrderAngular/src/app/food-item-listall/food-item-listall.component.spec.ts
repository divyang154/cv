import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemListallComponent } from './food-item-listall.component';

describe('FoodItemListallComponent', () => {
  let component: FoodItemListallComponent;
  let fixture: ComponentFixture<FoodItemListallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItemListallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemListallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
