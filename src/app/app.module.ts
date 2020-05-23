import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ListPersonajesComponent } from './pages/pages/personajes/list-personajes/list-personajes.component';
import { DetailPersonajeComponent } from './pages/pages/personajes/detail-personaje/detail-personaje.component';
import { ListCasasComponent } from './pages/pages/casas/list-casas/list-casas.component';
import { DetailCasaComponent } from './pages/pages/casas/detail-casa/detail-casa.component';
import { CronologiaComponent } from './pages/pages/cronologia/cronologia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListPersonajesComponent,
    DetailPersonajeComponent,
    ListCasasComponent,
    DetailCasaComponent,
    CronologiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
