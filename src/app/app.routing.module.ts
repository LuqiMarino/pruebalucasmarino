import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Clase1Component } from './Ejercicio/clase1/clase1.component';

const routes: Routes = [
  { path: '', component: Clase1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
