import { ToastService } from './../toast/toast.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { ApiService } from '../api/api.service';
import { TokenModel } from 'src/app/utils/models/api/token';
import { UserModel } from 'src/app/utils/models/api/user';
import { TOKEN_NAME } from 'src/app/utils/classes/auth/token';
import { UserApiService } from '../apis/user-api.service';

@Injectable()
export class AuthService
{
  model = 'users';

  constructor(private api: UserApiService, private storage: StorageService, private router: Router, private toast: ToastService)
  {
  }

  requestPassword(body: any)
  {
  }

  resetPassword(body: any, params)
  {
  }

  async login(body: UserModel)
  {
    const token = await this.api.post(body, '/login');

    if (token)
    {
      this.storage.authenticate(token);
      this.router.navigate(['/page/dashboard']);
    }
  }

  async logout()
  {
    await this.api.post({}, '/logout');
    this.storage.removeToken();
    this.router.navigate(['/auth/login']);
  }

  async profile(body: UserModel)
  {
    const user = await this.api.patch(this.storage.getUser().id, body);

    if (user)
    {
      const token: TokenModel = JSON.parse(localStorage.getItem(TOKEN_NAME));
      token.user = user;

      this.storage.authenticate(token);
    }

    return user;
  }

  async register(body: UserModel)
  {
    const user = await this.api.post(body);

    if (user)
    {
      this.toast.showSuccess('Te has registrado correctamente', 'Felicidades');
      this.router.navigate(['/auth/login']);
    }
  }

  refresh()
  {
  }

  isAuthenticated(): boolean
  {
    return this.storage.isAuthenticated();
  }

}
