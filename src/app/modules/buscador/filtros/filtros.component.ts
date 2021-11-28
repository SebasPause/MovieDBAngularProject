import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  titulo: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  cambiarBusqueda(event: any,filtro: string): void{
    
  }

}
