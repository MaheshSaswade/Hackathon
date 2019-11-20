import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { InsertReviewComponent } from './components/review/insert-review/insert-review.component';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertReviewComponent,
    EmpDashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
      path : 'app-emp-dashboard', component : EmpDashboardComponent
    },
    {
      path: 'login', component: LoginComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent, EmpDashboardComponent, LoginComponent]
})

export class AppModule { }
