import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  constructor(private router: Router, private Auth:AuthService) { }

  ngOnInit() {
  }

  // onLogout() {
  //   this.Auth.getLogout().subscribe(response => {
  //     alert("You are successfully logout")
  //     this.router.navigate(['/login'])
  //   })
  // }

}
