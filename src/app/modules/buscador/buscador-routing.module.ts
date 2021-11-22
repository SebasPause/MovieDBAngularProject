import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltrosComponent } from './filtros/filtros.component';

const routes: Routes = [
  { path: 'buscador', component: FiltrosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscadorRoutingModule { }
