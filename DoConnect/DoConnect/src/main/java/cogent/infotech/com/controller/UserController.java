package cogent.infotech.com.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cogent.infotech.com.service.UserServiceImpl;
import cogent.infotech.com.entity.User;

@RestController
public class UserController {
	
	@Autowired
	private UserServiceImpl userService;
	
	@PostMapping("/users")
	public void saveMovie(@Validated @RequestBody User user) {
		userService.createUser(user);
	}
	@GetMapping("/users")
	public List<User> getUsers() {
		return userService.getUsers();
	}

}