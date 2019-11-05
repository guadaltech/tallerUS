import { HttpParams } from '@angular/common/http';

export class HttpOptions
{
  params: HttpParams = new HttpParams();
  observe: 'body' = 'body';

  constructor(params: object)
  {
    this.setParams(params);
  }

  private setParams(params: object)
  {
    for (let k in params)
    {
      this.params = this.params.set(k, this.getParam(params[k]));
    }
  }

  private getParam(param: any): any
  {
    if (typeof param == 'object')
      param = JSON.stringify(param);

    return param;
  }

  setParam(key: string, param: any)
  {
    this.params = this.params.set(key, this.getParam(param));
  }

  getParams()
  {
    return this.params;
  }
}