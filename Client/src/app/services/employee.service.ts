import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { CreateEmpComponent } from '../components/hr-dashboard/manage-emp/create-emp/create-emp.component';
import { UpdateEmpComponent } from '../components/hr-dashboard/manage-emp/update-emp/update-emp.component';
// import { DeleteEmpComponent } from '../components/hr-dashboard/manage-emp/delete-emp/delete-emp.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  selectedEmployee: CreateEmpComponent;
  employees: CreateEmpComponent[];
  

 readonly baseUrl = 'http://localhost:3000/employee';

  postEmployee(emp: CreateEmpComponent) {
    return this.http.post(this.baseUrl, emp);
  }

  putEmployee(upEmp: UpdateEmpComponent) {
    return this.http.put(this.baseUrl + '/emp/:id', upEmp );
  }

  deleteEmployee(delEmp) {
    return this.http.delete(this.baseUrl + '/emp/:email', delEmp);
  }
}
