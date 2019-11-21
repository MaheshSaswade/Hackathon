import { Component, OnInit } from '@angular/core';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data'

@Component({
  selector: 'app-insert-review',
  templateUrl: './insert-review.component.html',
  styleUrls: ['./insert-review.component.css']
})
export class InsertReviewComponent implements OnInit {
  

  constructor() { 
  
  }

  ngOnInit(){

  }

  public data: DataManager = new DataManager({
    url: 'localhost:3000/employee',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });

// maps the appropriate column to fields property
public fields: Object = { text: 'empID', value: 'EmployeeID' };
//bind the Query instance to query property
public query: Query = new Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(6);
//set the placeholder to MultiSelect input
public text: string = "Select an employee";
//sort the result items
public sorting: string = 'Ascending';
public box : string = 'box';


  onSubmit(reviewData) {
    console.log("Your data is successfully added..")
  }
  

}
