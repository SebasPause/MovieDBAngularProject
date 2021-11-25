import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PeliculaServiceService } from '../service/pelicula-service.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
const peliculaServicio  = new PeliculaServiceService(http)
