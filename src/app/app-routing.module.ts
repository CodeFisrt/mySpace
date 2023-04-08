import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackgesComponent } from './pages/packges/packges.component';
import { ClientComponent } from './pages/client/client.component';
import { PackageActivationComponent } from './pages/package-activation/package-activation.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientAdminDashboardComponent } from './pages/client-admin-dashboard/client-admin-dashboard.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { ClientUserDashboardComponent } from './pages/client-user-dashboard/client-user-dashboard.component';
import { ClientLayoutComponent } from './pages/client-layout/client-layout.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: "",
    component: HomeComponent,//super admin role
    children: [
      {
        path: "package",
        component: PackgesComponent
      },
      {
        path: "Client",
        component: ClientComponent
      },
      {
        path: "package-activation",
        component: PackageActivationComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "admin-dashboard",
        component: AdminDashboardComponent
      }
    ]
  },
  {
    path: "",
    component: ClientLayoutComponent, //client admin
    children:[
      {
        path:'Client-dashboard',
        component:ClientAdminDashboardComponent
      },
      {
        path:'Rooms',
        component:RoomsComponent
      }
    ]
  }, 
  {
    path:'',
    component: UserLayoutComponent, //user role
    children: [
      {
        path:'user-dashboard',
        component:ClientUserDashboardComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
