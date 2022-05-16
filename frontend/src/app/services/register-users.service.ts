import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterUsersService {

  constructor(
    private _http:HttpClient
  ) {

  }

  SaveDatabaseUser(data){
    let params = JSON.stringify(data);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('api-django/register-user',params,{headers:headers})
  }
}
