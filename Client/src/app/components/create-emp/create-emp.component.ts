import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {
constructor() { }

  ngOnInit() {
  }

  onsubmit1(regform: NgForm) {
 console.log('hello');
 const empId = regform.value.empId;
 console.log(empId);
}
}
