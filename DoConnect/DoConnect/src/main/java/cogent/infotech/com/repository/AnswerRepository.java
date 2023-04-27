package cogent.infotech.com.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cogent.infotech.com.entity.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Integer> {
	
	List<Answer> findByStatus(String status);
	List<Answer> findById(int id);
	List<Answer> getAllByQuestionId(int questionId);

}
