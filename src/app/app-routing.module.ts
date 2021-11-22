import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaPeliculasComponent } from './modules/peliculas/lista-peliculas/lista-peliculas.component';
import { PeliculasModule } from './modules/peliculas/peliculas.module';
import { BuscadorModule } from './modules/buscador/buscador.module';

const routes: Routes = [
  { path: 'peliculas', loadChildren:()=>import('./modules/peliculas/peliculas.module')
	.then(m=>m.PeliculasModule)},
  { path: 'buscador', loadChildren:()=>import('./modules/buscador/buscador.module')
	.then(m=>m.BuscadorModule)},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
  
})
export class AppRoutingModule { }
