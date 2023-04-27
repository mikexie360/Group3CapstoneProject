import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DoConnect-angular';
  userType:string|null = localStorage.getItem("user.userType");
  username:string|null = localStorage.getItem("user.username");
  logstatus:string|null =localStorage.getItem("logstatus");
  
  ngOnInit(): void {
    localStorage.setItem("logstatus", "false");
    this.logstatus = localStorage.getItem("logstatus");
  }

  logout(){
    localStorage.setItem("logstatus", "false");
    this.logstatus = localStorage.getItem("logstatus");

  }
}
