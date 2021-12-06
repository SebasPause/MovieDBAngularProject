import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ObservadorService } from 'src/app/service/observador.service';
import { PeliculaServiceService } from '../../peliculas/service/pelicula-service.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  titulo: string;
  @ViewChild('tituloPrincipal') tituloPrincipal:ElementRef;
  @ViewChild('tituloOriginal') tituloOriginal:ElementRef;
  @ViewChild('descripcion') descripcion:ElementRef;
  @ViewChild('boton') boton:ElementRef;

  constructor(private observador: ObservadorService,private servicioPeliculas: PeliculaServiceService) { }

  ngOnInit(): void {
    this.observador.cambiarFiltro("",'');
  }

  cambiarBusqueda(event: any,filtro: string): void{
    switch(filtro){
      case 'titulo':{
        this.tituloOriginal.nativeElement.value  = ""
        this.descripcion.nativeElement.value  = ""

        this.observador.titulo = event.value;
        this.observador.cambiarFiltro(event.value,'titulo');
        break;
      }
      case 'tituloOriginal':{
        this.tituloPrincipal.nativeElement.value  = ""
        this.descripcion.nativeElement.value  = ""

        this.observador.tituloOriginal = event.value;
        this.observador.cambiarFiltro(event.value,'tituloOriginal');
        break;
      }
      case 'descripcion':{
        this.tituloPrincipal.nativeElement.value  = ""
        this.tituloOriginal.nativeElement.value  = ""

        this.observador.descripcion = event.value;
        this.observador.cambiarFiltro(event.value,'descripcion');
        break;
      }
    }
  }

  filtrar10(){
    this.tituloPrincipal.nativeElement.value  = ""
    this.tituloOriginal.nativeElement.value  = ""
    this.descripcion.nativeElement.value  = ""

    if(this.boton.nativeElement.innerText == 'Filtrar 10 más populares'){
      this.boton.nativeElement.innerText = "Pulsa otra vez";
    }else{
      this.boton.nativeElement.innerText = 'Filtrar 10 más populares';
    }
    this.observador.cambiarFiltro("",'populares');
  }

}
