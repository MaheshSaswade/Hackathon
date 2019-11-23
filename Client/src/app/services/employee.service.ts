import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

 getEmployees() {
    // get employee list object from server
    const url = 'http://localhost:3000/employee'
    return this.http.get(url)
}

getskills(){
  const url = 'http://localhost:3000/skills'
    return this.http.get(url)
}

}
