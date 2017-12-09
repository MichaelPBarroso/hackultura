import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  constructor(nome:string, tipoLocal : string,
    dataInicioEvento: Date, endereco : string, dataFimEvento : string,
    capacidade : number, acessibilidade : boolean){
    this.nome = nome;
    this.tipoLocal = tipoLocal;
    this.dataInicioEvento = dataInicioEvento;
    this.endereco = endereco;
    this.dataFimEvento = dataFimEvento;
    this.capacidade = capacidade;
    this.acessibilidade = acessibilidade; 
  }

  ngOnInit() {
  }

  nome : string;
  tipoLocal : string;
  dataInicioEvento: Date;
  endereco : string;
  dataFimEvento : string;
  capacidade : number;
  acessibilidade : boolean;

}
