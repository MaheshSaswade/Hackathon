import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private Auth: AuthService
  
  constructor() { }

  ngOnInit() {
  }

  login(event){
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(email, password)
    console.log(email,password)
    
  }
}
