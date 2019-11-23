import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
import { ManageEmpComponent } from '../components/hr-dashboard/manage-emp/manage-emp.component';

const routes: Routes = [
    {path: 'view-emp-list',component: ListEmployeeComponent},
    {path: 'app-manage-emp',component: ManageEmpComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ListEmployeeComponent,
                                   
                                    ManageEmpComponent
                                                      ]