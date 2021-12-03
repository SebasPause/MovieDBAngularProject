import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ListaPeliculasComponent } from '../modules/peliculas/lista-peliculas/lista-peliculas.component';
import { pelicula } from '../modules/peliculas/models/pelicula.model';
import { PeliculaServiceService } from '../modules/peliculas/service/pelicula-service.service';

@Injectable({
  providedIn: 'root'
})
export class ObservadorService {

  open: EventEmitter<any> = new EventEmitter();
  subsVar: Subscription;
  titulo: string;
  tituloOriginal: Observable<string>;
  descripcion: Observable<string>;
  lista: pelicula[] = [];
  filtro: pelicula[] = [];
  existe: boolean  = false;

  constructor(private servicioPeliculas: PeliculaServiceService) { 
   
  }

  cambiarFiltro(titulo: string){
    if(titulo===""){

      this.servicioPeliculas.GetAll().subscribe(res => {
        res.results.forEach(element => {
          this.filtro.push(element);
        });
      },
      error => {
        console.log(error);
      }
      );
      this.filtrarBusqueda();
    }
    else{
      this.servicioPeliculas.GetAll().subscribe(res => {
        res.results.forEach(element => {
          this.lista.push(element);
        });
      },
      error => {
        console.log(error);
      }
      );

      this.lista?.forEach(element => {
        
        if( element.title.search(titulo) >= 0 ) {
  
          if(this.filtro.length == 0){
            this.filtro.push(element);
          }else{
            this.filtro.forEach(x => {
              if(x.id == element.id){
                this.existe = true;
              }
            });
            if(this.existe == false){
              this.filtro.push(element);
              this.existe = false;
            }
            
          }
        }
  
      });
      this.filtro.forEach(element => {
        console.log("filtro: "+element.title);
      });
  
      this.filtrarBusqueda();
    }
  }

  filtrarBusqueda(){
    this.open.emit(this.filtro);
  }

}
