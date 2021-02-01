package com.FoodOrderApplication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FoodOrderApplication.exception.UserNotFoundException;
import com.FoodOrderApplication.model.User;
import com.FoodOrderApplication.repository.UserDao;

@Service
public class LoginServiceImpl {
	@Autowired
	UserDao userDao;

	public User authenticate(String username, String password) throws UserNotFoundException {
		User user = userDao.findUserByUsername(username);
		if(user==null)
			throw new UserNotFoundException("User not found exception");
		if (user.getPassword().equals(password)) {
			return user;
		}
		else {
			user=null;
			return user;
		}
		
	}
}
