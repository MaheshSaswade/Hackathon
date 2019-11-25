import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../services/review.service'


@Component({
  selector: 'app-deletereview',
  templateUrl: './deletereview.component.html',
  styleUrls: ['./deletereview.component.css']
})
export class DeletereviewComponent implements OnInit {

  reviews = [];
  selected_review;
  constructor(public Rev: ReviewService) { }

  getreviewlist(){
		this.Rev.getreviews().subscribe((response) => {
			let data = JSON.stringify(response); let data1 = JSON.parse(data)
			console.log(data1)
			for (let i = 0; i < data1.length; i++) {
				this.reviews.push(data1[i].review_id)
			}
			console.log(this.reviews)
			return this.reviews
		})
	}

  delete_review(event){
    event.preventDefault()
    console.log(this.selected_review)
    this.Rev.delete_review(this.selected_review)
    }


  ngOnInit() {
  this.getreviewlist()
  }

}
