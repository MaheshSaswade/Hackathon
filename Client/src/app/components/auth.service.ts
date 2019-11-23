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
    emp: string;
    data: Object;
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const url = 'http://localhost:3000/employee/login'
    const body = { email: email, password: password }
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    
    return this.http.post(url, body, {headers})
  }


  // getUserDetails(email, password) {
  //   // post username and password to node server
  //   const url = 'http://localhost:3000/employee/login'
  //   const body = {email: email, password: password}

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //     })
  //   };

  //   return this.http.post(url, body, httpOptions);
  // }
  // getLogout() {
  //   const url = 'http://localhost:3000/employee/logout'
  //   alert("delete")
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json'
  //     })
  //   };
  //   return this.http.post(url,httpOptions)
  // }
}
