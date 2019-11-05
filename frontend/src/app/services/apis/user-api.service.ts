import { Injectable } from '@angular/core';
import { ApiServices } from 'src/app/utils/typescript/api';
import { UserModel } from 'src/app/utils/models/api/user';
import { ApiService } from '../api/api.service';

@Injectable()
export class UserApiService implements ApiServices<UserModel>
{
    readonly model: string = 'users';

    constructor(private api: ApiService)
    {
    }

    async get() : Promise<Array<UserModel>>
    {
        return await this.api.get(this.model) || [];
    }

    async getById(id: string): Promise<UserModel>
    {
        return await this.api.get(this.model + '/' + id) || {};
    }

    async post(body: UserModel, endpoint: string = ''): Promise<UserModel>
    {
      return await this.api.post(this.model + endpoint, body) || {};
    }

    async patch(id: string, body: UserModel): Promise<UserModel>
    {
      return await this.api.patch(this.model + '/' + id, body) || {};
    }
}
