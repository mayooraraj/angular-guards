import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  username= new FormControl('',[Validators.required]);
  email= new FormControl('',[Validators.required]);
  pwd= new FormControl('',[Validators.required]);

  constructor(private router:Router){}

  login(){
    console.log('login action');
    
    localStorage.setItem('token',Math.random().toString());
    this.router.navigate(['userdashboard'])
    
  }
}
 