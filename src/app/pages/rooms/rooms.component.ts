import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  roomsArray: any[] = [];
  roomObj = {
    "RoomId": 0,
    "RoomName": "",
    "RoomLocation": "",
    "RoomSeatingCapacity": 0,
    "IsRoomActive": true,
    "ClientId": 0,
    "CreatedDate": "2023-04-08T16:32:13.090Z",
    "LastUpdatetd": "2023-04-08T16:32:13.090Z"
  };
  isLoader: boolean = false;

  constructor(private http: HttpClient) {
    debugger;
    const userData = localStorage.getItem("loogedUserData");
    if (userData != null) {
      const userParseData = JSON.parse(userData);
      this.roomObj.ClientId = userParseData.clientId;
      this.loadRoomsByClientId();
    }
  }

  loadRoomsByClientId() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllRoomsByClientId?id=" + this.roomObj.ClientId).subscribe((res: any) => {
      this.roomsArray = res.data;
    })
  }
  createNewRoom() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/CreateRoom", this.roomObj).subscribe((res: any) => {
      if(res.result) {
        this.loadRoomsByClientId();
        alert("Room Created Success")
      } else {
        alert(res.message)
      }
    })
  }
  updateRoom() {

  }
}
