import { Routes } from '@angular/router';

import { EmployeeComponent } from 'src/app/pages/employee/employee.component';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { EmployeeFormComponent } from 'src/app/pages/employee-form/employee-form.component';

export const AdminLayoutRoutes: Routes =
    [
        { path: 'page', loadChildren: '../../modules/page/page.module#PageModule', canActivate: [AuthGuardService] },
        { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuardService] },
        { path: "employeeForm", component: EmployeeFormComponent, canActivate: [AuthGuardService] }
    ];
