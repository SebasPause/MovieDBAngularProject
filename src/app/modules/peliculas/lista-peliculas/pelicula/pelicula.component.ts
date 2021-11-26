import { Component, Input, OnInit } from '@angular/core';
import { pelicula } from '../../models/pelicula.model';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input()
  pelicula: pelicula;

  constructor() { }

  ngOnInit(): void {
  }

}
