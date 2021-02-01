package com.FoodOrderApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.FoodOrderApplication.model.FoodItemOrder;

public interface FoodItemOrderDao extends JpaRepository<FoodItemOrder,Integer>{

}
