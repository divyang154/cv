package com.FoodOrderApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.FoodOrderApplication.model.FoodItem;
import com.FoodOrderApplication.model.FoodItemOrder;
import com.FoodOrderApplication.service.FoodItemServiceImpl;

@RestController
@RequestMapping("/api/foodItems")
public class FoodItemController {
	@Autowired
	FoodItemServiceImpl foodServiceImpl;

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ResponseEntity<FoodItem> saveFoodItem(@RequestBody FoodItem foodItem) {
		FoodItem foodItemNew = foodServiceImpl.saveFoodItem(foodItem);
		return ResponseEntity.ok().body(foodItemNew);
	}

	@RequestMapping(value = "/getFoodItemList", method = RequestMethod.GET)
	public ResponseEntity<List<FoodItem>> getAllFoodItems() {
		List<FoodItem> foodItemList = foodServiceImpl.getAllFoodItem();
		return ResponseEntity.ok().body(foodItemList);
	}

	@RequestMapping(value = "/getFoodItem/{id}", method = RequestMethod.GET)
	public ResponseEntity<FoodItem> getFoodItemById(@PathVariable(value = "id") Integer id) {

		FoodItem foodItem = foodServiceImpl.getFoodItemById(id);
		return ResponseEntity.ok().body(foodItem);
	}

	@RequestMapping(value = "/deleteFoodItemById/{id}", method = RequestMethod.GET)
	public ResponseEntity<Boolean> deleteFoodItemById(@PathVariable(value = "id") Integer id) {
		foodServiceImpl.deleteFoodItemById(id);
		return ResponseEntity.ok().body(true);
	}

	@RequestMapping(value = "/updateFoodItem", method = RequestMethod.POST)
	public ResponseEntity<FoodItem> updateFoodItem(@RequestBody FoodItem foodItem) {
		FoodItem foodItemNew = foodServiceImpl.updateFoodItem(foodItem);
		return ResponseEntity.ok().body(foodItemNew);
	}

	@RequestMapping(value = "/foodItemToBeSearched/{foodItemName}", method = RequestMethod.GET)
	public ResponseEntity<List<FoodItem>> foodItemToBeSearched(
			@PathVariable(value = "foodItemName") String foodItemName) {
		List<FoodItem> foodItemList = foodServiceImpl.foodItemToBeSearched(foodItemName);
		return ResponseEntity.ok().body(foodItemList);
	}

	@RequestMapping(value = "/foodItemToBeSearchedById/{foodItemName}", method = RequestMethod.GET)
	public ResponseEntity<List<FoodItem>> foodItemToBeSearchedById(
			@PathVariable(value = "foodItemName") String stringIds) {
//		String stringIds="";
		List<FoodItem> foodItemList = foodServiceImpl.foodItemToBeSearchedById(stringIds);
		return ResponseEntity.ok().body(foodItemList);
	}

	@RequestMapping(value = "/foodItemCost/{stringIds}", method = RequestMethod.GET)
	public ResponseEntity<Double> getFoodItemCost(@PathVariable(value = "stringIds") String stringIds) {
//		String stringIds="";
		Double totalCost = foodServiceImpl.calculateFoodCost(stringIds);
		return ResponseEntity.ok().body(totalCost);
	}

	@RequestMapping(value = "/saveFoodItemOrder", method = RequestMethod.POST)
	public ResponseEntity<FoodItemOrder> saveFoodItemOrder(@RequestBody FoodItemOrder foodItemOrder) {
		FoodItemOrder foodItemOrderNew = foodServiceImpl.saveFoodItemOrder(foodItemOrder);
		return ResponseEntity.ok().body(foodItemOrderNew);
	}

	@RequestMapping(value="/getCompleteFoodOrderItem/{userId}", method=RequestMethod.GET)
	public ResponseEntity<List<FoodItemOrder>>getCompleteFoodOrderItem(@PathVariable(value="userId") String userId){
        Integer userIdInt=Integer.parseInt(userId);
		List<FoodItemOrder> foodItemOrder=foodServiceImpl.getFoodItemOrderListForUser(userIdInt);
		return ResponseEntity.ok().body(foodItemOrder);
	}
}
