import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';
import { ManageEmpComponent } from './components/hr-dashboard/manage-emp/manage-emp.component';
import { CreateEmpComponent } from './components/hr-dashboard/manage-emp/create-emp/create-emp.component';
import { DeleteEmpComponent } from './components/hr-dashboard/manage-emp/delete-emp/delete-emp.component';
import { UpdateEmpComponent } from './components/hr-dashboard/manage-emp/update-emp/update-emp.component';

const appRoutes: Routes =[
  
        { path: 'app-create-emp',
          component: CreateEmpComponent },
        { path: 'delete-emp',
          component: DeleteEmpComponent },
        { path : 'update-emp',
          component: UpdateEmpComponent }]
  
 

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
                                    ManageEmpComponent,
                                    CreateEmpComponent,
                                    DeleteEmpComponent,
                                    UpdateEmpComponent ]
