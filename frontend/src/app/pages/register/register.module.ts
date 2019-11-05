import { NgModule } from "@angular/core";
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserApiService } from 'src/app/services/apis/user-api.service';

const routes: Routes =
[
    { path: '', component: RegisterComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes), FormsModule],
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
    providers: [UserApiService]
})
export class RegisterModule
{

}