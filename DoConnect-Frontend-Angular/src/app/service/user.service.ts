import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AnswerPostType, BASE_URL, QuestionPostType, User, UserLoginType, UserRegisterType, UserType } from '../constants/constants';
import { getCurrentUsername, handleErrorResponse, isUserAdmin, isUserLoggedIn } from '../utils/util';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  constructor(private http: HttpClient) {}

  getUserObjectByUsername(){
    return this.http.get(`${BASE_URL}/getuserbyusername/${getCurrentUsername()}`);
  }

  register(user: UserRegisterType) {
    return this.http.post(`${BASE_URL}/addnewuser`, user, { responseType: 'text' });
  }

  login(user: UserLoginType) {
    return this.http.post(`${BASE_URL}/authenticate`, user,{responseType: 'text'});
  }

  getQuestion(id: number) {
    return this.http.get(BASE_URL + '/getallquestionsbyid/' + id);
  }

  getApprovedQuestions() {
    return this.http.get(BASE_URL + '/question/getallquestionstrue');
  }

  postQuestion(question: QuestionPostType) {
    return this.http.post(BASE_URL + '/addquestion', question);
  }

  postAnswer(questionId: number, answer: AnswerPostType) {
    return this.http.post(BASE_URL + '/questions/' + questionId + '/answers', answer);
  }

  searchQuestion(query: string, topic: string) {
    return this.http.get(`${BASE_URL}/questions?search=${query}&topic=${topic}`);
  }

  getAnswers(quesId: number) {
    return this.http.get(BASE_URL + '/questions/' + quesId + '/answers');
  }

  logout() {
    return this.http.get(BASE_URL + '/signout', { responseType: 'text' });
  }
}
