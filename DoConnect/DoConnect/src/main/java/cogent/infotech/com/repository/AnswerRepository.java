package cogent.infotech.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cogent.infotech.com.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {
	
	Answer findByStatus(String status);
	Answer findById(int id);
	void deleteByQuestionId(int questionId);

}
