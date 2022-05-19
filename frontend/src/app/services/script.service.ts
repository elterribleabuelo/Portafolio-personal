import { Injectable } from '@angular/core';
import { ScriptStore } from 'src/store/script.store';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  private scripts: any = {};

  constructor() {

  }

  LoadScripts(archivos:string){
    for(let archivo of archivos){
      let script = document.createElement("script");
      script.src = archivo;
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

}
