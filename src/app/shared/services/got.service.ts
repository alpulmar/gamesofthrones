import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GotService {

  constructor(private httpClient: HttpClient) { }

  getListPersonajes() {
    return this.httpClient.get(environment.url + 'pages/personajes/list-personajes');
  }

  getDetailPersonaje(name) {
    return this.httpClient.get(environment.url + 'pages/personajes/detail-personaje'+name);
  }

  getCasas() {
    return this.httpClient.get(environment.url + 'pages/casas/list-casas');
  }

  getDetailCasa(name) {
    return this.httpClient.get(environment.url + 'pages/casas/detail-casa'+name);
  }

  getCronologia(name) {
    return this.httpClient.get(environment.url + 'pages/cronologia'+name);
  }

}
