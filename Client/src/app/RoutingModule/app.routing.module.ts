import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
import { ManageReviewComponent } from '../components/hr-dashboard/manage-review/manage-review.component';
import { EmpDashboardComponent } from '../components/emp-dashboard/emp-dashboard.component';
import { HrDashboardComponent } from '../components/hr-dashboard/hr-dashboard.component';
import { ViewProfileComponent } from '../components/view-profile/view-profile.component';
import { ViewReviewsComponent } from '../components/view-reviews/view-reviews.component';
import { ViewStatsComponent } from '../components/hr-dashboard/view-stats/view-stats.component';
import { AllReviewsListComponent } from '../components/hr-dashboard/all-reviews-list/all-reviews-list.component';
import { ManageEmpComponent } from '../components/hr-dashboard/manage-emp/manage-emp.component';
import { LoginComponent } from '../components/login/login.component';
const routes: Routes = [
    {path: 'view-emp-list',component: ListEmployeeComponent},
    ,
    {
      path: 'managereview', component: ManageReviewComponent},
     {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path : 'emp-dash', component : EmpDashboardComponent},
    {path: 'hr-dash', component : HrDashboardComponent},
    {path: 'viewprofile', component: ViewProfileComponent},
    {path: 'viewreviews', component: ViewReviewsComponent },
    {path: 'viewstats', component: ViewStatsComponent},
    {path: 'allreviewslist', component: AllReviewsListComponent},
    {path: 'manageemp', component: ManageEmpComponent},
    {path: 'login', component: LoginComponent}
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ListEmployeeComponent,
                                ManageReviewComponent,
                                EmpDashboardComponent,
                                HrDashboardComponent,
                                ViewProfileComponent,
                                ViewReviewsComponent,
                                ViewStatsComponent,
                                AllReviewsListComponent,
                                ManageEmpComponent,
                                LoginComponent

                                                      ]