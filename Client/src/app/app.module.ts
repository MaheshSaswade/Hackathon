import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpDashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
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
  bootstrap: [AppComponent, EmpDashboardComponent]
})

export class AppModule { }
