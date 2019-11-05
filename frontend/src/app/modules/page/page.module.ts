import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';

const routes: Routes =
[
    { path: 'profile', loadChildren: '../../pages/profile/profile.module#ProfileModule', component: PageComponent },
    { path: 'dashboard', loadChildren: '../../pages/dashboard/dashboard.module#DashboardModule', component: PageComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [PageComponent],
    exports: [PageComponent]
})
export class PageModule
{

}
