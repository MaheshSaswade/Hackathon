import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { AppComponent } from './app.component';
import { CreateEmpComponent } from './components/create-emp/create-emp.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InsertReviewComponent } from './components/review/insert-review/insert-review.component';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ViewReviewsComponent } from './components/view-reviews/view-reviews.component';
import { ViewStatsComponent } from './components/hr-dashboard/view-stats/view-stats.component';
import { AllReviewsListComponent } from './components/hr-dashboard/all-reviews-list/all-reviews-list.component';
import { ManageEmpComponent } from './components/hr-dashboard/manage-emp/manage-emp.component';
import { ManageReviewComponent } from './components/hr-dashboard/manage-review/manage-review.component';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    CreateEmpComponent,
    AppComponent,
    InsertReviewComponent,
    EmpDashboardComponent,
    LoginComponent,
    HrDashboardComponent,
    ViewProfileComponent,
    ViewReviewsComponent,
    ViewStatsComponent,
    AllReviewsListComponent,
    ManageEmpComponent,
    ManageReviewComponent    
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularMultiSelectModule,
    MultiSelectModule,
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
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
