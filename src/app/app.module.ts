import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackgesComponent } from './pages/packges/packges.component';
import { ClientComponent } from './pages/client/client.component';
import { UsersComponent } from './pages/users/users.component';
import { PackageActivationComponent } from './pages/package-activation/package-activation.component';
import {HttpClientModule}  from"@angular/common/http"
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { ClientLayoutComponent } from './pages/client-layout/client-layout.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ClientAdminDashboardComponent } from './pages/client-admin-dashboard/client-admin-dashboard.component';
import { ClientUserDashboardComponent } from './pages/client-user-dashboard/client-user-dashboard.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { BookingComponent } from './pages/booking/booking.component';
@NgModule({
  declarations: [
    AppComponent,
    PackgesComponent,
    ClientComponent,
    UsersComponent,
    PackageActivationComponent,
    LoginComponent,
    HomeComponent,
    UserLayoutComponent,
    ClientLayoutComponent,
    AdminDashboardComponent,
    ClientAdminDashboardComponent,
    ClientUserDashboardComponent,
    RoomsComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
