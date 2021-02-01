import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {OrderItem} from '../models/orderitems';
import {FoodItemService} from '../services/foodItems.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  paymentForm: FormGroup;
  orderItem: OrderItem = new OrderItem();

  constructor(private formBuilder: FormBuilder,private foodItemService: FoodItemService,private router: Router) { }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      ccnumber: ['', Validators.required],
      cvv: ['', Validators.required]
  });
  }
  onSubmit(){
    var userId=localStorage.getItem('currentUserId');
    var ids=localStorage.getItem('ids');
    var result = ids.substring(1, ids.length-1);
    this.orderItem.orderedByUserId=userId;
    this.orderItem.foodItemOrderStr=ids;
    this.foodItemService.saveFoodItemsOrder(this.orderItem).subscribe( data => {
      console.log(data);
      this.router.navigate(['/orderDetail']);

    },
    error => console.log(error));
  }
}
