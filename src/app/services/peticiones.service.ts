//Aqui es donde se van a estar haciendo las peticiones Ajax
//Se importa injectable para poder inyectar nuestros servicios en otras clases
import { Injectable } from "@angular/core";
//Modulos que nos permitiran hacer peticiones ajax a un servicio externo o modificar cabeceras de peticiones
import { HttpClient, HttpHeaders } from "@angular/common/http";
//Importar el observable por que con el vamos a observar los datos que nos devulve el Api rest
//Se tuvo que ejecutar el siguiente comando para ser reconocido "npm install --save rxjs-compat"
import { Observable } from "rxjs/Observable";

//Decorador inyectable
@Injectable()
export class PeticionesServices {
  public url: String;

  //Inyectamos nuestro servicio por medio del contructor
  constructor(public _http: HttpClient) {
    this.url = "https://reqres.in";
  }

  //Obtenemos los datos de un usuario por medio de una peticion Ajax
  // "Observable" se esta indicando que retornara un Observable de cualquier tipo
  getUser(userId): Observable<any> {
    return this._http.get(this.url + "/api/users/" + userId);
  }

  //Metodo para agregar un usuario por medio de una api
  addUser(user): Observable<any> {
    //Peticion ajax usando post
    //Enviar datos en un JSON String
    let params = JSON.stringify(user);

    //indicamos cabeceras
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.post(this.url + "/api/users", params, {
      headers: headers
    });
  }
}
//Pagina para hacer peticiones Ajax https://reqres.in
