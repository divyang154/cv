import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FoodItemComponent } from './food-item/food-item.component';
import {FoodItemAddComponent} from '../app/food-item-add/food-item-add.component';
import {FoodItemListallComponent} from '../app/food-item-listall/food-item-listall.component';
import {FoodItemUpdateComponent} from './food-item-update/food-item-update.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {UserSearchComponent} from './user-search/user-search.component';
import {AvailableItemsComponent} from './available-items/available-items.component';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {PaymentDetailsComponent} from './payment-details/payment-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'addFoodItem', component: FoodItemAddComponent },
  { path: 'listAllFoodItem', component: FoodItemListallComponent },
  { path: 'foodItemUpdate', component: FoodItemUpdateComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'userSearch', component: UserSearchComponent },
  { path: 'availableItems', component: AvailableItemsComponent },
  { path: 'orderDetail', component: OrderDetailsComponent },
  { path: 'paymentDetail', component: PaymentDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
