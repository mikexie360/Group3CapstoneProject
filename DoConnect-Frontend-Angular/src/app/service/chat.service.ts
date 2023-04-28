import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, FromUserToUser } from '../constants/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ChatService {

  baseUrl = BASE_URL;

  constructor(private http: HttpClient) {}

  createChat(data: any) {
    return this.http.post(this.baseUrl + '/messages', data);
  }

  addChat(data: any) {
    return this.http.post(this.baseUrl + '/chat/addchat', data);
  }


  getChatMessagesList(fromuser:string, touser:string) {
    return this.http.get(this.baseUrl + `/chat/getallchatbetweentwousers/${fromuser}/${touser}`);
  }
}

