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
import { CreateEmpComponent } from './components/hr-dashboard/manage-emp/create-emp/create-emp.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';
import { ViewProfileComponent } from './components/emp-dashboard/view-profile/view-profile.component';
import { ViewReviewsComponent } from './components/emp-dashboard/view-reviews/view-reviews.component';
import { ViewStatsComponent } from './components/hr-dashboard/view-stats/view-stats.component';
import { AllReviewsListComponent } from './components/hr-dashboard/all-reviews-list/all-reviews-list.component';
import { ManageEmpComponent } from './components/hr-dashboard/manage-emp/manage-emp.component';
import { ManageReviewComponent } from './components/hr-dashboard/manage-review/manage-review.component';
import { EmployeeService } from './services/employee.service';
import { UpdateEmpComponent } from './components/hr-dashboard/manage-emp/update-emp/update-emp.component';
import { DeleteEmpComponent } from './components/hr-dashboard/manage-emp/delete-emp/delete-emp.component';
import { AppRoutingModule } from './app-routing.module';
import { ReviewService } from './services/review.service';
import { AuthService } from './services/auth.service';
import { DatePipe } from '@angular/common';
import { EmpDashboardModule } from './components/emp-dashboard/emp-dashboard.module';
import { HrDashboardModule } from './components/hr-dashboard/hr-dashboard.module';
import { ManageEmpModule } from './components/hr-dashboard/manage-emp/manage-emp.module';

@NgModule({
  declarations: [
    AppComponent, 
    EmpDashboardComponent,
    LoginComponent,
    HrDashboardComponent,
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMultiSelectModule,
    MultiSelectModule,
    MatDatepickerModule,
    EmpDashboardModule,
    HrDashboardModule,
    ManageEmpModule,
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
    
  ]
  ),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, ReviewService, AuthService,DatePipe],
  bootstrap: [AppComponent, EmpDashboardComponent, LoginComponent],
  exports: [RouterModule]
})

export class AppModule { }
export const routingComponents = [  HrDashboardComponent,
                                    ManageEmpComponent,
                                    CreateEmpComponent,
                                    DeleteEmpComponent,
                                    UpdateEmpComponent ]

