import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  hideFoodItemAdd=true;
  hideFoodListAllItem=false;

  title="foodItems123"
  constructor() { }

  ngOnInit(): void {
  }
  addFoodItemClick(){
    this.hideFoodItemAdd=false;
    this.hideFoodListAllItem=true;
    }
    showAllFoodItemsClick(){
      this.hideFoodItemAdd=true;
      this.hideFoodListAllItem=false;
      }
}
