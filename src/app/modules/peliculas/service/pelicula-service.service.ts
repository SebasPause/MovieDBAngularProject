import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { listaPeliculas } from '../models/listaPeliculas.model';
import { Observable } from 'rxjs';
import { genero } from '../models/genero.model';
import { listaGeneros } from '../models/listaGeneros.model';
import { pelicula } from '../models/pelicula.model';


@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {

  constructor(private http: HttpClient) { 
    
  }

  public GetAll(): Observable<listaPeliculas> {
    return this.http.get<listaPeliculas>('http://api.themoviedb.org/3/discover/movie?api_key=7d1e614246e33b9b52f42a293ca206f7');
  }

  public GetGenres(): Observable<listaGeneros>{
    return this.http.get<listaGeneros>('https://api.themoviedb.org/3/genre/movie/list?api_key=7d1e614246e33b9b52f42a293ca206f7');
  }

  public getMovieById(id: any): Observable<pelicula>{
    return this.http.get<pelicula>('https://api.themoviedb.org/3/movie/'+id+'?api_key=7d1e614246e33b9b52f42a293ca206f7');
  }

  public getTopRated(): Observable<listaPeliculas> {
    return this.http.get<listaPeliculas>('https://api.themoviedb.org/3/movie/top_rated?api_key=7d1e614246e33b9b52f42a293ca206f7');
  }

}



