import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeInterface } from '../EmployeeInterface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url: string = "assets/employee.json"

  // private url: string = 'http://localhost:3000/employee'
  // employee: any;
  constructor(private http: HttpClient) { }

  getemployees():Observable<EmployeeInterface[]>{
    return this.http.get<EmployeeInterface[]>(this.url);
}

  // getemployees()  {
  //   this.employee=this.http.get(this.url +'/employee')
  // }

  
}
