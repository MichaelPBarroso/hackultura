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
  tipoLocal : string;
  dataInicioEvento: string;
  endereco : string;
  dataFimEvento : string;
  capacidade : number;
  acessibilidade : boolean;

}
