import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpDashboardComponent } from './emp-dashboard.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';



@NgModule({
  declarations: [
    ViewProfileComponent,
    ViewReviewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ViewProfileComponent,
    ViewReviewsComponent
  ]

})
export class EmpDashboardModule { }
