import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {

  constructor(private router: Router, private Auth:AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    alert("logout")
    this.Auth.getLogout().subscribe(response => {
      alert("You are successfully logout")
      this.router.navigate(['/login'])
    })
  }
}
