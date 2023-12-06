import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent {
  constructor(private router:Router){
    console.log('user dash board');
    
  }

  logout(){
    const confirmation = confirm("Do you want to logout");
    if(confirmation){
      localStorage.removeItem('token');
      this.router.navigate(['form']);
    }

  }

}
