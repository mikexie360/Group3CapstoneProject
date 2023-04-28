import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnswerType, BASE_URL, QuestionType } from '../constants/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AdminService {

  constructor(private http: HttpClient) {}

  getUnapprovedQuestions():Observable<QuestionType[]> {
    return this.http.get<QuestionType[]>(BASE_URL + '/question/getallquestionsfalse');
  }

  getUnapprovedAnswers():Observable<AnswerType[]> {
    return this.http.get<AnswerType[]>(BASE_URL + '/getallanswerfalse');
  }

  getUsers() {
    return this.http.get(BASE_URL + '/user/getallusers');
  }

  deleteUser(id: number) {
    return this.http.delete(BASE_URL + '/user/deletebyid/' + id, { responseType: 'text' });
  }

  approveQuestion(id: number) {
    return this.http.put(BASE_URL + `/updatequestion/${id}/true`, { isApproved: true });
  }

  approveAnswer(id:number) {
    return this.http.put(BASE_URL + `/updateanswer/${id}/true`, { isApproved: true });
  }

  deleteQuestion(id: number) {
    return this.http.delete(BASE_URL + `/question/deletebyid/${id}`, { responseType: 'text' });
  }

  deleteAnswer(id: number) {
    return this.http.delete(BASE_URL + `/deleteanswerbyid/${id}`);
  }

}
