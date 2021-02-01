import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodItem } from '../models/fooditems';
import { FoodItemService } from '../services/foodItems.service';
@Component({
  selector: 'app-food-item-add',
  templateUrl: './food-item-add.component.html',
  styleUrls: ['./food-item-add.component.css']
})
export class FoodItemAddComponent implements OnInit {
  submitted=false;
  message="FoodItemAddComponent";
  foodItemAddForm: FormGroup;
  foodItemName="";
  foodItemCost=0.0;
  foodItem: FoodItem = new FoodItem();
  constructor( private formBuilder: FormBuilder,private foodItemService:FoodItemService) { }

  ngOnInit(): void { this.foodItemAddForm = this.formBuilder.group({
    foodItemName: ['', Validators.required],
    foodItemCost: ['', Validators.required]
});
  }

  onSubmit(){
    console.log("Inside onSubmit");
    this.foodItem.foodItemName=this.foodItemAddForm.controls.foodItemName.value;
    this.foodItem.foodCost=this.foodItemAddForm.controls.foodItemCost.value;
    this.foodItemService.saveFoodItems(this.foodItem).subscribe(data => 
      {
        console.log(data);
      //  window.location.reload();
      }, error => console.log(error));
    console.log("username:-" + this.foodItemAddForm.controls.foodItemName.value);
    console.log("password:-" + this.foodItemAddForm.controls.foodItemCost.value);
  }
}
