import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent implements OnInit{

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
    "admin"
  );
  onAdminSignUp(event:any, username:any, password:any, email:any, name:any){
    this.user.name= name;
    this.user.username = username;
    this.user.email = email;
    this.user.password = password;
    this.userService.signupUser(this.user).subscribe((data:User)=>{
      console.log(data);
  });
  };
}
