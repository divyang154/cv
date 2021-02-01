package com.FoodOrderApplication.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FoodOrderApplication.exception.UserNotFoundException;
import com.FoodOrderApplication.model.User;
import com.FoodOrderApplication.service.LoginServiceImpl;
import com.FoodOrderApplication.service.UserServiceImpl;

@RestController
@RequestMapping("/api/login")
public class LoginController {
   @Autowired
   LoginServiceImpl loginServiceImpl;
   
   @Autowired
   UserServiceImpl userServiceImpl;
	
	@GetMapping("/authenticate/{username}/{password}")
	public ResponseEntity<User> login(@PathVariable(value="username") String username,@PathVariable(value="password") String password,HttpSession session){
		User user=null;
		System.out.println("Username:-" + username);
		System.out.println("Password:-" + password);
		try {
			user=loginServiceImpl.authenticate(username, password);
			if(user!=null) {
				session.setAttribute("loggedInUser", user);
			}else {
				return ResponseEntity.badRequest().body(user);
			}
		} catch (UserNotFoundException e) {
			return ResponseEntity.badRequest().body(user);
		}
		return ResponseEntity.ok().body(user);
	}
}
