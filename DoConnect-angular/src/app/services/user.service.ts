import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../entity/user";

@Injectable({
    providedIn:"root"
})

export class UserService{
    private baseUrl="http://localhost:8080/api/User";

    private postUrl="http://localhost:8080/api/User/post";
    private getUrl="http://localhost:8080/api/User/get";
    private putUrl="http://localhost:8080/api/User/put";
    private deleteUrl="http://localhost:8080/api/User/delete";

    private signupUserUrl = "http://localhost:8080/adduser";
    private updateUserUrl = "http://localhost:8080/updateuser";
    private getLoginUrl = "http://localhost:8080/getlogin";
    private userLoginVerifyUrl = "http://localhost:8080/userloginverify";
    private getallusersUrl = "http://localhost:8080/getallusers";
    private getallusersbyidUrl = "http://localhost:8080/getallusersbyid";
    private getallusersbyname = "http://localhost:8080/getallusersbyname";
    private getallusersbytype = "http://localhost:8080/getallusersbytype";


    constructor(private http:HttpClient){

    }

    getUsers():Observable<User[]>{
        return this.http.get<User[]>(`${this.getUrl}`);
    }

    postUser(user:any):Observable<User>{
        return this.http.post<User>(`${this.postUrl}`, user);
    }

    deleteUser(user:User):Observable<User>{
        return this.http.delete<User>(`${this.deleteUrl}` +"/" + user.id);
    }

    putUser(user:any):Observable<User>{
        return this.http.put<User>(`${this.putUrl}`,user);
    }

    signupUser(user:User):Observable<User>{
        return this.http.post<User>(`${this.signupUserUrl}`,user);
    }
}