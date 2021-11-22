import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscadorRoutingModule } from './buscador-routing.module';
import { FiltrosComponent } from './filtros/filtros.component';


@NgModule({
  declarations: [
    FiltrosComponent
  ],
  imports: [
    CommonModule,
    BuscadorRoutingModule
  ],
  exports: [
    FiltrosComponent
  ]
})
export class BuscadorModule { }
