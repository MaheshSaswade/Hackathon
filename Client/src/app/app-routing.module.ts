import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';
import { ManageEmpComponent } from './components/hr-dashboard/manage-emp/manage-emp.component';


const appRoutes: Routes =[
  
        ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [  HrDashboardComponent,
                                    ManageEmpComponent
                                     ]
