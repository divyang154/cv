import { Component, OnInit } from '@angular/core';
import {FoodItemService} from '../services/foodItems.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-available-items',
  templateUrl: './available-items.component.html',
  styleUrls: ['./available-items.component.css']
})
export class AvailableItemsComponent implements OnInit {
  ids:string;
  foodItemList: any[];
  totalCost:number;
  availItemForm: FormGroup;


  constructor(private formBuilder: FormBuilder,private foodItemService : FoodItemService,private router: Router) { }

  ngOnInit(): void {
    this.availItemForm = this.formBuilder.group({
      amount: ['', Validators.required]
  });
    this.ids=localStorage.getItem('ids');
    console.log("ids" + this.ids);
    this.findAllFoodItems( this.ids);
    this.calculateCost(this.ids);
  }

  findAllFoodItems(ids){
  console.log("ids" + ids[0]);
  console.log("ids" + ids[1]);
  var result = ids.substring(1, ids.length-1);

    this.foodItemService.getFoodItemByStr(result).subscribe(
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

  calculateCost(ids){
    var result = ids.substring(1, ids.length-1);
    this.foodItemService.getFoodItemCost(result).subscribe(
      data => {
   this.totalCost=data;
   this.availItemForm.controls.amount.setValue(this.totalCost);

  }
      , error => console.log(error));
    console.log("foodItemList" +this.foodItemList) ;
    }

    payment(){
      console.log("Inside payment") ;
      this.router.navigate(['/paymentDetail']);


    }

}
