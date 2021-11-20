import { Component } from '@angular/core';
import { ListaPeliculasComponent } from './modules/peliculas/lista-peliculas/lista-peliculas.component';
import { FiltrosComponent } from './modules/buscador/filtros/filtros.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieDBAngularProject';
}
