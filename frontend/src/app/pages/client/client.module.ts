import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client.component';
import { ClientApiService } from 'src/app/services/apis/client-api.service';
import { MatButtonModule, MatInputModule, MatRippleModule, MatFormFieldModule, MatTooltipModule, MatSelectModule, MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes =
[
    { path: 'client', component: ClientComponent},
];

@NgModule({
    imports: 
    [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,

        MatButtonModule,
        MatInputModule,
        MatRippleModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatSelectModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
    ],
    declarations: [ClientComponent, ClientFormComponent],
    exports: [ClientComponent],
    providers: [ClientApiService]
})
export class ClientModule
{

}