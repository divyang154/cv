import { Component, OnInit } from '@angular/core';
import {FoodItemService} from '../services/foodItems.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {OrderItem} from '../models/orderitems';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  foodItemOrderList: any[];

  constructor(private foodItemService: FoodItemService,private router: Router) { }

  ngOnInit(): void {
    this.getFoodOrderItemOrder();
  }

  getFoodOrderItemOrder(){
    var userId=localStorage.getItem('currentUserId');
    this.foodItemService.getFoodOrderItems(userId).subscribe( data => {
    console.log(data);
    this.foodItemOrderList=data;
    },
    error => console.log(error));
  }

  logout(){
    this.router.navigate(['/login']);
  }

  toUserSearch(){
    this.router.navigate(['/userSearch']);
  }
}
