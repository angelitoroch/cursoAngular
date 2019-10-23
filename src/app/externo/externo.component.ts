import { Component, OnInit } from "@angular/core";
//Cargamos el servicio "peticiones.service.ts"
import { PeticionesServices } from "../services/peticiones.service";

@Component({
  selector: "app-externo",
  templateUrl: "./externo.component.html",
  styleUrls: ["./externo.component.css"],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;
  public usuario_guardado;

  //Inyectamos el servicio en el contructor
  constructor(private _peticionesService: PeticionesServices) {
    this.userId = 1;
    this.new_user = {
      name: "",
      job: ""
    };
  }

  //Accedemos al servicio obtenermos los datos de los usuarios y utilizamos
  //el metodo suscribe que es un observable
  ngOnInit() {
    this.cargarUsuario();
    this.fecha = new Date(2019, 5, 20);
  }

  cargarUsuario() {
    this._peticionesService.getUser(this.userId).subscribe(
      //El metodo suscribe tiene dos funciones de callback, uno que recoje el resultado y otro
      //que recoje el error
      result => {
        this.user = result.data;
        console.log(this.user);
        //console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form) {
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        console.log(response);
        this.usuario_guardado= response;
        form.reset();
      },
      error => {
        console.log(<any>console.error());
      }
    );
  }
}
