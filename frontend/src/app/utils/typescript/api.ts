import { Models } from '../models/api/models';

export interface ApiServices<T extends Models>
{
    model: string;

    get(): Promise<Array<T>>;
    getById(id: T['id']): Promise<T>;
    post?(body: T): Promise<T>;
    patch(id: T['id'], body: T): Promise<T>;
    delete?(id: T['id']);
    head?(id: T['id']): Promise<boolean>;
}
