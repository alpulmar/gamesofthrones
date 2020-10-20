import { Component, OnInit } from '@angular/core';
import { GotService } from '../../../../shared/services/got.service';

@Component({
  selector: 'app-list-casas',
  templateUrl: './list-casas.component.html',
  styleUrls: ['./list-casas.component.scss']
})

export class ListCasasComponent implements OnInit {

  Casas: Array<any>;
  searchCasa: string;

  constructor(private gotService: GotService) {}

  ngOnInit(): void {
    this.gotService.getCasas().subscribe((res: any) => {
      console.log(res);
      this.Casas = res.splice(0, 15);
    });
  }

  searchCasas() {
    this.Casas = [];

    this.gotService.getCasas().subscribe((houses: any) => {
      this.Casas = houses.filter((item) => {
        let cadena = item.name.toLowerCase();

        if (cadena.indexOf(this.searchCasa.toLowerCase()) != -1) {
          return item;
        }
      });
    });
    this.Casas;
  }
}