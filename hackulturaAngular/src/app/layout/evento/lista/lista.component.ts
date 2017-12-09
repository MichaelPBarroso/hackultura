import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventoComponent } from '../evento.component';
declare var $:any;

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  eventos : EventoComponent[] = new Array<EventoComponent>();

  constructor() { 
    let a : EventoComponent = new EventoComponent("1", "1", new Date(), "1", "1", 1, true);

    this.eventos.push(a);
    this.eventos.push(a);
    this.eventos.push(a);
    this.eventos.push(a);
    this.eventos.push(a);
    this.eventos.push(a);
    this.eventos.push(a);
  }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
  
}
