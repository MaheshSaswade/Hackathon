import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
// import { registerLocaleData } from '@angular/common';
// import { from } from 'rxjs';
import { DatePipe } from '@angular/common';

//declare var M: any;
@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {
constructor(private empService: EmployeeService, public datepipe: DatePipe ) { }

  ngOnInit() { }

resetForm(form: NgForm) {
  if ( form ) {
    form.reset();
  }
}

  onsubmit1(regform: NgForm) {
    console.log('function call');

    const empDOB = this.datepipe.transform(regform.value.empDOB , 'dd/mm/yyyy');
    const empDOJ = this.datepipe.transform(regform.value.empDOJ , 'dd/mm/yyyy');
    regform.value.empDOB = empDOB;
    regform.value.empDOJ = empDOJ ;
    console.log(JSON.stringify(regform.value));
      
    this.empService.postEmployee(regform.value).subscribe((res => {
      const data = JSON.stringify(res);
      console.log(data);
      this.resetForm(regform);
    // M.toast({ html: 'Saved Successfully ', classes: 'rounded'});
    }));
  }
}



