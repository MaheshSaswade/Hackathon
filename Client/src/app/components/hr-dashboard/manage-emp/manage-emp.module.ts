import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEmpComponent } from './manage-emp.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';



@NgModule({
  declarations: [ManageEmpComponent, CreateEmpComponent, DeleteEmpComponent, UpdateEmpComponent],
  imports: [
    CommonModule
  ], 
  exports: [ManageEmpComponent, CreateEmpComponent, DeleteEmpComponent, UpdateEmpComponent]
})
export class ManageEmpModule { }
