import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeInterface } from '../EmployeeInterface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = "assets/employee.json"
  constructor(private http: HttpClient) { }

  getemployees():Observable<EmployeeInterface[]>{
    return this.http.get<EmployeeInterface[]>(this.url);
  }
}
