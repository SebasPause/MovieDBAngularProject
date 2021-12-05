import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ListaPeliculasComponent } from '../modules/peliculas/lista-peliculas/lista-peliculas.component';
import { listaPeliculas } from '../modules/peliculas/models/listaPeliculas.model';
import { pelicula } from '../modules/peliculas/models/pelicula.model';
import { PeliculaServiceService } from '../modules/peliculas/service/pelicula-service.service';

@Injectable({
  providedIn: 'root'
})
export class ObservadorService {

  open: EventEmitter<any> = new EventEmitter();
  subsVar: Subscription;
  titulo: Observable<string>;
  tituloOriginal: Observable<string>;
  descripcion: Observable<string>;
  lista: Array<pelicula> = new Array();
  filtro: Array<pelicula> = new Array();
  existe: boolean  = false;
  populares: boolean = false;

  constructor(private servicioPeliculas: PeliculaServiceService) { 
   
  }

  cambiarFiltro(titulo: string,opcion: string){
    switch(opcion){
      case 'titulo':
        this.filtrar(titulo,opcion)
        break;
      case 'tituloOriginal':
        this.filtrar(titulo,opcion)
        break;

      case 'descripcion':
        this.filtrar(titulo,opcion)
        break;
      
      case 'populares':
        this.filtrar(titulo,opcion)
        break;
    }
    
  }

  filtrarBusqueda(){
    this.open.emit(this.filtro);
  }

  filtrar(cadena: string,opcion){
    if(cadena === " " && opcion != 'populares'){
      
      this.servicioPeliculas.GetAll().subscribe(async res => {
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
      switch(opcion){

        case 'titulo':
          this.servicioPeliculas.GetAll().subscribe(async res => {
            await Promise.all(res.results.map(async (element) =>{
              this.lista.push(element);
            }));
          },
          error => {
            console.log(error);
          }
          );
          
          this.lista.forEach(element => {
            if( element.title.search(cadena) >= 0 ) {
              
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
    
          this.filtrarBusqueda();
          break;

        case 'tituloOriginal':
          this.servicioPeliculas.GetAll().subscribe(async res => {
            await Promise.all(res.results.map(async (element) =>{
              this.lista.push(element);
            }));
          },
          error => {
            console.log(error);
          }
          );
          
          this.lista.forEach(element => {
            if( element.original_title.search(cadena) >= 0 ) {
              
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
    
          this.filtrarBusqueda();
          break;

        case 'descripcion':
          this.servicioPeliculas.GetAll().subscribe(async res => {
            await Promise.all(res.results.map(async (element) =>{
              this.lista.push(element);
            }));
          },
          error => {
            console.log(error);
          }
          );
          
          this.lista.forEach(element => {
            if( element.overview.search(cadena) >= 0 ) {
              
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
    
          this.filtrarBusqueda();
          break;

        case 'populares':
          this.servicioPeliculas.getTopRated().subscribe(async res => {
            await Promise.all(res.results.map(async element => {
              await this.lista.push(element);
            }));
          },
          error => {
            console.log(error);
          }
          );

          this.lista.forEach(element => {
            this.filtro.push(element);
          });

          this.filtrarBusqueda();
          break;
      }
      
    }
  }

}
