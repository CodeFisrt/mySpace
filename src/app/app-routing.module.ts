import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackgesComponent } from './pages/packges/packges.component';
import { ClientComponent } from './pages/client/client.component';
import { PackageActivationComponent } from './pages/package-activation/package-activation.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
