import { Component, Input, OnInit, Output } from '@angular/core';
import { pelicula } from '../../models/pelicula.model';
import { PeliculaServiceService } from '../../service/pelicula-service.service';
import { ListaPeliculasComponent } from '../lista-peliculas.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() detalle: pelicula;

  constructor(private  peliculaService: PeliculaServiceService,private listaPeliculas: ListaPeliculasComponent) { }

  ngOnInit() {
     
  }

  ocultar(){
    this.listaPeliculas.cambiarIndex();
  }

}
