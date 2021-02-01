package com.FoodOrderApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FoodOrderApplication.model.FoodItem;
@Repository
public interface FoodItemDao extends JpaRepository<FoodItem,Integer>{

}
