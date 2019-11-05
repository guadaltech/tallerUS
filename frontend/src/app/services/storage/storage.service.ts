import { Injectable } from '@angular/core';
import { TokenData, TOKEN_NAME } from 'src/app/utils/classes/auth/token';
import { UserModel } from 'src/app/utils/models/api/user';
import { TokenModel } from 'src/app/utils/models/api/token';

@Injectable()
export class StorageService
{

  private token: TokenData;

  constructor()
  {
    this.token = new TokenData();
  }

  isAuthenticated() : boolean
  {
    if(!this.token || !this.token.getUser())
    {
      this.removeToken();
      return false;
    }

    return this.token.isValid();
  }

  authenticate(token: TokenModel)
  {
    localStorage.setItem(TOKEN_NAME, JSON.stringify(token));
    this.token = new TokenData();
  }

  getToken() : string
  {
    return this.token.getToken();
  }

  getUser() : UserModel
  {
    return this.token.getUser();
  }

  removeToken()
  {
    localStorage.removeItem(TOKEN_NAME);
    delete this.token;
  }

}
