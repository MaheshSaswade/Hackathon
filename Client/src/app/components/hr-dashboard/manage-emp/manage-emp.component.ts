import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-manage-emp',
  templateUrl: './manage-emp.component.html',
  styleUrls: ['./manage-emp.component.css']
})
export class ManageEmpComponent implements OnInit {
  //router: any;
  //route: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  showAddForm(){
    console.log('function call');
    this.router.navigate(['app-create-emp'], {relativeTo: this.route});
  }

  showDeleteForm(){
    this.router.navigate(['delete-emp'], {relativeTo: this.route});
  }
  showUpdateForm(){
    this.router.navigate(['update-emp'], {relativeTo: this.route});
  }

}
