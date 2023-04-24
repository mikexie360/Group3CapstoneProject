package cogent.infotech.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import cogent.infotech.com.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>, CrudRepository<User, Integer>{

	User findByUsername(String name);

}
