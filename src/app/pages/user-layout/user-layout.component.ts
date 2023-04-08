import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent {

  userName: string = '';
constructor(private router: Router) {
  const name = localStorage.getItem("loggedinUserName");
  if(name != null) {
    this.userName = name
  }
}
    onLogout() {
      this.router.navigateByUrl("");
    }
  } 
