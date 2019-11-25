import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MatSelectModule } from '@angular/material/select';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InsertReviewComponent } from './components/review/insert-review/insert-review.component';

import { EmployeeService } from './services/employee.service';
import { AppRoutingModule, routingComponent} from './RoutingModule/app.routing.module';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ViewReviewsComponent } from './components/view-reviews/view-reviews.component';
import { ViewStatsComponent } from './components/hr-dashboard/view-stats/view-stats.component';
import { AllReviewsListComponent } from './components/hr-dashboard/all-reviews-list/all-reviews-list.component';
import { ManageEmpComponent } from './components/hr-dashboard/manage-emp/manage-emp.component';
import { ManageReviewComponent } from './components/hr-dashboard/manage-review/manage-review.component';
import { ReviewService } from './services/review.service';
import { AuthService } from './services/auth.service';
import { DeletereviewComponent } from './components/review/deletereview/deletereview.component';
import { UpdateReviewComponent } from './components/review/update-review/update-review.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertReviewComponent,
    routingComponent ,   
    EmpDashboardComponent,
    LoginComponent,
    HrDashboardComponent,
    ViewProfileComponent,
    ViewReviewsComponent,
    ViewStatsComponent,
    AllReviewsListComponent,
    ManageEmpComponent,
    ManageReviewComponent,
    routingComponent    
    UpdateEmpComponent,
    DeleteEmpComponent,
    DeletereviewComponent,
    UpdateReviewComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
 
    AngularMultiSelectModule,
    MultiSelectModule,
    MatDatepickerModule,
    RouterModule.forRoot(
   [ {
        path: 'login', component: LoginComponent
    },
    {
      path: '', redirectTo: '/login', pathMatch: 'full'
  },
    {
      path : 'emp-dash', component : EmpDashboardComponent
    },
    {
      path: 'hr-dash',
      component : HrDashboardComponent,
    },
    {
      path: 'viewprofile', component: ViewProfileComponent
    },
    {
      path: 'viewreviews', component: ViewReviewsComponent 
    },
    {
      path: 'viewstats', component: ViewStatsComponent
    },
    {
      path: 'allreviewslist', component: AllReviewsListComponent
    },
    {
      path: 'manageemp', component: ManageEmpComponent
    },
    {
      path: 'managereview', component: ManageReviewComponent
    },
    {
      path: 'managereview/createreview', component: InsertReviewComponent
    },
    {
      path:'deletereview', component: DeletereviewComponent
    },
    {
      path: 'updatereview', component: UpdateReviewComponent
    },
    {
      path: 'createreview', component: InsertReviewComponent
    }
   
  ]
  ),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [EmployeeService, ReviewService, AuthService],
  bootstrap: [AppComponent, EmpDashboardComponent, LoginComponent],
  exports: [RouterModule]
})

export class AppModule { }
export const routingComponents = [  HrDashboardComponent,
                                    ManageEmpComponent
                                    ]

