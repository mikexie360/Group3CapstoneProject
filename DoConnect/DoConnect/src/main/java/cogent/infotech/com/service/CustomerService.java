package cogent.infotech.com.service;

import java.util.List;
import java.util.Optional;

import cogent.infotech.com.entity.*;

public interface CustomerService {
	
	public void createUser(User user);
	public List<User> getUsers();

}