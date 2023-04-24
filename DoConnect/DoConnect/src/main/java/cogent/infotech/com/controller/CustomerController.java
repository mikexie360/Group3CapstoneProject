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

import cogent.infotech.com.service.CustomerService;
import cogent.infotech.com.entity.*;

@RestController
public class CustomerController {
	
	@Autowired
	private Service customerService;
	
	@GetMapping("/")
	public void home() {
		customerService.home();
	}
	
	@PostMapping("/user/adduser")
	public void addUser(@Validated @RequestBody User user) {
		customerService.addUser(user);
	}
	
	@PostMapping("/updateuser")
	public void updateUser(@Validated @RequestBody User user) {
		customerService.updateUser();
	}
	
	@GetMapping("/getbylogin")
	public List<User> getByLogin(@Validated @RequestBody String login) {
		return customerService.getByLogin(login);
	}
	
	@GetMapping("/getbyusername")
	public List<User> getByUsername(@Validated @RequestBody String username) {
		return customerService.getByUsername(username);
	}
	
	@GetMapping("/getallcustomer")
	public List<User> getAllCustomer() {
		return customerService.getAllCustomer();
	}

}