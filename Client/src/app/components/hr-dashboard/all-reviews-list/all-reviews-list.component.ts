import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-all-reviews-list',
  templateUrl: './all-reviews-list.component.html',
  styleUrls: ['./all-reviews-list.component.css']
})
export class AllReviewsListComponent implements OnInit {

  reviews=[];
  constructor(private reviewservice:ReviewService) { }

  
  ngOnInit() {
    this.reviewservice.getreviews().subscribe((data: any[]) =>{
      console.log(data);
      this.reviews=data;
  })
    } 


}
