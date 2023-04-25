import { Component, OnInit } from '@angular/core';
import { User} from '../entity/user';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit{
  constructor(private userService:UserService){
  }
  ngOnInit(): void {
  }
  user:User = new User(
    0,
    "",
    "",
    "",
    "",
    "user"
  );
  onUserSignUp(event:any, username:any, password:any, email:any, name:any){
    this.user.name= name;
    this.user.username = username;
    this.user.email = email;
    this.user.password = password;
    this.userService.signupUser(this.user).subscribe((data:User)=>{
      console.log(data);
  });
  };
}
