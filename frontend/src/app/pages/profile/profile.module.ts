import { NgModule } from "@angular/core";
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserApiService } from 'src/app/services/apis/user-api.service';

const routes: Routes =
[
    { path: '', component: ProfileComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes), FormsModule],
    declarations: [ProfileComponent],
    exports: [ProfileComponent],
    providers: [UserApiService]
})
export class ProfileModule
{

}