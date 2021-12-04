import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { forEachChild } from 'typescript';
import { genero } from '../../models/genero.model';
import { listaGeneros } from '../../models/listaGeneros.model';
import { pelicula } from '../../models/pelicula.model';
import { PeliculaServiceService } from '../../service/pelicula-service.service';
import { ListaPeliculasComponent } from '../lista-peliculas.component';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: pelicula;
  nombreGenero: string;
  listaGeneros: genero[];


  constructor(private peliculaService: PeliculaServiceService) { 

  }

  ngOnInit() {
    this.peliculaService.GetGenres().subscribe(res => {
      this.listaGeneros = res.genres;
    },
    error => {
      console.log(error);
    }
    );
  }

  comprobarGenero(genero: any): string {
    this.nombreGenero = ""
    genero?.forEach(element => {
      this.nombreGenero += this.getNameById(element)?.name + " ";
    });
    return this.nombreGenero;
  }
 

  getNameById(id?){
    return this.listaGeneros?.find(x => x.id === id);
  }

}
