import { Models } from './models';

export interface UserModel extends Models
{
    username?: string;
    email?: string;
    password?: string;
}
