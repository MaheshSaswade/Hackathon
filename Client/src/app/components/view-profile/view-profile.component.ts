import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from 'src/app/services/employee-profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  employee: any[];
  constructor(private employeeprofileeervice:EmployeeProfileService) { }

  ngOnInit() {
    this.employeeprofileeervice.getEmployeeProfile().subscribe((data: any[]) =>{
      console.log(data);
      this.employee=data;
    })
  } 

}
