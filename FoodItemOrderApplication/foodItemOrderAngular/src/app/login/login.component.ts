import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'foodItemOrder';
  loading = false;
  loginForm: FormGroup;
  error = "";
  username="";
  password="";
  constructor(  private formBuilder: FormBuilder,private authenticationService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  onSubmit() {
    this.username=this.loginForm.controls.username.value;
    this.password=this.loginForm.controls.password.value;
    console.log("username:-" + this.loginForm.controls.username.value);
    console.log("password:-" + this.loginForm.controls.password.value);
    this.authenticationService.login(this.username,this.password).subscribe( data => {
      console.log(data);
      if(data!=null){
      this.error="";
      if(data.userRole==='User'){
      this.router.navigate(['/userSearch']);
      }
      else{
      this.router.navigate(['/home']);
      }
      localStorage.setItem('currentUserId', data.userId);
      }
      else
      {
        this.error="Please enter proper username and password";
        this.router.navigate(['/login']); 
        // localStorage.setItem('currentUser', 'false'); 
      }
      
    },
    error => console.log(error));
        this.error="Please enter proper username mentioned username does not exists";
        this.router.navigate(['/login']);
        // localStorage.setItem('currentUser', 'false');   
  }
}
