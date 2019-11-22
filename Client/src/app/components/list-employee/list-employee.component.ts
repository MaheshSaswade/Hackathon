import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl:'./list-employee.component.html' ,
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees=[];

  constructor(private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.employeeservice.getemployees().subscribe((data: any[]) =>{
      console.log(data);
      this.employees=data;
  })
    } 

}
