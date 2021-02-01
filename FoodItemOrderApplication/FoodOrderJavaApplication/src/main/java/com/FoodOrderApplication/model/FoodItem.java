package com.FoodOrderApplication.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "fooditems")
public class FoodItem {
	@Id
	@Column(name = "food_items_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int foodItemId;

	@Column(name = "food_item_name")
	private String foodItemName;
	@Column(name = "food_item_cost")
	private Double foodCost;
	
	public String getFoodItemName() {
		return foodItemName;
	}
	public void setFoodItemName(String foodItemName) {
		this.foodItemName = foodItemName;
	}
	public Double getFoodCost() {
		return foodCost;
	}
	public void setFoodCost(Double foodCost) {
		this.foodCost = foodCost;
	}
	public int getFoodItemId() {
		return foodItemId;
	}
	public void setFoodItemId(int foodItemId) {
		this.foodItemId = foodItemId;
	}
	
}
