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

  public GetAll(): Observable<listaPeliculas> {
    return this.http.get<listaPeliculas>('http://api.themoviedb.org/3/discover/movie?api_key=7d1e614246e33b9b52f42a293ca206f7');
  }

  

}



