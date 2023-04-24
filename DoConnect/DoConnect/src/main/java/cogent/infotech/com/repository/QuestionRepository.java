package cogent.infotech.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

import cogent.infotech.com.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
	
	List<Question> findByStatus(String status);
	List<Question> findById(int id);
	List<Question> findByTopic(String topic);

}
