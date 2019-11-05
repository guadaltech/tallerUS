import { UserModel } from 'src/app/utils/models/api/user';
import { TokenModel } from 'src/app/utils/models/api/token';

export const TOKEN_NAME = 'access_token';

export class TokenData
{
    private created: Date;
    private id: string;
    private ttl: number;
    private user: UserModel;
    private expire: boolean;

    constructor()
    {
        let token = this.parse();

        if(token)
        {
            this.created = token.created;
            this.id = token.id;
            this.ttl = token.ttl * 1000;
            this.user = token.user;
            this.setExpire();
        }
    }

    private parse(): TokenModel
    {
        return JSON.parse(localStorage.getItem(TOKEN_NAME));
    }

    private setExpire()
    {
        let now = new Date();
        let oneDay = 1000 * 60 * 60 * 24;
        let tomorrow = +now + oneDay;

        let expireDate = +this.created + this.ttl;

        if (tomorrow > expireDate)
            this.expire = true;
        else
            this.expire = false;
    }

    getToken(): string
    {
        return this.id;
    }

    getUser(): UserModel
    {
        return this.user;
    }

    willExpire(): boolean
    {
        return this.expire;
    }

    isValid(): boolean
    {
        if(this.id)
            return true;
        else
            return false;
    }

}
