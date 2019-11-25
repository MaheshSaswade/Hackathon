import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrDashboardComponent } from './hr-dashboard.component';
import { AllReviewsListComponent } from './all-reviews-list/all-reviews-list.component';
import { ManageEmpComponent } from './manage-emp/manage-emp.component';
import { ManageReviewComponent } from './manage-review/manage-review.component';



@NgModule({
  declarations: [AllReviewsListComponent, ManageReviewComponent],
  imports: [
    CommonModule
  ],
  exports: [AllReviewsListComponent, ManageReviewComponent]
})
export class HrDashboardModule { }
