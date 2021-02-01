import { Component, OnInit } from '@angular/core';
import {ChangePasswordService} from '../services/changePassword.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private changePassowrdService:ChangePasswordService,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {this.registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});
  }

  onSubmit(){
    var username=this.registerForm.controls.username.value;
    var password=this.registerForm.controls.password.value;
    this.changePassowrdService.addUser(username,password).subscribe( data => {
    console.log(data);
    this.router.navigate(['/login']);
  },
  error => console.log(error));

  }

}
