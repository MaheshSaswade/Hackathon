import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url = "http://localhost:3000/rlist";


  constructor(private http: HttpClient) { }

  public  getreviews()  {
    return this.http.get(this.url)
  }
}
