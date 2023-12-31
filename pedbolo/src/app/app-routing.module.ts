import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { CardapioComponent } from './layout/cardapio/cardapio.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cardapio', component: CardapioComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
