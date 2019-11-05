import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserModel } from 'src/app/utils/models/api/user';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'gst-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent
{
    password: string;
    user: UserModel;
    userId: UserModel['id'];

    constructor(private api: AuthService, private toast: ToastService, private storage: StorageService)
    {
        this.user = JSON.parse(JSON.stringify(this.storage.getUser()));
        this.userId = this.storage.getUser().id;
    }

    async OnSubmit(event: NgForm)
    {
        const password = event.form.value.password;

        if(!password)
        {
          delete event.form.value.password;
        }
        else if(this.password != password)
        {
            this.toast.showError('Las contraseñas no coinciden', 'Error');
            return;
        }

        this.user = await this.api.profile(event.form.value);
    }
}
