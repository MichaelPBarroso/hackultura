import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventoComponent } from '../evento.component';
import { EventoService } from '../evento.service';
declare var $:any;

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  evento: EventoComponent;
  service: EventoService;
  eventos : EventoComponent[];

  constructor(service: EventoService) { 
    this.service = service;
    this.service.listar().subscribe(eventos => {this.eventos = eventos}, erro => console.log(erro));
  }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
  
}
