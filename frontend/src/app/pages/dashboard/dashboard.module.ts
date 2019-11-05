import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ClientModule } from '../client/client.module';

const routes: Routes =
[
    { path: '', component: DashboardComponent}
];

@NgModule({
    imports: 
    [
        RouterModule.forChild(routes), 
        FormsModule, 
        ReactiveFormsModule,
        ClientModule,
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
})
export class DashboardModule
{

}