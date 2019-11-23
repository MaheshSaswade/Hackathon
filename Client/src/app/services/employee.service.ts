import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { CreateEmpComponent } from '../components/emp-dashboard/create-emp/create-emp.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:3000/employee";
  selectedEmployee: CreateEmpComponent;
  employees: CreateEmpComponent[];
 readonly baseUrl = 'http//localhost:3000/employee';
  
  constructor(private http: HttpClient) { }

  public  getemployees()  {
    return this.http.get(this.url)
  }
  postEmployee(emp: CreateEmpComponent) {
    return this.http.post(this.baseUrl + 'employee', emp);
  }


}
