import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
    token: string;
    emp: Object;
    data: Object;
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const url = 'http://localhost:3000/employee/login'
    const body = { email: email, password: password }
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    
    return this.http.post(url, body, {headers})
  }

  getLogout() {
    const url = 'http://localhost:3000/employee/logout'
    const body =  {emp :this.emp}
    console.log("Employeee", body)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(url,body,httpOptions)
  }
}