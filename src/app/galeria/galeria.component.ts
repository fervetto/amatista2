import { Component, OnInit, Input } from '@angular/core';
import { TipoJoya } from '../TipoJoya';

import { Articulo } from '../Articulo';
import { ARTICULOS } from '../mock-articulos';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  @Input() tipoJoya: TipoJoya =  {
    id: 0,
    name: "portada",
  }
 ;

  articulos=ARTICULOS;
  selectedArticulo:Articulo | undefined;
  utilidad=84;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(articulo: Articulo): void {
    this.selectedArticulo = articulo;
  }

}
