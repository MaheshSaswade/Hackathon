import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';

declare var M: any;
@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
  }

}
