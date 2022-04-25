import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from "rxjs";
import {Project} from "../models/project";
import { Global } from "./global";

@Injectable()
export class ProjectService{

  //public url:string;

  constructor(
    private _http:HttpClient
  ){
    //this.url = Global.url_node;
  }

  testService(){
    return "Probando el servicio de Angular";
  }

  saveProject(project:Project):Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('/api-node/save-project',params,{headers:headers})
  }

  getProjects():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','applications/json');
    return this._http.get('/api-node/projects',{headers:headers});
  }

  getProject(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','applications/json');
    return this._http.get('/api-node/project/' + id ,{headers:headers});
  }


}
