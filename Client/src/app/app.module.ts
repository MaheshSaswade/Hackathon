import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InsertReviewComponent } from './components/review/insert-review/insert-review.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeService } from './services/employee.service';
import { AppRoutingModule, routingComponent} from './RoutingModule/app.routing.module';
import { EmployeeProfileService } from './services/employee-profile.service';
import { RouterModule } from '@angular/router';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertReviewComponent,
    routingComponent ,   
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [EmployeeService, EmployeeProfileService],
  bootstrap: [AppComponent, EmpDashboardComponent, LoginComponent],
  exports: [RouterModule]
})

export class AppModule { }

