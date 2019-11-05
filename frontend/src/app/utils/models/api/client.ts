import { Models } from './models';

export interface ClientModel extends Models
{
    name?: string;
    company?: string;
    nif?: string;
    sector?: string;
    email?: string;
    phone?: number;
}
