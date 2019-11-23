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

resetForm(form: NgForm) {
  if ( form ) {
    form.reset();
  }
}

  onsubmit1(regform: NgForm) {
    console.log('function call');
    console.log(JSON.stringify(regform.value));
    this.empService.postEmployee(regform.value).subscribe((res => {
      const data = JSON.stringify(res);
      console.log(data);
      this.resetForm(regform);
      M.toast({ html: 'Saved Successfully ', classes: 'rounded'});
    }));
  }
}
//  const empId = regform.value.empId;
//  console.log(empId);

// onsubmit1(event) {
//   console.log('function call');
//   event.preventDefault();
//   const target = event.target;
//   const empId = target.querySelector('empId').value;
//   const empName = target.querySelector('empName').value;
//   const gender = target.querySelector('gender').value;
//   const empDesignation = target.querySelector('empDesignation').value;
//   const email = target.querySelector('email').value;
//   const empDOB = target.querySelector('empDOB').value;
//   const empDOJ = target.querySelector('empDOJ').value;
//   const mobileNo = target.querySelector('mobileNo').value;
//   const managerID = target.querySelector('managerID').value;
//   const password = target.querySelector('password').value;
//   const empDepartment = target.querySelector('empDepartment').value;

//   this.empService.postEmployee(regform.value).subscribe((res => {
//     let data = JSON.stringify(res);
//     console.log(data);
//     this.resetForm(regform);
//     M.toast({ html: 'Saved Successfully ', classes: 'rounded'});
//   }));
// }}





