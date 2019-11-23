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
import { CreateEmpComponent } from '../components/hr-dashboard/manage-emp/create-emp/create-emp.component';
import { DeleteEmpComponent } from '../components/hr-dashboard/manage-emp/delete-emp/delete-emp.component';
import { UpdateEmpComponent } from '../components/hr-dashboard/manage-emp/update-emp/update-emp.component';
const routes: Routes = [
    {path: 'view-emp-list',component: ListEmployeeComponent},
    { path: 'app-manage-review', component: ManageReviewComponent},
     {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path : 'app-emp-dashboard', component : EmpDashboardComponent},
    {path: 'app-hr-dashboard', component : HrDashboardComponent},
    {path: 'app-view-profile', component: ViewProfileComponent},
    {path: 'app-view-reviews', component: ViewReviewsComponent },
    {path: 'app-view-stats', component: ViewStatsComponent},
    {path: 'app-all-reviews-list', component: AllReviewsListComponent},
    {path: 'app-manage-emp', component: ManageEmpComponent},
    {path: 'app-login', component: LoginComponent}
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
                                LoginComponent,
                                HrDashboardComponent,
                                    ManageEmpComponent,
                                    CreateEmpComponent,
                                    DeleteEmpComponent,
                                    UpdateEmpComponent 

                                                      ]