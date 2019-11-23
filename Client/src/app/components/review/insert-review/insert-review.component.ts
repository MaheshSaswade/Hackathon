import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service'
import { ReviewService } from '../../../services/review.service'

@Component({
	selector: 'app-insert-review',
	templateUrl: './insert-review.component.html',
	styleUrls: ['./insert-review.component.css']
})

export class InsertReviewComponent implements OnInit {
	empList = [];
	skillList = [];
	selectedItems= [];
	selectSkills= [];

	constructor(public Emp: EmployeeService, public Rev: ReviewService) {
	}

	getemplist() {
		this.Emp.getEmployees().subscribe((response) => {
			let data = JSON.stringify(response); let data1 = JSON.parse(data)

			for (let i = 0; i < data1.length; i++) {
				this.empList.push(data1[i].empName)
			}

			return this.empList
		})

	}
	
	getskillList(){
		this.Emp.getskills().subscribe((response) => {
			let data = JSON.stringify(response); let data1 = JSON.parse(data)
			console.log(data1)
			for (let i = 0; i < data1.length; i++) {
				this.skillList.push(data1[i].skill)
			}
			console.log(this.skillList)
			return this.skillList
		})
	}

	
		create_review(event){
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
			
			this.Rev.create_review(review_type, this.selectSkills, this.selectedItems, date1, deadline)
		  }
	

	ngOnInit() {
		this.getemplist()
		this.getskillList()
	}

}
