import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes =
[
    { path: '', redirectTo: 'login' },
    { path: 'login',   loadChildren: '../../pages/login/login.module#LoginModule', component: AuthComponent },
    { path: 'register',   loadChildren: '../../pages/register/register.module#RegisterModule', component: AuthComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [AuthComponent],
    exports: [AuthComponent]
})
export class AuthModule
{

}