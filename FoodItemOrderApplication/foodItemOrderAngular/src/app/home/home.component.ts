import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hideFoodItem=false;
  hideChangePasssword=true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
logout(){
  this.router.navigate(['/login']);
}
foodItemClick(){
this.hideFoodItem=false;
this.hideChangePasssword=true;
}
changePassswordClick(){
  this.hideFoodItem=true;
  this.hideChangePasssword=false;
  }
}
