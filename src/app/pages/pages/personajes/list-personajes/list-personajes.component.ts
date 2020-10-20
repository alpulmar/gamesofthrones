import { Component, OnInit } from '@angular/core';
import { GotService } from '../../../../shared/services/got.service';

@Component({
  selector: 'app-list-personajes',
  templateUrl: './list-personajes.component.html',
  styleUrls: ['./list-personajes.component.scss']
})
export class ListPersonajesComponent implements OnInit {

  ListPersonajes: Array<any>;
  searchPersonaje: string;
  
  constructor(private gotService: GotService) {}

  ngOnInit(): void {
    this.gotService.getListPersonajes().subscribe((res: any) => {
      console.log(res);
      this.ListPersonajes = res.splice(0, 15);
    });
  }

  searchListPersonajes() {
    this.ListPersonajes = [];

    this.gotService.getListPersonajes().subscribe((characters: any) => {
      this.ListPersonajes = characters.filter((item) => {
        let cadena = item.name.toLowerCase();

        if (cadena.indexOf(this.searchPersonaje.toLowerCase()) != -1) {
          return item;
        }
      });
    });
    this.ListPersonajes;
  }
}
