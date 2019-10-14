import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Importamos el componente
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { videoJuegoComponent } from "./videoJuego/videoJuego.componente";
import { zapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from "./cursos/cursos.component";

//Es el decorador que permite configurar el modulo
@NgModule({
  //cargar componentes, pipes y directivas
  declarations: [
    AppComponent,
    videoJuegoComponent,
    zapatillasComponent,
    CursosComponent
  ],
  //Cargar modulos de externos/propios o creados por nosotros mismos
  imports: [BrowserModule, AppRoutingModule],
  //Cargar servicios
  providers: [],
  //Modulo que se va a cargar por default, el que inicia la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule {}
