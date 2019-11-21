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
    this.empService.postEmployee(regform.value).subscribe((res => {
      this.resetForm(regform);
      M.toast({ html: 'Saved Successfully ', classes: 'rounded'});
    }));
//  const empId = regform.value.empId;
//  console.log(empId);
}




}
