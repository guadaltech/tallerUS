import { DepartmentModel } from './department';
import { Models } from './models';

export interface EmployeeModel extends Models
{
    name?: string;
    job?: string;
    state?: string;
    department?: DepartmentModel
}
