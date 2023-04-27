import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  login(loginForm:NgForm, username:any, password:any){
    //alert(username);
    //alert(password);
    //let raw= JSON.parse('{"userName" : ' +"'"+ username + "'"+","+ '"password"' +":" +"'" + password +"'"+'}');
    //console.log(loginForm.value);
    this.userService.loginUser(loginForm.value).subscribe({
      next: (response: any) => {
        // this.userAuthService.setRoles(response.user.userType);
        // this.userAuthService.setToken(response.jwtToken);
        //alert("inside response");
        console.log(response);
        this.userAuthService.setToken(response);

        // decoding jwt
        let tokenInfo = this.userAuthService.getDecodedAccessToken(response);
        console.log(tokenInfo);

        // do another get request with the token to get the role
        // do a router.navigate to send the user to the correct area of the website.

        // saving to local storage
        this.userAuthService.setUser(tokenInfo.user);

        if (localStorage.getItem("user.userType") =="admin"){
          this.router.navigate(['admindashboard']);
        } else {
          this.router.navigate(['userdashbaord']);
        }



        // if (role === 'admin') {
        //   alert("role is admin")
        //   // this.router.navigate(['/admin']);
        // } else {
        //   alert("role is user")
        //   //this.router.navigate(['/user']);
        // }
      },
      error :(error: HttpErrorResponse) => {
        //alert("inside error");
        //alert(typeof error);
        //alert(error.error.text);
        this.userAuthService.setToken(error.error.text);
        console.log(error);
      }
  });
  }
}

