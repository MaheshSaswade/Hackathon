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

  getreviews(){
    const url = 'http://localhost:3000/rList'
    return this.http.get(url)
  }

  create_review(review_type, selectSkills, selectedItems, date1, deadline) {
    
    // post data to node server
    const url = 'http://localhost:3000/review'
    const body = {review_type: review_type, skills: selectSkills, reviewer: selectedItems, create_date: date1, deadline_date: deadline}
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post(url, body, httpOptions).subscribe((data) => { console.log(data) });
<<<<<<< HEAD
  }

  delete_review(review_id){
        // post review_id to node server to delete review
    const baseurl = 'http://localhost:3000/review1'
    const url = baseurl+ '/'+review_id

    return this.http.delete(url).subscribe((data) => { console.log(data) });
  }

  update_review(review_id, review_type, selectSkills, selectedItems, deadline){
        // patch data to node server
    const url = 'http://localhost:3000/reviewUpdate'
    const body = {review_id: review_id, review_type: review_type, skills: selectSkills, reviewer: selectedItems, deadline_date:deadline} 
    return this.http.patch(url, body).subscribe((data) => { console.log(data) });
=======
>>>>>>> parent of ea71afd... authentication complete
  }

}