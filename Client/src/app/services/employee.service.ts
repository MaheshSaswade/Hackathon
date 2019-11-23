import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:3000/employee";
  
  constructor(private http: HttpClient) { }



  public  getemployees()  {
    return this.http.get(this.url)
  }

}
