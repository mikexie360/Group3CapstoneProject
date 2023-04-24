package cogent.infotech.com.service;

import java.util.List;
import java.util.Optional;

import cogent.infotech.com.entity.User;

public interface UserService {
	
	public void createUser(User user);
	public List<User> getUsers();

}