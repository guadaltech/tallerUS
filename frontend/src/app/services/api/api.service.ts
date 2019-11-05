import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/constants';
import { StorageService } from '../storage/storage.service';
import { ToastService } from '../toast/toast.service';
import { HttpOptions } from 'src/app/utils/classes/api/http-options.class';
import { TOKEN_NAME } from 'src/app/utils/classes/auth/token';

@Injectable()
export class ApiService
{
  constructor(private http: HttpClient, private storage: StorageService, private toast: ToastService)
  {
  }

  getOptions(params: any = {})
  {
    let options = new HttpOptions(params);

    if (this.storage.isAuthenticated())
      options.setParam(TOKEN_NAME, this.storage.getToken());

    return options;
  }

  get<T>(endpoint: string, params?: object)
  {
    this.message('GET', endpoint);
    let options = this.getOptions(params);

    return this.http.get<T>(API_URL + '/' + endpoint, options).toPromise().catch(error => this.OnError(error));
  }

  post<T>(endpoint: string, body?, params?)
  {
    this.message('POST', endpoint);
    let options = this.getOptions(params);

    return this.http.post<T>(API_URL + '/' + endpoint, body, options).toPromise().catch(error => this.OnError(error));
  }

  patch<T>(endpoint: string, body, params?)
  {
    this.message('PATCH', endpoint);
    let options = this.getOptions(params);

    return this.http.patch<T>(API_URL + '/' + endpoint, body, options).toPromise().catch(error => this.OnError(error));
  }

  delete<T>(endpoint: string, params?)
  {
    this.message('DELETE', endpoint);
    let options = this.getOptions(params);

    return this.http.delete<T>(API_URL + '/' + endpoint, options).toPromise().catch(error => this.OnError(error));
  }

  head<T>(endpoint: string, params?)
  {
    this.message('HEAD', endpoint);
    let options = this.getOptions(params);

    return this.http.head<T>(API_URL + '/' + endpoint, options).toPromise().catch(error => this.OnError(error));
  }

  message(method: string, endpoint: string)
  {
    console.log("Request", method, endpoint);
  }

  OnError(error: Error)
  {
    this.toast.showError(error.message, 'Error');
    console.log(error);
  }

}
