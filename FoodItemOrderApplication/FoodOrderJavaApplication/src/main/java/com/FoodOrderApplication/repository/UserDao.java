package com.FoodOrderApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.FoodOrderApplication.model.User;

public interface UserDao extends JpaRepository<User,Integer>{
	@Query("from User where username=:usernameStr")
	public User findUserByUsername(@Param("usernameStr")   String usernameStr);
}
