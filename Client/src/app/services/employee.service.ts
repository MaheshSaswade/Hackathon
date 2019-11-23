import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Observable, from } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { CreateEmpComponent } from '../components/hr-dashboard/manage-emp/create-emp/create-emp.component';
import { UpdateEmpComponent } from '../components/hr-dashboard/manage-emp/update-emp/update-emp.component';
import { DeleteEmpComponent } from '../components/hr-dashboard/manage-emp/delete-emp/delete-emp.component';
=======
// import { Observable } from 'rxjs';
// import { EmployeeInterface } from '../EmployeeInterface';
>>>>>>> parent of e18024d... display sequence
=======
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
=======
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // private url: string = "assets/employee.json"
  // private url: string = 'http://localhost:5000/users'
  
  
  private url = "http://localhost:3000/employee";
<<<<<<< HEAD
<<<<<<< HEAD
//   selectedEmployee: CreateEmpComponent;
//   employees: CreateEmpComponent[];
//  readonly baseUrl = 'http//localhost:3000/employee';
  
  constructor(private http: HttpClient) { }

<<<<<<< HEAD
=======
//   getemployees():Observable<EmployeeInterface[]>{
//     return this.http.get<EmployeeInterface[]>(this.url);
// }

>>>>>>> parent of e18024d... display sequence
  public  getemployees()  {
    return this.http.get(this.url)
  }
  // postEmployee(emp: CreateEmpComponent) {
  //   return this.http.post(this.baseUrl + 'employee', emp);
  // }

  // putEmployee(upEmp: UpdateEmpComponent) {
  //   return this.http.put(this.baseUrl + '/emp/:id', upEmp );
  // }
=======
  
  constructor(private http: HttpClient) { }



  public  getemployees()  {
    return this.http.get(this.url)
  }
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
=======
  
  constructor(private http: HttpClient) { }



  public  getemployees()  {
    return this.http.get(this.url)
  }
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY

  // deleteEmployee(delEmp) {
  //   return this.http.delete(this.baseUrl + '/emp/:email', delEmp );
  // }
}
