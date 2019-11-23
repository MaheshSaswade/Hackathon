import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

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

  create_review(review_type, selectSkills, selectedItems, date1, deadline) {
    
    // post username and password to node server
    const url = 'http://localhost:3000/review'
    const body = {review_type: review_type, skills: selectSkills, reviewer: selectedItems, create_date: date1, deadline_date: deadline}
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post(url, body, httpOptions).subscribe((data) => { console.log(data) });
  }

}