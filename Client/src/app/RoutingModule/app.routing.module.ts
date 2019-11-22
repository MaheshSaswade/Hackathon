import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
const routes: Routes = [
    {path: 'view-emp-list',component: ListEmployeeComponent},
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ListEmployeeComponent,
                                                      ]