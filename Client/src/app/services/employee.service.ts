import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { CreateEmpComponent } from '../components/hr-dashboard/manage-emp/create-emp/create-emp.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: CreateEmpComponent;
  employees: CreateEmpComponent[];
 readonly baseUrl = 'http//localhost:3000/employee';

  constructor(private http: HttpClient) { }

  postEmployee(emp: CreateEmpComponent) {
    return this.http.post(this.baseUrl + 'employee', emp);
  }

  putEmployee(emp: CreateEmpComponent) {
    return this.http.put(this.baseUrl + '/emp/:id', emp );
  }

}
