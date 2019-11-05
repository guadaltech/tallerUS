import { Injectable } from '@angular/core';
import { ApiServices } from 'src/app/utils/typescript/api';
import { ApiService } from '../api/api.service';
import { ClientModel } from 'src/app/utils/models/api/client';

@Injectable()
export class ClientApiService implements ApiServices<ClientModel>
{
    readonly model: string = 'clients';

    constructor(private api: ApiService)
    {
    }

    async get() : Promise<Array<ClientModel>>
    {
        return await this.api.get(this.model) || [];
    }

    async getById(id: string): Promise<ClientModel>
    {
        return await this.api.get(this.model + '/' + id) || {};
    }

    async post(body: ClientModel): Promise<ClientModel>
    {
      return await this.api.post(this.model, body) || {};
    }

    async patch(id: string, body: ClientModel): Promise<ClientModel>
    {
      return await this.api.patch(this.model + '/' + id, body) || {};
    }
}
