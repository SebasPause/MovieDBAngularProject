import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPeliculasComponent } from '../modules/peliculas/lista-peliculas/lista-peliculas.component';
import { pelicula } from '../modules/peliculas/models/pelicula.model';
import { PeliculaServiceService } from '../modules/peliculas/service/pelicula-service.service';

@Injectable({
  providedIn: 'root'
})
export class ObservadorService {

  titulo: Observable<string>;
  tituloOriginal: Observable<string>;
  descripcion: Observable<string>;
  lista: pelicula[];
  filtro: pelicula[] = [];
  existe: boolean  = false;

  constructor(private servicioPeliculas: PeliculaServiceService,private listaPeliculas:ListaPeliculasComponent) { 
    
  }

  cambiarFiltro(titulo: string){
    
    this.servicioPeliculas.GetAll().subscribe(res => {
      this.lista = res.results;
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

    this.listaPeliculas.setPelicula(this.filtro);
    
  }


}
