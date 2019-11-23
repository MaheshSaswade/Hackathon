import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   
  // private url: string = "assets/employee.json"
  // private url: string = 'http://localhost:5000/users'
  
  
  private url = "http://localhost:3000/employee";

  constructor(private http: HttpClient) { }

//   getemployees():Observable<EmployeeInterface[]>{
//     return this.http.get<EmployeeInterface[]>(this.url);
// }

  public  getemployees()  {
    return this.http.get(this.url)
  }

}
  


  
  

