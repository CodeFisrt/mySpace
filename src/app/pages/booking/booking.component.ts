import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent  implements OnInit {

  timeArray: any [] = [];
  roomsArray: any [] =[];
  bookingObj = {
    "BookingId": 0,
    "RoomId": 0,
    "UserId": 0,
    "BookingDate": "2023-04-10T18:02:03.325Z",
    "FromTime": "",
    "ToTime": "",
    "CreatedDate": "2023-04-10T18:02:03.325Z",
    "LastUpdated": "2023-04-10T18:02:03.325Z"
  }
  userDetails: any;
  bookingArray: any[]= [];
  constructor(private http: HttpClient) {
    const localData =  localStorage.getItem("loogedUserData");
    if(localData != null) {
      this.userDetails =  JSON.parse(localData); 
      this.getRoomsList();
      this.bookingObj.UserId =  this.userDetails.userId;
    }
  }
  ngOnInit(): void {
    this.getTimeList();
    this.getAllBooking();
  }


  getTimeList() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetTimeList").subscribe((res: any)=>{
      this.timeArray = res.data;
    })
  }
  getRoomsList() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllRoomsByClientId?id="+ this.userDetails.clientId).subscribe((res: any)=>{
      this.roomsArray = res.data;
    })
  }
  getAllBooking() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllBookingsByClientId?clientId=167").subscribe((res: any)=>{
      this.bookingArray = res.data;
    })
  }

  checkIfRoomBooked(roomId: number, timeid: number) {
    const bookingData = this.bookingArray.find(m=>m.roomId ==roomId && (m.fromTime == timeid || m.toTime == timeid));
    if(bookingData) {
      return true;
    } else {
      return false;
    }
  }

  saveBooking() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/CreateBooking",this.bookingObj).subscribe((res: any)=>{
      if(res.result) {
        alert("Booking Done");
        this.getAllBooking();
      } else {
        alert(res.mesage)
      }
    })
  }
  openBooking() {
     const model = document.getElementById("myModal");
     if(model != null) {
      model.style.display = "block";
     }
  }

  closeBooking() {
    const model = document.getElementById("myModal");
    if(model != null) {
     model.style.display = "none";
    }
 }
}
