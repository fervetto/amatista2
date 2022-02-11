import { Component, OnInit } from '@angular/core';

import { TipoJoya } from '../TipoJoya';
import { TIPO_JOYAS } from '../mock-tipoJoyas';

@Component({
  selector: 'app-tipo-de-joya',
  templateUrl: './tipo-de-joya.component.html',
  styleUrls: ['./tipo-de-joya.component.scss']
})
export class TipoDeJoyaComponent implements OnInit {

  tipo_joyas=TIPO_JOYAS;
  selectedTipoJoya: TipoJoya =  {
    id: 0,
    name: "portada",
  }
 ;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(tipoJoya: TipoJoya): void {
    this.selectedTipoJoya = tipoJoya;
    console.log(this.selectedTipoJoya)
    console.log(tipoJoya)
  }

  refresh(): void { window.location.reload(); }

}
