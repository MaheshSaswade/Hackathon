import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
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
>>>>>>> parent of eccf493... Emp View
=======
>>>>>>> parent of eccf493... Emp View
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
    ListEmployeeComponent
<<<<<<< HEAD
>>>>>>> parent of eccf493... Emp View
=======
>>>>>>> parent of eccf493... Emp View
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
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

