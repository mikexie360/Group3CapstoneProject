package cogent.infotech.com.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

import cogent.infotech.com.service.QuestionServiceImpl;
import cogent.infotech.com.entity.Question;
import cogent.infotech.com.entity.User;

@RestController
public class QuestionController {
	
	@Autowired
	private QuestionServiceImpl questionService;
	
	@PostMapping("/addquestion")
	public void addQuestion(@Validated @RequestBody Question question) {
		questionService.addQuestion(question);
	}
	
	@PostMapping("/updatequestion")
	public void updateQuestion(@Validated @RequestBody Question question) {
		questionService.updateQuestion(question);
	}
	
	@DeleteMapping("/deletequestionbyid")
	public void deleteQuestionById(@Validated @RequestBody int id) {
		questionService.deleteQuestionById(id);
	}
	
	@GetMapping("/getallquestions")
	public List<Question> getAllQuestions() {
		return questionService.getAllQuestions();
	}
	
	@GetMapping("/getallquestionsfalse")
	public List<Question> getAllQuestionsFalse() {
		return questionService.getAllQuestionsFalse();
	}
	
	@GetMapping("/getallquestionsbytopic")
	public List<Question> getAllQuestionsByTopic(@Validated @RequestBody String topic) {
		return questionService.getAllQuestionsByTopic(topic);
	}
	
	@GetMapping("/getallquestionsbyid")
	public List<Question> getAllQuestionsById(@Validated @RequestBody int id) {
		return questionService.getAllQuestionsById(id);
	}

}