package cogent.infotech.com.service;

import java.util.List;
import java.util.*;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cogent.infotech.com.entity.*;
import cogent.infotech.com.repository.AnswerRepository;

@Service
public class AnswerServiceImpl implements AnswerService{

	@Autowired
	private AnswerRepository answerRepository;

	@Override
	public List<Answer> getAllAnswersFalse() {
		return (List)answerRepository.findByStatus("false");
	}
	
	@Override
	public List<Answer> getAllAnswersTrue() {
		return (List)answerRepository.findByStatus("true");
	}
	
	@Override
	public void updateAnswerStatus(int id, String newStatus, int userid) {
		answerRepository.updateAnswerStatus(id , newStatus, userid);
	}

	@Override
	public List<Answer> getAllAnswers() {
		return (List)answerRepository.findAll();
	}
	
	@Override
	public List<Answer> getAllAnswersById(int id) {
		return (List)answerRepository.findById(id);
	}
	
	@Override
	public void addAnswer(Answer answer) {
		answerRepository.save(answer);
	}
	
	@Override
	public void updateAnswer(Answer answer) {
		answerRepository.save(answer);
	}
	
	@Override
	public void deleteAnswerById(int id) {
		answerRepository.deleteById(id);
	}
	
	@Override
	public List<Answer> getAllAnswersByQuestionId(int questionId) {
		return answerRepository.getAllByQuestionId(questionId);
	}

}