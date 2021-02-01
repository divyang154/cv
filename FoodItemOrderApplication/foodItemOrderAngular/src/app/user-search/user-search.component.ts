import { Component, OnInit } from '@angular/core';
import {FoodItemService} from '../services/foodItems.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  foodItemList: any[];
  usearSearchForm: FormGroup;
  ids=[];

  constructor( private formBuilder: FormBuilder,private foodItemService : FoodItemService,private router: Router) { }

  ngOnInit(): void {
    this.usearSearchForm = this.formBuilder.group({
      search: ['', Validators.required]
  });
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

  search(){
   var search=this.usearSearchForm.controls.search.value;
   console.log("Search" + search);
   if(search==""){
   this.findAllFoodItems();
   }
   else{
    this.partialSearch(search);
   }
  }
  partialSearch(search){
    this.foodItemService.getSearchFoodItemList(search).subscribe(
      data => {
   data.forEach(element => {
     console.log("Element" + element);
    //  this.foodItemList.push();
   });
   this.foodItemList=data;
   console.log("jkl" + this.foodItemList);
      }
      , error => console.log(error));
  }

  proceedFurther(){
    localStorage.setItem('ids', JSON.stringify(this.ids));
    this.router.navigate(['/availableItems']);


  }
  onSelect(event, fooditem) {
    if(event.currentTarget.checked){
      console.log("checked" + fooditem.foodItemId);
      this.ids.push(fooditem.foodItemId);
    }
    if(!event.currentTarget.checked){
      const index: number = this.ids.indexOf(fooditem.foodItemId);
    this.ids.splice(index, 1);

    }
    console.log("ids" + this.ids);
}
}
