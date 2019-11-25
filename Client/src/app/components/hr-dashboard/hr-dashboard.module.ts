import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrDashboardComponent } from './hr-dashboard.component';
import { AllReviewsListComponent } from './all-reviews-list/all-reviews-list.component';
import { ManageEmpComponent } from './manage-emp/manage-emp.component';
import { ManageReviewComponent } from './manage-review/manage-review.component';
import { ViewStatsComponent } from './view-stats/view-stats.component';



@NgModule({
  declarations: [AllReviewsListComponent, ManageReviewComponent, ViewStatsComponent],
  imports: [
    CommonModule
  ],
  exports: [AllReviewsListComponent, ManageReviewComponent, ViewStatsComponent]
})
export class HrDashboardModule { }
