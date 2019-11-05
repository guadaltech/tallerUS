import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  constructor(public api: ApiService) { }

  get() {
    return new Promise((resolve, reject) => {
      this.api.get<any>('departments').then(data => {
        resolve(data)

      });

    });
  }


   
}