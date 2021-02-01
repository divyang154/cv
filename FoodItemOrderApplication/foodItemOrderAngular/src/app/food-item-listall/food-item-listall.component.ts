import { Component, OnInit } from '@angular/core';
import {FoodItemService} from '../services/foodItems.service';
import { FoodItem } from 'src/app/models/fooditems';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {FoodItemUpdateComponent} from '../food-item-update/food-item-update.component';

@Component({
  selector: 'app-food-item-listall',
  templateUrl: './food-item-listall.component.html',
  styleUrls: ['./food-item-listall.component.css'],
  entryComponents:[FoodItemUpdateComponent]
})
export class FoodItemListallComponent implements OnInit {

  message="FoodItemListAllComponent";
  foodItemList: any[];
  hideFoodListAllItem=false;
  editFlag=true;
  hideFoodListUpdate=true;
  foodItemId :number;

  constructor(private foodItemService : FoodItemService,private router: Router) { }

  ngOnInit(): void {
    console.log("inside FoodItemListallComponent");
    this.findAllFoodItems();
  }

  findAllFoodItems(){
    this.foodItemService.getFoodItemList().subscribe(
      data => {
   data.forEach(element => {
     console.log("Element" + element);
    //  this.foodItemList.push();
   });
   this.foodItemList=data;
   console.log("jkl" + this.foodItemList);
      }
      , error => console.log(error));
    console.log("foodItemList" +this.foodItemList) ;
  }

  deleteEmployee(foodItemId){
    console.log("foodItemId" + foodItemId);
   this.foodItemService.deleteFoodItemById(foodItemId).subscribe(data =>
    {
      console.log(data);
      window.location.reload();
    }
    ,error =>console.log(error));

  }

  updateFoodItem(foodItemId){
    this.foodItemId=foodItemId;
    this.hideFoodListUpdate=false;
    this.hideFoodListAllItem=true;
  }
}
