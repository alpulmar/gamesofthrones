import { Component, OnInit } from '@angular/core';
import { GotService } from '../../../../shared/services/got.service';

@Component({
  selector: 'app-list-casas',
  templateUrl: './list-casas.component.html',
  styleUrls: ['./list-casas.component.scss']
})

export class ListCasasComponent implements OnInit {

  ListCasas: Array<any>;
  constructor(private gotService: GotService) {}

  ngOnInit(): void {
    this.gotService.getCasas().subscribe((res: any) => {
      console.log(res);
      this.ListCasas = res.splice(0, 15);
    });
  }
}