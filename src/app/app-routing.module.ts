import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { ComboComponent } from './combo/combo.component';


const routes: Routes = [
  {path: 'prueba', component: PruebaComponent},
  {path: 'combo', component: ComboComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
