import { UserModel } from './user';

export interface TokenModel
{
    created?: Date;
    id?: string;
    ttl?: number;
    userId?: string;
    user?: UserModel;
}