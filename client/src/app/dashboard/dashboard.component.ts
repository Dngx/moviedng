import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoggedIn = false
  constructor(){}
  ngOnInint():void{
    this.isLoggedIn = localStorage.getItem(isLogin) !== null ? true : false
    if(this.isLoggedIn){
      this.buttonText = 'Log Out'
    }  else {
      this.buttonText = 'Log In'
    }
  }

  login(){

  }
  

}
