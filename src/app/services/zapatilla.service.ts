//Inyectar nuestro componente en otras clases o componentes
import { Injectable } from "@angular/core";
import { zapatilla } from "../models/zapatilla";

//Decorar la clase
@Injectable()
export class ZapatillaService {
  public zapatillas: Array<zapatilla>;

  constructor() {
    this.zapatillas = [
      new zapatilla("Reebok Classic", 80, "Reebok", "Blanco", true),
      new zapatilla("Nike Total 90", 50, "Nike", "Cafe", true),
      new zapatilla("Vans Classic", 100, "Vans", "Rojos", false)
    ];
  }

  getTexto() {
    return "Hola mundo desde un servicio";
  }

  getZapatillas(): Array<zapatilla> {
    return this.zapatillas;
  }
}
