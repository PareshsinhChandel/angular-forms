import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;
  constructor(private fb:FormBuilder){

  }

  ngOnInit(){
   this.loginForm=this.fb.group({
    email:[],
    password:[]
   })
  }

  login(){
    console.log(this.loginForm.value);
    
  }
}
