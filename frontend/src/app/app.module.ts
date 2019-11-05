import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './pages/common-components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './modules/admin-layout/admin-layout.component';
import { SharedModule } from './modules/shared.module';

@NgModule({
  imports:
    [
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      ComponentsModule,
      RouterModule,
      AppRoutingModule,

      SharedModule,
    ],
  declarations:
    [
      AppComponent,
      AdminLayoutComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
