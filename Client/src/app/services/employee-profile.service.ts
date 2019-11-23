import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService {

  private url = "http://localhost:3000/employee/me";

  constructor(private http: HttpClient) { }
  public  getEmployeeProfile()  {
    let headers=new HttpHeaders().set('Authorization','auth-token')
    return this.http.get(this.url,{headers})
  }
}
