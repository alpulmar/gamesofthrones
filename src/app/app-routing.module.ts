import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ListPersonajesComponent } from './pages/pages/personajes/list-personajes/list-personajes.component';
import { DetailPersonajeComponent } from './pages/pages/personajes/detail-personaje/detail-personaje.component';
import { ListCasasComponent } from './pages/pages/casas/list-casas/list-casas.component';
import { DetailCasaComponent } from './pages/pages/casas/detail-casa/detail-casa.component';
import { CronologiaComponent } from './pages/pages/cronologia/cronologia.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'list-personajes',
    component: ListPersonajesComponent,
  },
  {
    path: 'detail-personaje',
    component: DetailPersonajeComponent,
  },
  {
    path: 'list-casas',
    component: ListCasasComponent,
  },
  {
    path: 'detail-casa',
    component: DetailCasaComponent,
  },
  {
    path: 'cronologia',
    component: CronologiaComponent,
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
