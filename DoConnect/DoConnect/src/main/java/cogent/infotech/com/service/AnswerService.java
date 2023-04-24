package cogent.infotech.com.service;

import java.util.List;
import java.util.Optional;

import cogent.infotech.com.entity.*;

public interface AnswerService {
	
	public List<Answer> getAllAnswers();
	public List<Answer> getAllAnswersFalse();
	public List<Answer> getAllAnswersById(int id);
	public void addAnswer(Answer answer);
	public void updateAnswer(Answer answer);
	public void deleteAnswerById(int id);
	public List<Answer> getAllAnswersByQuestionId(int questionid);

}