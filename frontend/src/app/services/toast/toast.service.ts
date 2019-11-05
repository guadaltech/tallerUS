import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService
{
    constructor(private toastr: ToastrService) { }

    showSuccess(content: string, title: string, config: any = []) {
        this.toastr.success(content, title, config);
    }
    showError(content: string, title: string, config: any = []) {
        this.toastr.error(content, title, config);
    }
    showInfo(content: string, title: string, config: any = []) {
        this.toastr.info( content, title, config);
    }
    showWarning(content: string, title: string, config: any = []) {
        this.toastr.warning(content, title,config);
    }
}
