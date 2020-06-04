import { Component, OnInit } from '@angular/core';
import { GotService } from '../../../../shared/services/got.service';

@Component({
  selector: 'app-list-personajes',
  templateUrl: './list-personajes.component.html',
  styleUrls: ['./list-personajes.component.scss']
})
export class ListPersonajesComponent implements OnInit {

  ListPersonajes: Array<any>;
  constructor(private gotService: GotService) {}

  ngOnInit(): void {
    this.gotService.getListPersonajes().subscribe((res: any) => {
      console.log(res);
      this.ListPersonajes = res.splice(0, 15);
    });
  }
}
