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
	
//	@GetMapping("/")
//	public void home() {
//		userService.home();
//	}
	
	@PostMapping("/adduser")
	public void addUser(@Validated @RequestBody User user) {
		userService.addUser(user);
	}
	
	@PostMapping("/addnewuser")
	public void addNewUser(@Validated @RequestBody User user) {
		userService.addNewUser(user);
	}
	
	@PostMapping("/updateuser")
	public void updateUser(@Validated @RequestBody User user) {
		userService.updateUser(user);
	}
	
	@GetMapping("/getlogin")
	public List<String> getLogin(@Validated @RequestBody User user) {
		return userService.getLogin(user);
	}
	
//	@GetMapping("/userloginverify")
//	public boolean userLoginVerify(@Validated @RequestBody User user) {
//		return userService.userLoginVerify(user);
//	}
//	
//	@GetMapping("/getallusers")
//	public List<User> getAllUsers() {
//		return userService.getAllUsers();
//	}
//	
//	@GetMapping("/getallusersbyid")
//	public Optional<User> getAllUsersById(@Validated @RequestBody int id) {
//		return userService.getAllUsersById(id);
//	}
//	
//	@GetMapping("/getallusersbyname")
//	public List<User> getAllUsersByName(@Validated @RequestBody String name) {
//		return userService.getAllUsersByName(name);
//	}
//	
//	@GetMapping("/getallusersbytype")
//	public List<User> getAllUsersByUserType(@Validated @RequestBody String userType) {
//		return userService.getAllUsersByUserType(userType);
//	}

}