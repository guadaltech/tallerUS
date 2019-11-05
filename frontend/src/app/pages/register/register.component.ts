import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
    selector: 'gst-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent
{
    password: string;

    constructor(private auth: AuthService, private toast: ToastService)
    {
    }

    async OnSubmit(event: NgForm)
    {
        const password = event.form.value.password;

        if(this.password != password)
        {
            this.toast.showError('Las contraseñas no coinciden', 'Error');
            return;
        }

        await this.auth.register(event.form.value);
    }
}