import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { CreateEmpComponent } from '../components/hr-dashboard/manage-emp/create-emp/create-emp.component';
// import { DeleteEmpComponent } from '../components/hr-dashboard/manage-emp/delete-emp/delete-emp.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   
 
  private url = "http://localhost:3000/employee";


  selectedEmployee: CreateEmpComponent;
  employees: CreateEmpComponent[];
  

  constructor(private http: HttpClient, private auth: AuthService) { }
 readonly baseUrl = 'http//localhost:3000/employee';

  public  getemployees()  {
    return this.http.get(this.url)
  }

  postEmployee(emp: CreateEmpComponent) {
  
    return this.http.post(this.baseUrl + 'employee', emp);
  }


  deleteEmployee(delEmp) {
    return this.http.delete(this.baseUrl + '/emp/:email', delEmp);
  }
}
  


  
  

