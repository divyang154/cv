package com.FoodOrderApplication.service;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FoodOrderApplication.model.FoodItem;
import com.FoodOrderApplication.model.FoodItemOrder;
import com.FoodOrderApplication.repository.FoodItemDao;
import com.FoodOrderApplication.repository.FoodItemOrderDao;
@Service
public class FoodItemServiceImpl {

	@Autowired
	FoodItemDao foodItemDao;
	@Autowired
	FoodItemOrderDao foodItemOrderDao;
	
	public FoodItem saveFoodItem( FoodItem foodItem ) {
		 foodItem=foodItemDao.save(foodItem);
		 return foodItem;
	}
	
	public FoodItemOrder saveFoodItemOrder( FoodItemOrder foodItemOrder ) {
		foodItemOrder.setOrderDate(new Date());
		FoodItemOrder foodItemOrderNew=foodItemOrderDao.save(foodItemOrder);
		 return foodItemOrderNew; 
	}
	
	public List<FoodItem> getAllFoodItem(){
		return foodItemDao.findAll();	
	}
	
	public FoodItem getFoodItemById(Integer id) {
		Optional<FoodItem>foodItemList= foodItemDao.findById(id);
		return foodItemList.get();
	}
	public void deleteFoodItemById(Integer id) {
		foodItemDao.deleteById(id);		
	}
	
	public FoodItem updateFoodItem(FoodItem foodItem ) { 
		Optional<FoodItem>foodItemList= foodItemDao.findById(foodItem.getFoodItemId());
		FoodItem oldFoodItem=foodItemList.get();
		oldFoodItem.setFoodCost(foodItem.getFoodCost());
		oldFoodItem.setFoodItemName(foodItem.getFoodItemName());
		FoodItem foodItemNew=foodItemDao.save(oldFoodItem);
		return foodItemNew;
	}
	
	public List<FoodItem> foodItemToBeSearchedById(String  stringIds) {
		
		String[] strArr=stringIds.split(",");
	    List<String> listStr = Arrays.asList(strArr);  
        System.out.println("strArr" +stringIds);
        return foodItemDao.findAll().stream().filter(foodItem -> listStr.contains(String.valueOf(foodItem.getFoodItemId()))).collect(Collectors.toList());
	}
	
	public List<FoodItem> foodItemToBeSearched(String foodItemName) {
		
		return foodItemDao.findAll().stream().filter(foodItem -> foodItem.getFoodItemName().contains(foodItemName))
	    .collect(Collectors.toList());
	}
	
    public String getCompleteFoodOrderItem(String stringIds) {
    	stringIds=stringIds.substring(1,stringIds.length()-1);
		String[] strArr=stringIds.split(",");
	    List<String> listStr = Arrays.asList(strArr);  
	    String completeOrderName="";
	    for (String string : listStr) {
	    	Integer id=Integer.parseInt(string);
	    	String foodItemName=foodItemDao.findById(id).get().getFoodItemName();
	    	completeOrderName=completeOrderName + ";;"  + foodItemName;
		}
	    return completeOrderName;

	}
	
	public Double calculateFoodCost(String stringIds) {
		Double foodItemTotalCost=0.0;
		String[] strArr=stringIds.split(",");
	    List<String> listStr = Arrays.asList(strArr);  
	    List<FoodItem>foodItemList=foodItemDao.findAll().stream().filter(foodItem -> listStr.contains(String.valueOf(foodItem.getFoodItemId()))).collect(Collectors.toList());
		for (FoodItem foodItem : foodItemList) {
			foodItemTotalCost=foodItemTotalCost+foodItem.getFoodCost();
		}
		return foodItemTotalCost;
	}
	
	public List<FoodItemOrder> getFoodItemOrderListForUser(Integer userId) {
		List<FoodItemOrder> foodItemOrderList=foodItemOrderDao.findAll().stream().filter(foodItemOrder -> userId.equals(new Integer(foodItemOrder.getOrderedByUserId()))).collect(Collectors.toList());
		for (FoodItemOrder foodItemOrder : foodItemOrderList) {
			String completeOrderName=getCompleteFoodOrderItem(foodItemOrder.getFoodItemOrderStr());
			foodItemOrder.setOrderItemNameStr(completeOrderName);
		}
		return foodItemOrderList;
	}
}


