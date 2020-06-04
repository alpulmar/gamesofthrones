import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GotService {

  constructor(private httpClient: HttpClient) { }

  getListPersonajes() {
    return this.httpClient.get(environment.url + 'characters');
  }

  getDetailPersonaje(name) {
    return this.httpClient.get(environment.url + 'characters/'+name);
  }

  getCasas() {
    return this.httpClient.get(environment.url + 'houses');
  }

  getDetailCasa(name) {
    return this.httpClient.get(environment.url + 'houses'+name);
  }

  /*getCronologia(name) {
    return this.httpClient.get(environment.url1 + 'pages/cronologia'+name);
  }*/

}
