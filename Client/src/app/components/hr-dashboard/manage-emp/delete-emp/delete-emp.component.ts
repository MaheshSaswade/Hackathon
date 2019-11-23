import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';

//declare var M: any;
@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
  }

  onDelete(delform: NgForm) {
    console.log('function call');
    console.log(JSON.stringify(delform.value.empID));
    console.log(JSON.stringify(delform.value.empName));

    this.empService.deleteEmployee(delform.value).subscribe((res => {
      //M.toast({ html: 'Deleted Successfully ', classes: 'rounded' });
      console.log('Deleted');
    }));
   
  }
}
