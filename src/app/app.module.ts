import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PeliculasModule } from './modules/peliculas/peliculas.module';
import { BuscadorModule } from './modules/buscador/buscador.module';
import { PeliculaServiceService } from './modules/peliculas/service/pelicula-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ListaPeliculasComponent } from './modules/peliculas/lista-peliculas/lista-peliculas.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PeliculasModule,
    BuscadorModule
  ],
  providers: [
    PeliculaServiceService,
    HttpClient,
    ListaPeliculasComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
