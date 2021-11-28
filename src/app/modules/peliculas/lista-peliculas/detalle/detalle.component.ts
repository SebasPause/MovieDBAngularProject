import { Component, Input, OnInit } from '@angular/core';
import { PeliculaServiceService } from '../../service/pelicula-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() idPelicula: any;

  constructor(private  peliculaService: PeliculaServiceService) { }

  ngOnInit() {
    
  }

  

}
