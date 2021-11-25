import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { listaPeliculas } from '../models/listaPeliculas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {

  constructor(private http: HttpClient) { 

  }

  public GetAll():Observable<listaPeliculas> {
    return this.http.get<listaPeliculas>('https://developers.themoviedb.org/3/movies/get-movie-lists');
  }

}



