package com.FoodOrderApplication.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FoodOrderApplication.model.User;
import com.FoodOrderApplication.service.UserServiceImpl;

@RestController
@RequestMapping("/api/user")
public class UserController {
	@Autowired
	UserServiceImpl userServiceImpl;
	
	@GetMapping("/changePassword/{newPassword}")
	public ResponseEntity<Boolean> changePassword(@PathVariable (value="newPassword") String newPassword,HttpSession session){
		Boolean flag=false;
		User user=(User)session.getAttribute("loggedInUser");
		if(user!=null) {
		flag=userServiceImpl.changePassword(newPassword,user.getUsername());
		}
		return ResponseEntity.ok().body(flag);
	}
	
	@GetMapping("/addUser/{username}/{password}")
	public ResponseEntity<User> addUser(@PathVariable (value="username") String username,@PathVariable (value="password") String password,HttpSession session){
		Boolean flag=false;
		User user=(User)session.getAttribute("loggedInUser");
		User registeredUser=userServiceImpl.registerUser(username,password);
		return ResponseEntity.ok().body(registeredUser);
	}
	

}
