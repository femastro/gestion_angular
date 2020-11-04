import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material-module/material.module';


@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StockModule { }
