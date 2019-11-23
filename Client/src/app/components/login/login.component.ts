import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: '  ',
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
    this.Auth.getUserDetails(email, password).subscribe((response) => {
      let data = JSON.stringify(response)
      let data1 = JSON.parse(data)
      if (data1.emp.empDesignation === "Hr") {
        alert("Welcome")
        this.router.navigate(['/hr-dash'])
      } else {
        alert("Welcome")
        this.router.navigate(['/emp-dash'])
      }
    })
    console.log(email, password)

    // this.Auth.getUserDetails(email, password).subscribe(Error, (response) => {
    //   alert("Hello")
    //   let data = JSON.stringify(response)
    //   let data1 = JSON.parse(data)
    //   alert("Welcome")
    //   if (data1.emp.empDesignation === "Hr") {
    //     this.router.navigate(['/hr-dash'])
    //   } else if(data1.emp.empDesignation === "employee"){
    //     this.router.navigate(['/emp-dash'])
    //   } else{
    //     alert(response.error.message)
    //     return
    //   }
    // })
    // console.log(email, password)
    }
}
