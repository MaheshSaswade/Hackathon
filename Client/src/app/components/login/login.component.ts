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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
<<<<<<< HEAD
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
=======
=======
    const email = target.getElementByID('email')
    const password = target.getElementByID('password')
    console.log(email,password)
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
=======
    const email = target.getElementByID('email')
    const password = target.getElementByID('password')
    console.log(email,password)
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
=======
    const email = target.getElementByID('email')
    const password = target.getElementByID('password')
    console.log(email,password)
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
    this.Auth.getUserDetails(email, password).subscribe( response => { 
    let data = JSON.stringify(response)
    alert(data)
    let data1 = JSON.parse(data)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if(data1.emp.empDesignation === "Hr") {
      alert(data1.emp.empDesignation)
    } 
    
>>>>>>> parent of e18024d... display sequence
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
=======
    if(data1.emp.empDesignation === "Hr") { 
      alert(data1.emp.empDesignation)
    } 
    
    })
    console.log(email,password)
  }
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
=======
    if(data1.emp.empDesignation === "Hr") { 
      alert(data1.emp.empDesignation)
    } 
    
    })
    console.log(email,password)
  }
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
=======
    if(data1.emp.empDesignation === "Hr") { 
      alert(data1.emp.empDesignation)
    } 
    
    })
    console.log(email,password)
  }
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
}
