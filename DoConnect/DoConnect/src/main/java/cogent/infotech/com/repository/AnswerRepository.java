package cogent.infotech.com.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import cogent.infotech.com.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {
	
	List<Answer> findByStatus(String status);
	List<Answer> findById(int id);
	List<Answer> getAllByQuestionId(int questionId);

}
