import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FoodItemComponent } from './food-item/food-item.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FoodItemListallComponent } from './food-item-listall/food-item-listall.component';
import { FoodItemAddComponent } from './food-item-add/food-item-add.component';
import { FoodItemUpdateComponent } from './food-item-update/food-item-update.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { AvailableItemsComponent } from './available-items/available-items.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FoodItemComponent,
    ChangePasswordComponent,
    FoodItemListallComponent,
    FoodItemAddComponent,
    FoodItemUpdateComponent,
    RegisterUserComponent,
    UserSearchComponent,
    AvailableItemsComponent,
    PaymentDetailsComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
