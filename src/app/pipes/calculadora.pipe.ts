//Importar los componentes o modulos de los pipes
import { Pipe, PipeTransform } from "@angular/core";

//Un decorador no es más que una declaración de cómo será un componente y las diversas piezas de las que consiste.
@Pipe({
  //Metadatos del decorador
  name: "calculadora"
})
//PipeTransform es la interfaz que permite crear la pipe
export class CalculadoraPipe implements PipeTransform {
  // dato| calculadora: otroDato (param1|param2)
  //Metodo que se tiene que declarar de manera obligatoria
  transform(value: any, value_two: any) {
    //creamos una variable operaciones y vamos a usar javaScrip para crear lo que vamos a regresar
    let operaciones = `     
      Suma:${value + value_two} -
      Resta:${value - value_two} -
      Multiplicacion:${value * value_two} -
      Division:${value / value_two} - `;
    return operaciones;
  }
}
