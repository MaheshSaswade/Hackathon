import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    this.Auth.getUserDetails(email, password).subscribe( response => { 
    let data = JSON.stringify(response)
    alert(data)
    let data1 = JSON.parse(data)
    if(data1.emp.empDesignation === "Hr") {
      alert(data1.emp.empDesignation)
    } 
    
    })
    console.log(email,password)
  }
}
