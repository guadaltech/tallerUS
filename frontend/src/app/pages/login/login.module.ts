import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserApiService } from 'src/app/services/apis/user-api.service';

const routes: Routes =
[
    { path: '', component: LoginComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes), FormsModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [UserApiService]
})
export class LoginModule
{

}