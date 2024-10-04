import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any [] = [];
  clients: any [] = [];
  loogedUserData: any;
  userObj = {
    "UserId": 0,
    "ClientId": 0,
    "UserName": "",
    "UserPassword": "",
    "CreatedDate": "2023-04-09T15:43:50.725Z",
    "LastUpdated": "2023-04-09T15:43:50.725Z",
    "IsActive": true,
    "Role": ""
  };

  constructor(private http: HttpClient) {
    const localData =  localStorage.getItem("loogedUserData");
    if(localData != null) {
      this.loogedUserData =  JSON.parse(localData);
      if(this.loogedUserData.role == "Admin") {
        this.getAllusers();
        this.getAllClinets();
      } else {
        this.getAllUserByClinet();
        this.userObj.ClientId = this.loogedUserData.clientId;
      }
    }
  }
  ngOnInit(): void {
   
  }
  getAllClinets() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllClients").subscribe((res: any)=> {
      this.clients = res.data;
    })
  }

  getAllusers() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllusers").subscribe((res: any)=> {
      this.userList = res.data;
    })
  }

  getAllUserByClinet() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllUsersByClientId?id=" + this.loogedUserData.clientId).subscribe((res: any)=> {
      this.userList = res.data;
    })
  }
  onSaveUser() {
    debugger;
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/AddUsers", this.userObj).subscribe((res: any)=> {
      if(res.result) {
        if(this.loogedUserData.role == "Admin") {
          this.getAllusers();
          this.getAllClinets();
        } else {
          this.getAllUserByClinet();
          this.userObj.ClientId = this.loogedUserData.clientId;
        }
      } else {
        alert(res.message)
      }
    })
  }
}
