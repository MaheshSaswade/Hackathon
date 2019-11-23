import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import { DeleteEmpComponent } from '../components/hr-dashboard/manage-emp/delete-emp/delete-emp.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   
 
  private url = "http://localhost:3000/employee";


  

  constructor(private http: HttpClient, private auth: AuthService) { }
 readonly baseUrl = 'http//localhost:3000/employee';

  public  getemployees()  {
    return this.http.get(this.url)
  }

  


  deleteEmployee(delEmp) {
    return this.http.delete(this.baseUrl + '/emp/:email', delEmp);
  }
}
  


  
  

