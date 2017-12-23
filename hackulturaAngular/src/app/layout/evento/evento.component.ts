import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  constructor(){}

  ngOnInit() {
  }

  nome : string;
  data_inicio: any;
  endereco_completo : string;
  data_fim : any;
  hora_inicio : any;
  hora_fim : any;
  publico_estimado : string;
  objetivo : string;

  /*
  tipoLocal : any;
  capacidade : any;
  acessibilidade : boolean;
  */
}
