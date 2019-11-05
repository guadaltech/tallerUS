import { NgModule } from "@angular/core";
import { ToastService } from '../services/toast/toast.service';
import { StorageService } from '../services/storage/storage.service';
import { ApiService } from '../services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from '../services/auth/auth-guard.service';
import { AuthService } from '../services/auth/auth.service';
import { UserApiService } from '../services/apis/user-api.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:
    [
        CommonModule,
        HttpModule,
        HttpClientModule,
        ToastrModule.forRoot(),
    ],
    providers:
    [
        ApiService,
        ToastService,
        StorageService,
        AuthGuardService,
        AuthService,
        UserApiService
    ]
})
export class SharedModule
{
}
