import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//Importamos el modulo de formularios
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders } from "./app.routing";

//Importamos el componente
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { videoJuegoComponent } from "./videoJuego/videoJuego.componente";
import { zapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";

//Es el decorador que permite configurar el modulo
@NgModule({
  //cargar componentes, pipes y directivas
  declarations: [
    AppComponent,
    videoJuegoComponent,
    zapatillasComponent,
    CursosComponent,
    HomeComponent
  ],
  //Cargar modulos de externos/propios o creados por nosotros mismos
  imports: [BrowserModule, AppRoutingModule, FormsModule, routing],
  //Cargar servicios
  providers: [appRoutingProviders],
  //Modulo que se va a cargar por default, el que inicia la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule {}
