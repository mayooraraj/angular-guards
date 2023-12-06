import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { formDeactiveGuard } from './form-deactive.guard';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { authGuard } from './auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserComponent } from './user/user.component';
import { roleGuard } from './role.guard';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
   {path:'home',component:HomeComponent},
  {path:'form',component:FormComponent,canDeactivate:[formDeactiveGuard]},
  {path:'userdashboard',component:UserdashboardComponent,canActivate:[authGuard]},
  {path:'admin',component:AdmindashboardComponent,canActivate:[roleGuard]},
  {path:'user',component:UserComponent},
  {path:'**',redirectTo:'first'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
