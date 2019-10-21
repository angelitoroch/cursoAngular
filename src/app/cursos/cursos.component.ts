import { Component, OnInit } from "@angular/core";
//Importar componentes para poder trabajar el paso de parametros por URL
import { Router, ActivatedRoute, Params} from "@angular/router"


@Component({
  selector: "cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"]
})
export class CursosComponent implements OnInit {
  public nombre: String;
  public followers: number;

  //Los servicios los tenemos que inyectar en nuestro contructor
  constructor(
    private _route: ActivatedRoute,
    private _router:Router
  ) {}  

  //Metodo que se ejecuta despues del contructor
  ngOnInit() {
    //Linea para recoger los elementos que se pasan por el URL
    //Metodo suscribe
    this._route.params.subscribe((params: Params) =>{
      this.nombre = params.nombre;
      this.followers = +params.followers;
      //this.nombre = params['nombre'];
      //console.log(this.nombre);

      //console.log(typeof +params.followers);
      if(this.nombre == 'ninguno')
      {
        this._router.navigate(['/home'])
      }
    });
  }

  //Metodo que nos manda a un url en especifico
  //La propiedad se llama navigate
  redirigir(){
    this._router.navigate(['/zapatillas'])
  }
}
