import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodItemOrder';
  // loggedIn=false;

  // getLoggedInUser(){
  //   if(localStorage.getItem('currentUser')=='true')
  //   this.loggedIn=true; 
  //   else
  //   this.loggedIn=false; 
  // }
}
