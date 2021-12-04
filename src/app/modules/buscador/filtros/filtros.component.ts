import { Component, OnInit } from '@angular/core';
import { ObservadorService } from 'src/app/service/observador.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  titulo: string;

  constructor(private observador: ObservadorService) { }

  ngOnInit(): void {
    this.observador.cambiarFiltro("");
  }

  cambiarBusqueda(event: any,filtro: string): void{
    switch(filtro){
      case 'titulo':{
        this.observador.cambiarFiltro(event.value);
        break;
      }
      case 'tituloOriginal':{
        this.observador.tituloOriginal = event.value;
        break;
      }
      case 'descripcion':{
        this.observador.descripcion = event.value;
        break;
      }
    }
  }

}
