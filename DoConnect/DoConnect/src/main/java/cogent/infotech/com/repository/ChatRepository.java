package cogent.infotech.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;
import cogent.infotech.com.entity.Chat;
import cogent.infotech.com.entity.User;
public interface ChatRepository extends JpaRepository<Chat, Integer>{
	
	List<Chat> findAllByTo_User(String name);

}
