import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FiltrosComponent } from '../buscador/filtros/filtros.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { DetalleComponent } from './lista-peliculas/detalle/detalle.component';
import { PeliculaComponent } from './lista-peliculas/pelicula/pelicula.component';

const routes: Routes = [
  { path: 'listapeliculas',  component: ListaPeliculasComponent},
  { path: 'pelicula', component: PeliculaComponent},
  { path: 'detalle', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})
export  class PeliculasRoutingModule {}

