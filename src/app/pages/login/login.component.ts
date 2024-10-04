import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) {

  }
  loginObj: any = {
    "UserName": "",
    "UserPassword": ""
  }

  onLogin() {
    debugger;
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/login", this.loginObj).subscribe((res: any)=> {
      debugger;
      if(res.result) {
        localStorage.setItem('loogedUserData', JSON.stringify(res.data));
        localStorage.setItem("loggedinUserName",res.data.userName );
        if(res.data.role == "Admin") {
          this.router.navigateByUrl("admin-dashboard");
        } 
        else if (res.data.role == "ClientAdmin") {
          this.router.navigateByUrl("Client-dashboard");
        } 
        else if (res.data.role == "ClientUser"){
          this.router.navigateByUrl("user-dashboard");
        }
      } else {
        alert(res.message)
      }
    })
  }
}
