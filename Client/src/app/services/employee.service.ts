import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from} from 'rxjs';
import { AuthService } from './auth.service'
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import { DeleteEmpComponent } from '../components/hr-dashboard/manage-emp/delete-emp/delete-emp.component';
import { CreateEmpComponent } from '../components/hr-dashboard/manage-emp/create-emp/create-emp.component'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   
 
  constructor(private http: HttpClient) {} 
  private url = "http://localhost:3000/employee";


  selectedEmployee: CreateEmpComponent;
  employees: CreateEmpComponent[];


//  readonly baseUrl = 'http://localhost:3000/employee';

  public  getemployees()  {
    return this.http.get(this.url)
  }

  // postEmployee(emp: CreateEmpComponent) {
  //   return this.http.post(this.baseUrl, emp);
  // }

  

  postEmployee(emp) {
    //const body = {emp}
    const url = 'http://localhost:3000/employee';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(url, emp, httpOptions);
    //return this.http.post(this.baseUrl + 'employee',  body, httpOptions);
  }

  putEmployee(upEmp) {
    const url = 'http://localhost:3000/emp/:id';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put(url, upEmp, httpOptions );
  }

  deleteEmployee(delEmp) {
    const url = 'http://localhost:3000/emp';

    return this.http.delete(url + '/' + delEmp);
  }

  getEmployee(delEmp) {
    const url = 'http://localhost:3000/employee/user';
    const body = {email: delEmp} 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }) }
    console.log(delEmp);
    return this.http.post(url,body,httpOptions);
  }

}
  


  
  

