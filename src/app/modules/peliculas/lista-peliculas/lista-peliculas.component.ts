import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
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

}


