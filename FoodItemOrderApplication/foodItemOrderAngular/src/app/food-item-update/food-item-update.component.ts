import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import {FoodItem} from '../models/fooditems';
import {FoodItemService} from '../services/foodItems.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-item-update',
  templateUrl: './food-item-update.component.html',
  styleUrls: ['./food-item-update.component.css']
})
export class FoodItemUpdateComponent implements OnInit , OnChanges{

  message='FoodItemUpdateComponent';
  constructor(private router: Router,private foodItemService:FoodItemService,private formBuilder: FormBuilder) { }
  @Input() foodItemId :number;
  foodItem: FoodItem = new FoodItem();
  foodItemEditForm: FormGroup;

  ngOnInit(): void {
    console.log("foodItemId" + this.foodItemId);
    this.foodItemEditForm = this.formBuilder.group({
      foodItemName: ['', Validators.required],
      foodItemCost: ['', Validators.required]
  });
  }
  ngOnChanges() {
    // create header using child_id
    console.log("foodItemId123321:" + this.foodItemId);
    this.getFoodItemById(this.foodItemId);
  }

  getFoodItemById(foodItemId){
    this.foodItemService.getFoodItemById(foodItemId).subscribe(data =>
      {
        console.log(data);
       this.foodItem=data;
       this.foodItemEditForm.controls.foodItemName.setValue(this.foodItem.foodItemName);
       this.foodItemEditForm.controls.foodItemCost.setValue(this.foodItem.foodCost);
      }
      ,error =>console.log(error));
  }

  submit(){
    // this.router.navigate(['/login']);
    var foodItemName=this.foodItemEditForm.controls.foodItemName.value;
    var foodCost=this.foodItemEditForm.controls.foodItemCost.value;
    console.log("foodItemName" + foodItemName);
    console.log("foodCost" + foodCost);
    this.foodItem.foodItemName=foodItemName;
    this.foodItem.foodCost=foodCost;
    this.foodItemService.updateFoodItem(this.foodItem).subscribe(data =>
      {
        console.log(data);
        window.location.reload;
      }
      ,error =>console.log(error));
   
  }
}
