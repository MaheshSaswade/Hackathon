import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  Routes , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { CreateEmpComponent } from './components/hr-dashboard/manage-emp/create-emp/create-emp.component';
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
import { EmployeeService } from './services/employee.service';
import { UpdateEmpComponent } from './components/hr-dashboard/manage-emp/update-emp/update-emp.component';
import { DeleteEmpComponent } from './components/hr-dashboard/manage-emp/delete-emp/delete-emp.component';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';

// const appRoutes: Routes =[
//   {
//     path: 'hr-dash',
//     component : HrDashboardComponent,
//     children: [{
//       path: 'manage-emp',
//       component : ManageEmpComponent,
//       children: [
//         { path: 'cerateEmp',
//           component: CreateEmpComponent },
//         { path: 'delete-emp',
//           component: DeleteEmpComponent },
//         { path : 'update-emp',
//           component: UpdateEmpComponent }
//       ]
//     }]
//   }
// ]

// const routes: Routes =[
//   {
//     path: 'hr-dash',
//     component : HrDashboardComponent
//   },
//   {
//     path: 'manage-emp',
//     component : ManageEmpComponent
//   },
//   { 
//     path: 'cerate-emp',
//     component: CreateEmpComponent },
//         { path: 'delete-emp',
//           component: DeleteEmpComponent },
//         { path : 'update-emp',
//           component: UpdateEmpComponent }
// ]
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
    ManageReviewComponent,
    UpdateEmpComponent,
    DeleteEmpComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
    // {
    //   path: 'hr-dash',
    //   component : HrDashboardComponent,
    //   children: [{
    //     path: 'manage-emp',
    //     component : ManageEmpComponent,
    //     children: [
    //       { path: 'cerate-emp',
    //         component: CreateEmpComponent },
    //       { path: 'delete-emp',
    //         component: DeleteEmpComponent },
    //       { path : 'update-emp',
    //         component: UpdateEmpComponent }
    //     ]
    //   }]
    // },
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
  ]
  ),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, DatePipe], 
  
  bootstrap: [AppComponent, EmpDashboardComponent, LoginComponent],
  exports: [RouterModule]
})

export class AppModule { }
export const routingComponents = [  HrDashboardComponent,
                                    ManageEmpComponent,
                                    CreateEmpComponent,
                                    DeleteEmpComponent,
                                    UpdateEmpComponent ]

