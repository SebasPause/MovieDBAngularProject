import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { genero } from '../models/genero.model';
import { listaPeliculas } from '../models/listaPeliculas.model';
import { pelicula } from '../models/pelicula.model';
import { PeliculaServiceService } from '../service/pelicula-service.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  peliculas: pelicula[];
  idPelicula: any;
  isVisible = false;
  isVisibleContainer = true;
  detalle: pelicula;
  constructor(private peliculaService: PeliculaServiceService) { 
     
  }

  ngOnInit() {
    this.peliculaService.GetAll().subscribe(res => {
      console.log(res);
      this.peliculas = res.results;
    },
    error => {
      console.log(error);
    }
    );
  }

  mostrarDetalle(pelicula: any){
    this.idPelicula = pelicula.id;
    this.isVisible = true;
    this.isVisibleContainer = false;

    this.peliculaService.getMovieById(this.idPelicula).subscribe(res => {
      console.log("id:"+res.id);
      this.detalle = res;
    },
    error => {
      console.log(error);
    }
    );
  }
    

  cambiarIndex(){
    this.isVisible = false;
    this.isVisibleContainer = true;
  }

}


