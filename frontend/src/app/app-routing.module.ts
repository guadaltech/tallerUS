import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './modules/admin-layout/admin-layout.component';

const routes: Routes =
[
  { path: '', redirectTo: 'page/dashboard', pathMatch: 'full' },
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: '', component: AdminLayoutComponent,
    children:
    [
      { path: '', loadChildren: './modules/admin-layout/admin-layout.module#AdminLayoutModule' }
    ]
  }
];

@NgModule({
  imports:
  [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ]
})
export class AppRoutingModule { }
