import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatInputModule, MatRippleModule, MatFormFieldModule, MatTooltipModule, MatSelectModule, MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';
import { EmployeeComponent } from 'src/app/pages/employee/employee.component';
import { EmployeeFormComponent } from 'src/app/pages/employee-form/employee-form.component';

@NgModule({
  imports: 
  [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  declarations: 
  [
    EmployeeComponent,
    EmployeeFormComponent

  ]
})

export class AdminLayoutModule
{
}
