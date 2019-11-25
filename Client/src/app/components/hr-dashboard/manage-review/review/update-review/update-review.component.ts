import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../services/review.service'

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css']
})
export class UpdateReviewComponent implements OnInit {
  reviews = [];
  empList = [];
	skillList = [];
	selectedItems= [];
  selectSkills= [];
  selected_review;

	constructor(public Rev: ReviewService) {
	}

	getemplist() {
		this.Rev.getEmployees().subscribe((response) => {
			let data = JSON.stringify(response); let data1 = JSON.parse(data)

			for (let i = 0; i < data1.length; i++) {
				const data = ('ID:' + data1[i].empID + ' ' + data1[i].empName)
				this.empList.push(data)
			}

			return this.empList
		})

	}
	
	getskillList(){
		this.Rev.getskills().subscribe((response) => {
			let data = JSON.stringify(response); let data1 = JSON.parse(data)
			console.log(data1)
			for (let i = 0; i < data1.length; i++) {
				this.skillList.push(data1[i].skill)
			}
			console.log(this.skillList)
			return this.skillList
		})
	}
  
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
	
		update_review(event){
      event.preventDefault()
      
      let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0'); 
			let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0! 
			let yyyy = today.getFullYear(); 
      const date1 = mm + '/' + dd + '/' + yyyy;
      
      const target = event.target
      const review_type = target.querySelector('#review_type').value

      const date = target.querySelector('#deadline').value
			const deadline = date.toString()

		
      const review_id = this.selected_review;
			console.log(this.selectSkills)

			this.Rev.update_review(review_id, review_type, this.selectSkills, this.selectedItems, deadline)
			
		  }
	

	ngOnInit() {
    this.getreviewlist()
		this.getemplist()
		this.getskillList()
	}

}