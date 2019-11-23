import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  employee: Object;
  constructor( private auth: AuthService) { }

  ngOnInit() {

  alert(this.auth.emp)
    this.employee = this.auth.emp
  }

}
