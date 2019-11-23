import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateEmpComponent } from './components/hr-dashboard/manage-emp/create-emp/create-emp.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InsertReviewComponent } from './components/review/insert-review/insert-review.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeService } from './services/employee.service';
import { AppRoutingModule, routingComponent} from './RoutingModule/app.routing.module';
import { EmployeeProfileService } from './services/employee-profile.service';
import { UpdateEmpComponent } from './components/hr-dashboard/manage-emp/update-emp/update-emp.component';
import { DeleteEmpComponent } from './components/hr-dashboard/manage-emp/delete-emp/delete-emp.component';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    CreateEmpComponent,
    AppComponent,
    InsertReviewComponent,
    routingComponent ,   
    UpdateEmpComponent,
    DeleteEmpComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [EmployeeService, EmployeeProfileService],
  bootstrap: [AppComponent, EmpDashboardComponent, LoginComponent]
})

export class AppModule { }
