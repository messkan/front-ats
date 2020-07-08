import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';



const appRoutes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent},
  { path : 'details/:id' , component: ProductDetailsComponent},

  { path: '**', redirectTo: ''}

];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes),RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
