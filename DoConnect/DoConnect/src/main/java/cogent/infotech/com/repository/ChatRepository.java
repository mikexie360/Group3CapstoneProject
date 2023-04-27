package cogent.infotech.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;
import cogent.infotech.com.entity.Chat;
import cogent.infotech.com.entity.User;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Integer>{
	
	List<Chat> findAllByTouser(String name);

}
