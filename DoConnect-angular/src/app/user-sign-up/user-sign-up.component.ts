import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

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
    ""
  );
  signup(signUpForm: NgForm){
    console.log("hi");
    console.log(signUpForm.value);

    this.userService.signupUser(signUpForm.value).subscribe((data:User)=>{
      console.log(data);
  });
  };
}
