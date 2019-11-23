import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
// import { registerLocaleData } from '@angular/common';
// import { from } from 'rxjs';


declare var M: any;
@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {
constructor(private empService: EmployeeService) { }

  ngOnInit() { }

}



