import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodItem } from '../models/fooditems';
import { Observable } from 'rxjs';
import {OrderItem} from '../models/orderitems';

@Injectable({ providedIn: 'root' })
export class FoodItemService {

    private baseUrl = '/api/foodItems'; 
    

    constructor(private http: HttpClient) {
       
    }

    saveFoodItems( foodItem: FoodItem): Observable<any> {
        return this.http.post(`${this.baseUrl}` + '/add',foodItem);
    }

    getFoodItemList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`  + '/getFoodItemList');
    }

    deleteFoodItemById(id : number):Observable<any> {
        return this.http.get(`${this.baseUrl}`  + '/deleteFoodItemById/'+  `${id}`);
    }

    getFoodItemById(id : number):Observable<any> {
        return this.http.get(`${this.baseUrl}`  + '/getFoodItem/'+  `${id}`);
    }

    updateFoodItem( foodItem: FoodItem): Observable<any> {
        return this.http.post(`${this.baseUrl}` + '/updateFoodItem',foodItem);
    }

    getSearchFoodItemList(searchString : String): Observable<any> {
        return this.http.get(`${this.baseUrl}`  + '/foodItemToBeSearched/'+  `${searchString}`);
    }

    getFoodItemByStr(stringIds : String): Observable<any> {
        return this.http.get(`${this.baseUrl}`  + '/foodItemToBeSearchedById/'+  `${stringIds}`);
    }

    getFoodItemCost(stringIds : String): Observable<any> {
        return this.http.get(`${this.baseUrl}`  + '/foodItemCost/'+  `${stringIds}`);
    }

    saveFoodItemsOrder( orderItem: OrderItem): Observable<any> {
        return this.http.post(`${this.baseUrl}` + '/saveFoodItemOrder',orderItem);
    }

    getFoodOrderItems(userId): Observable<any>{
        return this.http.get(`${this.baseUrl}` + '/getCompleteFoodOrderItem/'+  `${userId}`);
    }
}    