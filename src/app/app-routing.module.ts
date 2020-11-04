import { ContainerComponent } from './shared/container/container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
      },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'stock', loadChildren: () => import('./pages/stock/stock.module').then(m => m.StockModule) },
      { path: 'entry', loadChildren: () => import('./pages/entry/entry.module').then(m => m.EntryModule) },
      { path: 'departures', loadChildren: () => import('./pages/departures/departures.module').then(m => m.DeparturesModule) },
      { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
