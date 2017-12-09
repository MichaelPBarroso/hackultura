import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { EventoComponent } from 'app/layout/evento/evento.component';
declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  service: EventoService;
  evento: EventoComponent = new EventoComponent();
  mensagem: string;

  constructor(service: EventoService) {
    this.service = service;
  }

  ngOnInit() {
  }

  lat: number = -23.5349253;
  lng: number = -46.6394125;

  ngAfterViewInit(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });

    $(document).ready(function() {
      $('select').material_select();

      $('.modal').modal();
    });
  }

  cadastrar(event){
    
    event.preventDefault();
            
    if(this.evento.acessibilidade == null){
      this.evento.acessibilidade = false;
    }

    console.log(this.evento);

    this.service
    .cadastrar(this.evento)
    .subscribe(res => {
        this.mensagem = res;
    }, erro => console.log(erro));

/*    
            this.service
                .cadastra(this.foto)
                .subscribe(res => {
                    this.mensagem = res.mensagem;
                    this.foto = new FotoComponent();
                    if(!res.inclusao) this.router.navigate([""]);
                }, erro => console.log(erro));*/
  }
}
