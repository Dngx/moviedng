import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    if(localStorage.getItem('isLogin') === null){
     this.router.navigateByUrl('/movies')
    }
   }

  username =''
  password =''

  login(){
    if(this.username.length !== 0 && this.password.length !== 0){
      console.log('done!')
      this.router.navigateByUrl('/movies')
      localStorage.setItem('isLogin', 'true')
    }
  }

}
