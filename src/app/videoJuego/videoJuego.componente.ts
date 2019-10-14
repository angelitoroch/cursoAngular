import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: "videojuego",
  templateUrl: "./videojuego.component.html"
})
export class videoJuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;

  constructor() {
    this.titulo = "de videoJuegos";
    this.listado = "listado de los juegos populares";
    //console.log("Se ha cargado el componente");
  }

  //Metodo que se iniciar despues del constructor
  ngOnInit() {
    //console.log("Se ejecuto el OnInit de la iterfaz de videojuego");
  }

  //Metodo que se ejecuta si se detecta algun cambio
  ngDoCheck() {
    //console.log("Se ejecuto el DoCheck");
  }

  cambiarTitulo() {
    this.titulo = "cambiado";
  }

  //Metodo que se ejecuta antes de destruir
  ngOnDestroy() {
    //console.log("OnDestroy ejecutado");
  }
}
