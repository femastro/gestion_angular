import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeparturesRoutingModule } from './departures-routing.module';
import { DeparturesComponent } from './departures.component';


@NgModule({
  declarations: [DeparturesComponent],
  imports: [
    CommonModule,
    DeparturesRoutingModule
  ]
})
export class DeparturesModule { }
