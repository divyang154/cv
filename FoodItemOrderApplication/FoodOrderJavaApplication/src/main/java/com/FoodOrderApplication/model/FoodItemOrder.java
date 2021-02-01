package com.FoodOrderApplication.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
@Entity
@Table(name = "food_items_order")
public class FoodItemOrder {
	@Id
	@Column(name = "order_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int orderId;
	@Column(name = "ordered_by_user_id")
	public int orderedByUserId;
	@Column(name = "food_item_order_str")
	public String foodItemOrderStr;
	@Column(name = "order_date")
	public Date orderDate;
	public String getOrderItemNameStr() {
		return orderItemNameStr;
	}
	public void setOrderItemNameStr(String orderItemNameStr) {
		this.orderItemNameStr = orderItemNameStr;
	}
	@Transient // consistent with other annotations
	private String orderItemNameStr;
	
	public Date getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getOrderedByUserId() {
		return orderedByUserId;
	}
	public void setOrderedByUserId(int orderedByUserId) {
		this.orderedByUserId = orderedByUserId;
	}
	public String getFoodItemOrderStr() {
		return foodItemOrderStr;
	}
	public void setFoodItemOrderStr(String foodItemOrderStr) {
		this.foodItemOrderStr = foodItemOrderStr;
	}
}
