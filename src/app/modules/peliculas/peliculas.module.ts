import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { PeliculaComponent } from './lista-peliculas/pelicula/pelicula.component';
import { PeliculaServiceService } from './service/pelicula-service.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { DetalleComponent } from './lista-peliculas/pelicula/detalle/detalle.component';




@NgModule({
  declarations: [
    ListaPeliculasComponent,
    PeliculaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    HttpClientModule
  ],
  exports:  [
    ListaPeliculasComponent,
    PeliculaComponent,
    DetalleComponent
  ],
  providers: [
    PeliculaServiceService,
    HttpClient
  ]
})
export class PeliculasModule { }
