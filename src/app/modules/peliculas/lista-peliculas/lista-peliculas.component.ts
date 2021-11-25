import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { listaPeliculas } from '../models/listaPeliculas.model';
import { PeliculaServiceService } from '../service/pelicula-service.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {


  constructor(private peliculaService:  PeliculaServiceService) { }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.peliculaService.GetAll().subscribe(res => {
      console.log(res);
    },
    error => {
      console.error(error);
    });
  }

}


