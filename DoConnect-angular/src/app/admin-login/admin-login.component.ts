import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  login(loginForm:NgForm){
    //let raw= JSON.parse('{"userName" : ' +"'"+ username + "'"+","+ '"password"' +":" +"'" + password +"'"+'}');
    alert(loginForm.value);
    alert(loginForm.value.password);
    this.userService.loginUser(loginForm.value).subscribe({
      next: (response: any) => {
        // this.userAuthService.setRoles(response.user.userType);
        // this.userAuthService.setToken(response.jwtToken);
        //alert("inside response");
        console.log(response);
        this.userAuthService.setToken(response);
        // const role = response.user.userType;
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
