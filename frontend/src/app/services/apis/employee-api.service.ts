import { Injectable } from '@angular/core';
import { ApiServices } from 'src/app/utils/typescript/api';
import { ApiService } from '../api/api.service';
import { EmployeeModel } from 'src/app/utils/models/api/employee';

@Injectable()
export class EmployeeApiService implements ApiServices<EmployeeModel>
{
    readonly model: string = 'employees';

    constructor(private api: ApiService)
    {
    }

    async get(): Promise<Array<EmployeeModel>>
    {
        return await this.api.get(this.model) || [];
    }

    async getById(id: string): Promise<EmployeeModel>
    {
        return await this.api.get(this.model + '/' + id) || {};
    }

    async post(body: EmployeeModel): Promise<EmployeeModel>
    {
      return await this.api.post(this.model, body) || {};
    }

    async patch(id: string, body: EmployeeModel): Promise<EmployeeModel>
    {
      return await this.api.patch(this.model + '/' + id, body) || {};
    }

    async delete(id: string)
    {
        return await this.api.delete(this.model + '/' + id);
    }
}
