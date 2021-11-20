import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { PeliculaComponent } from './listaPeliculas/pelicula/pelicula.component';


@NgModule({
  declarations: [
    ListaPeliculasComponent,
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
