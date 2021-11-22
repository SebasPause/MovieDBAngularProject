import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';



@NgModule({
  declarations: [
    ListaPeliculasComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ],
  exports:  [
    ListaPeliculasComponent
  ]
})
export class PeliculasModule { }
