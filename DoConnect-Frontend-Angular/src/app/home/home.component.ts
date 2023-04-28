import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QUESTIONS_TOPICS, QuestionType } from '../constants/constants';
import { UserService } from '../service/user.service';
import { AdminService } from '../service/admin.service';
import { handleErrorResponse, isUserAdmin, getUserType, isUserLoggedIn } from '../utils/util';
import { User } from '../constants/constants';

const OPEN_CHAT_BUTTON_LABEL = 'Chat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  
  userList: User[] = [];
  mode:string="";
  questionList: QuestionType[] = [];
  search: string = '';
  topic: string = 'All';
  topicOptions: string[] = [ 'All', ...QUESTIONS_TOPICS ];
  chatbox = 'block';
  userType = getUserType();
  isAdmin: boolean = isUserAdmin();
  isUserLoggedIn: boolean = isUserLoggedIn();
  chatButton: string = OPEN_CHAT_BUTTON_LABEL;

  constructor(private _userService: UserService,
    private router: Router, private _adminService: AdminService) {}

  ngOnInit(): void {
    this.mode="questions";
    if(isUserLoggedIn()){
      this._userService.getApprovedQuestions().subscribe({
        next: (result) => (this.questionList = result as QuestionType[]),
        error: (error: HttpErrorResponse) => handleErrorResponse(error, this.router),
      });
    }
  }
  
  getApprovedQuestions() {
    this.mode = 'questions';
    this._userService.getApprovedQuestions().subscribe({
      next: (result) => (this.questionList = result as QuestionType[]),
      error: (err) => handleErrorResponse(err, this.router),
    });
  }

  getUsers() {
    this.mode = 'users';
    this._adminService.getUsers().subscribe({
      next: (result) => (this.userList = result as User[]),
      error: (err) => handleErrorResponse(err, this.router),
    });
  }

  getUsersChat() {
    this.mode = 'chats';
    this._adminService.getUsers().subscribe({
      next: (result) => (this.userList = result as User[]),
      error: (err) => handleErrorResponse(err, this.router),
    });
  }


  toggleChatBox() {
    this.chatbox = this.chatbox === 'block' ? 'none' : 'block';
  }

  openQuestion(id: number) {
    this.router.navigate([`/question/${id}`]);
  }
  onChat(touser: string) {
    // if (confirm('Are you sure you want to remove this user? This action cannot be reverted.')) {
    //   this._adminService.deleteUser(id).subscribe({
    //     next: (res) => {
    //       this.getUsers()
    //     },
    //     error: (err) => handleErrorResponse(err, this.router),
    //   });
    // }
    localStorage.setItem("touser", touser);
  }
  // searchHelper(query: string, topic: string) {
  //   this._userService.searchQuestion(query, (topic === 'All') ? '' : topic).subscribe({
  //     next: (result) => (this.questionList = result as QuestionType[]),
  //     error: (error: HttpErrorResponse) => handleErrorResponse(error, this.router),
  //   });
  // }

  // onSearch() {
  //   this.searchHelper(this.search, (this.topic === 'All') ? '' : this.topic);
  // }

  // onTopicSelected(value: string) {
  //   this.topic = value;
  //   this.search = '';
  //   this.searchHelper(this.search, (this.topic === 'All') ? '' : this.topic);
  // }
}
