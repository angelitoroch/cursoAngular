import { Component, OnInit } from "@angular/core";
import { zapatilla } from "../models/zapatilla";

@Component({
  selector: "zapatillas",
  templateUrl: "./zapatillas.component.html"
})
export class zapatillasComponent implements OnInit{
  public titulo: string = "Componente de zapatillas";

  public zapatillas: Array<zapatilla>;

  constructor() {
    this.zapatillas = [
      new zapatilla('Reebok Classic', 80, 'Reebok', 'Blanco', true),
      new zapatilla('Nike Total 90', 50, 'Nike', 'Cafe', true), 
      new zapatilla('Vans Classic', 100, 'Vans', 'Rojos', true)
    ];
  }

  ngOnInit()
  {
    console.log(this.zapatillas)
  }
}
