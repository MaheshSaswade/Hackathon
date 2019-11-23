import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { CreateEmpComponent } from './components/create-emp/create-emp.component';
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InsertReviewComponent } from './components/review/insert-review/insert-review.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { EmployeeService } from './services/employee.service';
import { AppRoutingModule, routingComponent} from './RoutingModule/app.routing.module';
<<<<<<< HEAD
import { EmployeeProfileService } from './services/employee-profile.service';
import { RouterModule } from '@angular/router';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { LoginComponent } from './components/login/login.component';


=======
>>>>>>> parent of e18024d... display sequence
=======
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ViewReviewsComponent } from './components/view-reviews/view-reviews.component';
import { ViewStatsComponent } from './components/hr-dashboard/view-stats/view-stats.component';
import { AllReviewsListComponent } from './components/hr-dashboard/all-reviews-list/all-reviews-list.component';
import { ManageEmpComponent } from './components/hr-dashboard/manage-emp/manage-emp.component';
import { ManageReviewComponent } from './components/hr-dashboard/manage-review/manage-review.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { EmployeeService } from './services/employee.service';
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> parent of eccf493... Emp View
=======
>>>>>>> parent of eccf493... Emp View
=======
import { AppRoutingModule, routingComponent} from './RoutingModule/app.routing.module';
import { EmployeeProfileService } from './services/employee-profile.service';
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
@NgModule({
  declarations: [
    AppComponent,
    InsertReviewComponent,
<<<<<<< HEAD
    routingComponent ,   
=======
    EmpDashboardComponent,
    LoginComponent,
    HrDashboardComponent,
    ViewProfileComponent,
    ViewReviewsComponent,
    ViewStatsComponent,
    AllReviewsListComponent,
    ManageEmpComponent,
    ManageReviewComponent,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    ListEmployeeComponent
<<<<<<< HEAD
>>>>>>> parent of eccf493... Emp View
=======
>>>>>>> parent of eccf493... Emp View
=======
    routingComponent    
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
=======
    RouterModule.forRoot([
    {
        path: 'login', component: LoginComponent
    },
    {
      path : 'emp-dash', component : EmpDashboardComponent
    },
    {
      path: 'hr-dash', component : HrDashboardComponent
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
    }
  ]),
>>>>>>> parent of f125e0d... Merge remote-tracking branch 'origin/mahesh' into AnkitaY
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
  ],
<<<<<<< HEAD
  providers: [EmployeeService, EmployeeProfileService],
  bootstrap: [AppComponent, EmpDashboardComponent, LoginComponent],
  exports: [RouterModule]
=======
  providers: [EmployeeService],
  bootstrap: [AppComponent, EmpDashboardComponent, LoginComponent]
>>>>>>> parent of e18024d... display sequence
})

export class AppModule { }

