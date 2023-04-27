import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-dashboard-delete-users',
  templateUrl: './admin-dashboard-delete-users.component.html',
  styleUrls: ['./admin-dashboard-delete-users.component.css']
})
export class AdminDashboardDeleteUsersComponent implements OnInit {
  users:User[]=[];

  constructor(private userService:UserService){
    
  }
  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data:User[])=>{
      console.log(data);
      this.users=data;
    })

    
  }

}
