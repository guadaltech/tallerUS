import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
editar=false;
  constructor(public api: ApiService) { }

  get()
  {
 
    return new Promise((resolve, reject) => {
    
        this.api.get<any>('employees').then(data=>{
          resolve(data)

          },error=>{
            reject(error);
          });
         
      
      
      });
  }
post(data){
  return new Promise((resolve, reject) => {
    this.api.post<any>("employees", data).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
 })
}
  delete(params){
    return new Promise((resolve, reject) => {
       this.api.delete("employees/"+params).then(res=>{
         resolve("OK")
       }).catch(err=>{
         reject(err)
       })
    })
  
  }
  patch(id, params){
    return new Promise((resolve, reject) => {
      this.api.patch("employees/"+id, params).then(res=>{
        resolve("OK")
      }).catch(err=>{
        reject(err)
      })
   })
  }
}
