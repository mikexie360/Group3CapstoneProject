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

import cogent.infotech.com.service.AnswerService;
import cogent.infotech.com.entity.Answer;
import cogent.infotech.com.entity.User;

@RestController
public class AnswerController {
	
	@Autowired
	private AnswerService answerService;
	
	@PostMapping("/addanswer")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void addAnswer(@Validated @RequestBody Answer answer) {
		answerService.addAnswer(answer);
	}
	
	@PostMapping("/updateanswer")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void updateAnswer(@Validated @RequestBody Answer answer) {
		answerService.updateAnswer(answer);
	}
	
	@DeleteMapping("/deleteanswerbyid")
	@PreAuthorize("hasRole('admin')")
	public void deleteAnswerById(@Validated @RequestBody int id) {
		answerService.deleteAnswerById(id);
	}
	
	@GetMapping("/getallanswers")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<Answer> getAllAnswers() {
		return answerService.getAllAnswers();
	}
	
	@GetMapping("/getallanswerfalse")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<Answer> getAllAnswersFalse() {
		return answerService.getAllAnswersFalse();
	}
	
	@GetMapping("/getallanswerbyquestionid")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<Answer> getAllAnswersByQuestionId(@Validated @RequestBody int questionid) {
		return answerService.getAllAnswersByQuestionId(questionid);
	}
	
	@GetMapping("/getallanswerbyid")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<Answer> getAllAnswersById(@Validated @RequestBody int id) {
		return answerService.getAllAnswersById(id);
	}

}