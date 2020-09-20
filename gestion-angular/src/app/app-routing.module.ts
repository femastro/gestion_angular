import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './shared/components/container/container.component';

const routes: Routes = [

  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full',
  },
  
  { 
    path : '',
    component : ContainerComponent,
    children: [

      { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
      { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }, 
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
      { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
      
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
