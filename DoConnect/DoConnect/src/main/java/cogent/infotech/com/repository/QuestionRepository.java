package cogent.infotech.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cogent.infotech.com.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {

}
