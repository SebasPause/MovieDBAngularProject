import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnChanges, OnInit, Output, Input, EventEmitter } from '@angular/core';
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

  peliculas: pelicula[] = new Array<pelicula>();
  idPelicula: any;
  isVisible = false;
  isVisibleContainer = true;
  detalle: pelicula;
  mostrarTodo: boolean = true;

  constructor(private peliculaService: PeliculaServiceService) { 
     
  }

  ngOnInit() {
    if(this.mostrarTodo == true){
      this.peliculaService.GetAll().subscribe(res => {
        res.results.forEach(element => {
          this.peliculas.push(element);
        });
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
    console.log(this.peliculas.length);
    
    this.peliculas.forEach(e => {
      delete this.peliculas[this.peliculas.indexOf(e)];
    });
    filtro.forEach(element => {
      element.trackId = Math.random() * (10000000000-0);
      this.peliculas.push(element);
    });  
    this.mostrarTodo = false;
  }

  public trackItem(index: number,item: pelicula){
    return item.trackId
  }

}


