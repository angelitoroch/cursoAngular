/*Aqui va ir el configuracion de rutas , las nuevas URL de las paginas*/

//Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes
import { HomeComponent } from "./home/home.component";
import { zapatillasComponent } from "./zapatillas/zapatillas.component";
import { videoJuegoComponent } from "./videoJuego/videoJuego.componente";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent} from "./contacto/contacto.component";

//Array de rutas
//Constante llamapana appRouters de la clase Routes
//Los elementos que contiene este array debe cumplir un formato de angular
const appRouters: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "zapatillas", component: zapatillasComponent },
  { path: "videojuego", component: videoJuegoComponent },
  { path: "cursos", component: CursosComponent },
  { path: "cursos/:nombre/:followers", component: CursosComponent },
  { path: "externo", component: ExternoComponent},
  { path: "contacto", component: ContactoComponent},
  //Definir siempre si no da error, esto significa que si se ingresa una ruta desconocida nos mande al hombe
  { path: "**", component: HomeComponent }
];

//Exportar el modulo del routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);
