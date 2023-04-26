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

import cogent.infotech.com.service.CustomerServiceImpl;
import cogent.infotech.com.entity.*;

@RestController
public class CustomerController {
	
	@Autowired
	private CustomerServiceImpl customerService;
	
	@PostMapping("/user/adduser")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void addUser(@Validated @RequestBody User user) {
		customerService.addUser(user);
	}
	
	@PostMapping("/user/updateuser")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void updateUser(@Validated @RequestBody User user) {
		customerService.updateUser(user);
	}
	
/*	@GetMapping("/user/getlogin")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<String> getByLogin(@Validated @RequestBody User user) {
		return customerService.getLogin(user);
	}*/
	
	@GetMapping("/user/getbyusername")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<User> getByUsername(@Validated @RequestBody String name) {
		return customerService.getAllUsersByName(name);
	}
	
	@GetMapping("/user/getallusers")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<User> getAllCustomer() {
		return customerService.getAllUsers();
	}
	
	@GetMapping("/user/getallusersbytype")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<User> getAllCustomer(@Validated @RequestBody String userType) {
		return customerService.getAllUsersByUserType(userType);
	}
	
	@DeleteMapping("/user/deletebyid")
	@PreAuthorize("hasRole('admin')")
	public void deleteUserById(@Validated @RequestBody int id) {
		customerService.deleteById(id);
	}
	
	@PostMapping("/question/addquestion")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void addQuestion(@Validated @RequestBody Question question) {
		customerService.addQuestion(question);
	}
	
	@PostMapping("/question/updatequestion")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void updateQuestion(@Validated @RequestBody Question question) {
		customerService.updateQuestion(question);
	}
	
	@GetMapping("/question/getallquestionsfalse")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<Question> getAllQuestionsFalse() {
		return customerService.getAllQuestionsFalse();
	}
	
	@GetMapping("/question/getallquestions")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<Question> getAllQuestions() {
		return customerService.getAllQuestions();
	}
	
	@GetMapping("/question/getallquestionsbytopic")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<Question> getAllQuestionsByTopic(@Validated @RequestBody String questionTopic) {
		return customerService.getAllQuestionsByTopic(questionTopic);
	}
	
	@DeleteMapping("/question/deletebyid")
	@PreAuthorize("hasRole('admin')")
	public void deleteQuestionById(@Validated @RequestBody int id) {
		customerService.deleteQuestionById(id);
	}
	
	@PostMapping("/answer/addanswer")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void addAnswer(@Validated @RequestBody Answer answer) {
		customerService.addAnswer(answer);
	}
	
	@PostMapping("/answer/updatequestion")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void updateAnswer(@Validated @RequestBody Answer answer) {
		customerService.updateAnswer(answer);
	}
	
	@GetMapping("/answer/getanswerbyid")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<Answer> getAllAnswersById(@Validated @RequestBody int id) {
		return customerService.getAllAnswersById(id);
	}
	
	@GetMapping("/answer/getallanswersbyquestionid")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public List<Answer> getAllAnswersByQuestionId(@Validated @RequestBody int id) {
		return customerService.getAllAnswersByQuestionId(id);
	}
	
	@DeleteMapping("/answer/deletebyid")
	@PreAuthorize("hasRole('admin')")
	public void deleteAnswerById(@Validated @RequestBody int id) {
		customerService.deleteAnswerById(id);
	}
	
	@PostMapping("/chat/addchat")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void addChat(@Validated @RequestBody Chat chat) {
		customerService.addChat(chat);
	}
	
	@GetMapping("/chat/getallchats")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void getAllChats() {
		customerService.getAllChat();
	}
	
	@GetMapping("/chat/getallchatsbyname")
	@PreAuthorize("hasRole('user') || hasRole('admin')")
	public void getAllChatsByName(@Validated @RequestBody String name) {
		customerService.getAllChatByName(name);
	}
	
	@DeleteMapping("/chat/deletebyid")
	@PreAuthorize("hasRole('admin')")
	public void deleteChatById(@Validated @RequestBody int id) {
		customerService.deleteChatById(id);
	}

}