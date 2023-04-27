package cogent.infotech.com.service;

import java.util.List;
import java.util.*;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cogent.infotech.com.entity.*;
import cogent.infotech.com.repository.QuestionRepository;

@Service
public class QuestionServiceImpl implements QuestionService{

	@Autowired
	private QuestionRepository questionRepository;

	@Override
	public List<Question> getAllQuestionsFalse() {
		return (List)questionRepository.findByStatus("false");
	}

	@Override
	public List<Question> getAllQuestions() {
		return (List)questionRepository.findAll();
	}
	
	@Override
	public void addQuestion(Question question) {
		questionRepository.save(question);
	}
	
	@Override
	public void updateQuestionStatus(int id, String newStatus) {
		questionRepository.updateQuestionStatus(id , newStatus);
	}
	
	@Override
	public void deleteQuestionById(int id) {
		questionRepository.deleteById(id);
	}
	
	@Override
	public List<Question> getAllQuestionsById(int id) {
		return (List)questionRepository.findById(id);
	}
	
	@Override
	public List<Question> getAllQuestionsByTopic(String topic) {
		return (List)questionRepository.findByTopic(topic);
	}

}