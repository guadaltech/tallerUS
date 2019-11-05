import { Injectable } from '@angular/core';
import { ApiServices } from 'src/app/utils/typescript/api';
import { ApiService } from '../api/api.service';
import { DepartmentModel } from 'src/app/utils/models/api/department';

@Injectable()
export class DepartmentApiService implements ApiServices<DepartmentModel>
{
    readonly model: string = 'departments';

    constructor(private api: ApiService)
    {
    }

    async get() : Promise<Array<DepartmentModel>>
    {
        return await this.api.get(this.model) || [];
    }

    async getById(id: string): Promise<DepartmentModel>
    {
        return await this.api.get(this.model + '/' + id) || {};
    }

    async post(body: DepartmentModel): Promise<DepartmentModel>
    {
      return await this.api.post(this.model, body) || {};
    }

    async patch(id: string, body: DepartmentModel): Promise<DepartmentModel>
    {
      return await this.api.patch(this.model + '/' + id, body) || {};
    }
}
