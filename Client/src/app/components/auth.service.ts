import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(email, password) {
    // post username and password to node server
    const url = 'http://localhost:3000/users/login'
    const body = {email: email, password: password}

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post(url, body, httpOptions).subscribe((data) => { console.log(data) });
  }
}
