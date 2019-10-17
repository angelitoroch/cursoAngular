import { Component, OnInit } from "@angular/core";
import { zapatilla } from "../models/zapatilla";

@Component({
  selector: "zapatillas",
  templateUrl: "./zapatillas.component.html"
})
export class zapatillasComponent implements OnInit {
  public titulo: string = "Componente de zapatillas";
  //Se crea un arreglo de la clase zapatillas
  public zapatillas: Array<zapatilla>;
  //Se declara un arreglo de la clase String
  public marcas: String[];
  public color: String;

  constructor() {
    //Se inicializa el arreglo que tendra las marcas de las zapatillas
    this.marcas = new Array();
    this.color = "yellow";
    this.zapatillas = [
      new zapatilla("Reebok Classic", 80, "Reebok", "Blanco", true),
      new zapatilla("Nike Total 90", 50, "Nike", "Cafe", true),
      new zapatilla("Vans Classic", 100, "Vans", "Rojos", false)
    ];
  }

  ngOnInit() {
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas() {
    //Ciclo forEach
    this.zapatillas.forEach((zapatilla, index) => {
      //Eliminar mascas duplicadas
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
        //console.log(index)
      }
    });
    console.log(this.marcas);
  }
}
