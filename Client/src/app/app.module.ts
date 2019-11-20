import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
      path : 'app-emp-dashboard', component : EmpDashboardComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent, EmpDashboardComponent]
})

export class AppModule { }
