import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeparturesComponent } from './departures.component';

const routes: Routes = [{ path: '', component: DeparturesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeparturesRoutingModule { }
