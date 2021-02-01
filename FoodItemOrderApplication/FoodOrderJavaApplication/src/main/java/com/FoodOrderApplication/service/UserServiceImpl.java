package com.FoodOrderApplication.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FoodOrderApplication.model.User;
import com.FoodOrderApplication.repository.UserDao;

@Service
public class UserServiceImpl {
	@Autowired
	UserDao userDao;
	
	public boolean changePassword(String password,String username) {
		
		User user=userDao.findUserByUsername(username);
		user.setPassword(password);
		userDao.save(user);
		return true;
	}
	
	public User getUserByUsername(String username) {
		return userDao.findUserByUsername(username);
	}
	
	public User registerUser(String username,String password) {
		User user=new User();
		user.setUsername(username);
		user.setPassword(password);
		user.setUserRole("User");
		user.setCreatedOn(new Date());
		user.setUpdatedOn(new Date());
		userDao.save(user);
		return user;
	}
}
