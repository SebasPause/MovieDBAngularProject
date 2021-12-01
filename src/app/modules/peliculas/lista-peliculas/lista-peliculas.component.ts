import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnChanges, OnInit, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservadorService } from 'src/app/service/observador.service';
import { genero } from '../models/genero.model';
import { listaPeliculas } from '../models/listaPeliculas.model';
import { pelicula } from '../models/pelicula.model';
import { PeliculaServiceService } from '../service/pelicula-service.service';
import { PeliculaComponent } from './pelicula/pelicula.component';

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
  mostrarTodo: boolean = true;
  filtroObtenido: pelicula[]

  constructor(private peliculaService: PeliculaServiceService) { 
     
  }

  ngOnInit() {
    if(this.mostrarTodo == true){
      this.peliculaService.GetAll().subscribe(res => {
        this.peliculas = res.results;
      },
      error => {
        console.log(error);
      }
      );
    }else{
      

    }
    
  }

  mostrarDetalle(pelicula: any){
    this.idPelicula = pelicula.id;
    this.isVisible = true;
    this.isVisibleContainer = false;

    this.peliculaService.getMovieById(this.idPelicula).subscribe(res => {
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

  setPelicula(filtro: any){
    this.peliculas = filtro;   
    this.mostrarTodo = false;
    this.peliculas.forEach(element => {
      console.log("titulo: "+element.title);
      
    });
    
    
  }

}


