import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
declare var M: any;

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  ngOnInit() { }

  onEdit(regform: NgForm) {
    this.empService.putEmployee(regform.value).subscribe((res => {
    M.toast({ html: 'Updated Successfully ', classes: 'rounded'});
    }));
  }
}