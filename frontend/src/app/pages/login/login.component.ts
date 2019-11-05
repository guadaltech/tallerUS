import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'gst-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent
{

    constructor(private auth: AuthService)
    {

    }

    async OnSubmit(event: NgForm)
    {
        await this.auth.login(event.form.value);
    }
}