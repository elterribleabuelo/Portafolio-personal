import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()
export class UploadService{

  //public url:string;

  constructor(){
    //this.url = Global.url_node;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
		return new Promise(function(resolve, reject){
      // Creamos un objeto FormData que simula un formulario real
			var formData:any = new FormData();

      // Creamos el objeto para hacer una petición ajax
			var xhr = new XMLHttpRequest();

      // Recorremos todos los ficheros que hayamos adjuntado
			for(var i = 0; i < files.length; i++){
        // Se los añadimos al formulario para su posterior envio
				formData.append(name, files[i], files[i].name);
			}

      // Comprobamos el estado de la petición ajax
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
            // Si el resultado es positivo que nos devuelva la respuesta positiva
						resolve(JSON.parse(xhr.response));
					}else{
            // si no que nos devuelva el error
						reject(xhr.response);
					}
				}
			}
      // Hacemos la petición por post y a la url que le indiquemos
			xhr.open('POST', url, true);
       // Ejecutamos la petición ajax
			xhr.send(formData);
		});
	}
}
