import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //tokenParam:Object = TokenParamsComponent;

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(event) {
      event.preventDefault()
      const target = event.target
      const email = target.querySelector('#email').value
      const password = target.querySelector('#password').value

      this.Auth.login(email,password).subscribe(
        response => { 
          this.Auth.data = response
          console.log(this.Auth.data)
          let data = JSON.stringify(response)
          let data1 = JSON.parse(data)
          this.Auth.token=data1.token
          console.log(this.Auth.token)
          this.Auth.emp =data1.emp
              if (data1.emp.empDesignation === "Hr") {
                
                this.router.navigate(['/hr-dash'])
              } else {
                alert("Welcome")
                this.router.navigate(['/emp-dash'])
              }
        }
      )
  }



  // login(event) {
  //   event.preventDefault()
  //   const target = event.target
  //   const email = target.querySelector('#email').value
  //   const password = target.querySelector('#password').value
  //   this.Auth.getUserDetails(email, password).subscribe((response) => {
  //     let data = JSON.stringify(response)
  //     let data1 = JSON.parse(data)
  //     console.log(response)
  //     if (data1.emp.empDesignation === "Hr") {
        
  //       this.router.navigate(['/hr-dash'])
  //     } else {
  //       alert("Welcome")
  //       this.router.navigate(['/emp-dash'])
  //     }
      
  //   })
  //   console.log(email, password)



    
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
  //  }
}

