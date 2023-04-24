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

import cogent.infotech.com.service.CustomerServiceImpl;
import cogent.infotech.com.entity.*;

@RestController
public class CustomerController {
	
	@Autowired
	private CustomerServiceImpl customerService;
	
//	@GetMapping("/")
//	public void home() {
//		customerService.home();
//	}
	
	@PostMapping("/user/adduser")
	public void addUser(@Validated @RequestBody User user) {
		customerService.addUser(user);
	}
	
	@PostMapping("/user/updateuser")
	public void updateUser(@Validated @RequestBody User user) {
		customerService.updateUser(user);
	}
	
//	@GetMapping("/user/getlogin")
//	public List<String> getByLogin(@Validated @RequestBody User user) {
//		return customerService.getLogin(user);
//	}
//	
//	@GetMapping("/user/getbyusername")
//	public List<User> getByUsername(@Validated @RequestBody String name) {
//		return customerService.getAllUsersByName(name);
//	}
//	
//	@GetMapping("/user/getallusers")
//	public List<User> getAllCustomer() {
//		return customerService.getAllUsers();
//	}
//	
//	@GetMapping("/user/getallusersbytype")
//	public List<User> getAllCustomer(@Validated @RequestBody String userType) {
//		return customerService.getAllUsersByUserType(userType);
//	}
//	
	@DeleteMapping("/user/deletebyid")
	public void deleteUserById(@Validated @RequestBody int id) {
		customerService.deleteById(id);
	}
	
	@PostMapping("/question/addquestion")
	public void addQuestion(@Validated @RequestBody Question question) {
		customerService.addQuestion(question);
	}
	
	@PostMapping("/question/updatequestion")
	public void updateQuestion(@Validated @RequestBody Question question) {
		customerService.updateQuestion(question);
	}
	
	@GetMapping("/question/getallquestionsfalse")
	public List<Question> getAllQuestionsFalse() {
		return customerService.getAllQuestionsFalse();
	}
	
	@GetMapping("/question/getallquestions")
	public List<Question> getAllQuestions() {
		return customerService.getAllQuestions();
	}
	
	@GetMapping("/question/getallquestionsbytopic")
	public List<Question> getAllQuestionsByTopic(@Validated @RequestBody String questionTopic) {
		return customerService.getAllQuestionsByTopic(questionTopic);
	}
	
	@DeleteMapping("/question/deletebyid")
	public void deleteQuestionById(@Validated @RequestBody int id) {
		customerService.deleteQuestionById(id);
	}
	
	@PostMapping("/answer/addanswer")
	public void addAnswer(@Validated @RequestBody Answer answer) {
		customerService.addAnswer(answer);
	}
	
	@PostMapping("/answer/updatequestion")
	public void updateAnswer(@Validated @RequestBody Answer answer) {
		customerService.updateAnswer(answer);
	}
	
	@GetMapping("/answer/getanswerbyid")
	public List<Answer> getAllAnswersById(@Validated @RequestBody int id) {
		return customerService.getAllAnswersById(id);
	}
	
	@GetMapping("/answer/getallanswersbyquestionid")
	public List<Answer> getAllAnswersByQuestionId(@Validated @RequestBody int id) {
		return customerService.getAllAnswersByQuestionId(id);
	}
	
	@DeleteMapping("/answer/deletebyid")
	public void deleteAnswerById(@Validated @RequestBody int id) {
		customerService.deleteAnswerById(id);
	}
	
	@PostMapping("/chat/addchat")
	public void addChat(@Validated @RequestBody Chat chat) {
		customerService.addChat(chat);
	}
	
	@GetMapping("/chat/getallchats")
	public void getAllChats() {
		customerService.getAllChat();
	}
	
	@DeleteMapping("/chat/deletebyid")
	public void deleteChatById(@Validated @RequestBody int id) {
		customerService.deleteChatById(id);
	}

}