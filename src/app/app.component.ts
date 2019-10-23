/* Modulos que se importan para poder utilizar*/
import { Component } from "@angular/core";
/* Se esta accediendo a los valores del archivo de configuracion por medio de un objeto llamado Configuracion */
import { Configuracion } from "./models/configuracion";

/*Decorador*/
@Component({
  /*El selector indicamos en que equiqueta o directiva se va andar cargando*/
  selector: "app-root",
  /*Indica cual es la vista de este componente */
  templateUrl: "./app.component.html",
  /*Estilos Css del componente*/
  styleUrls: ["./app.component.css"]
})

//Hacemos un export para poder utilizar esta clase en otros archivos
export class AppComponent {
  public title = "Master de JavaScript y Angular";
  public mostrarVideojuegos: boolean;
  public opcion: String;
  public descripcion: String;
  public config;

  constructor() {
    //Se asignan los valores del objeto de Configuracion
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion.fondo;

    this.mostrarVideojuegos = true;
    this.opcion = "Ocultar";
  }

  ocultarVideojuegos(value) {
    this.mostrarVideojuegos = value;

    if ((value = "true")) {
      this.opcion = "Mostrar";
    } else {
      this.opcion = "Ocultar";
    }
  }
}
