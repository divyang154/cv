import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ChangePasswordService} from '../services/changePassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassword: FormGroup;
  title="change password";
  password="";
  retypePassword="";
  error="";
  message="";
  constructor( private formBuilder: FormBuilder,private changePasswordService: ChangePasswordService,private router: Router) { }

  ngOnInit(): void {
    this.changePassword=this.formBuilder.group({
      password: ['', Validators.required],
      retypePassword: ['', Validators.required]
    });
  }

  onSubmit(){
    this.password=this.changePassword.controls.password.value;
    this.retypePassword=this.changePassword.controls.retypePassword.value;
    console.log("password:-" + this.changePassword.controls.password.value);
    console.log("retypePassword:-" + this.changePassword.controls.retypePassword.value);
    if(this.password==this.retypePassword){
      this.changePasswordService.changePassword(this.password).subscribe( data => {
        console.log(data);
        if(data==true){
          this.router.navigate(['/login']); 
        }
        else
        {
          this.error="Please enter proper username and password";
          this.router.navigate(['/login']); 
          // localStorage.setItem('currentUser', 'false'); 
        }
        
      },
      error => console.log(error));
    }
    else{
    this.error="New Password should be same in both the cases";
    }
  }
}
