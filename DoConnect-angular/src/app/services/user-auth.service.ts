import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles') as any);
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken') as any;
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  public setUser(user:User) {
    // localStorage.setItem('user.id', user.id.toString());
    localStorage.setItem('user.email', user.email);
    localStorage.setItem('user.name',user.name);
    // localStorage.setItem('user.password', user.password);
    localStorage.setItem('user.userType', user.userType);
    localStorage.setItem('user.username', user.username);
  }

//   public getUserId(): string {
    // return localStorage.getItem('user.id') as string;
//   }
  public getUserEmail(): string {
    return localStorage.getItem('user.email') as string;
  }
  public getUserName(): string {
    return localStorage.getItem('user.name') as string;
  }
//   public getUserPassword(): string {
//     return localStorage.getItem('user.password') as string;
//   }
  public getUserUserType(): string {
    return localStorage.getItem('user.userType') as string;
  }
  public getUserUsername(): string {
    return localStorage.getItem('user.username') as string;
  }



}
