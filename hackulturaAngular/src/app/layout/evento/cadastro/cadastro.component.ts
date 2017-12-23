import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { EventoComponent } from 'app/layout/evento/evento.component';
declare var $:any;
declare var Materialize:any;

@Component({
  moduleId: module.id,
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  listaTipoLocal : any [] = [{id: '1', tipo:'Público'}, {id: '2', tipo:'Privado'}];

  service: EventoService;
  evento: EventoComponent = new EventoComponent();
  mensagem: any;

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
      format: 'dd/mm/yyyy',
      formatSubmit: "yyyy-mm-dd",
      closeOnSelect: false // Close upon selecting a date,
    });

    $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker
    });

    $(document).ready(function() {
      $('select').material_select();

      $('.modal').modal();
    });
  }

  cadastrar(event){
    Materialize.toast('Efetuando cadastro...', 3000, 'rounded') 

    event.preventDefault();

    let year_inicio: string = $('#dataInicioEvento').pickadate('picker').get('highlight', 'yyyy');
    let month_inicio: string = $('#dataInicioEvento').pickadate('picker').get('highlight', 'mm');
    let day_inicio: string = $('#dataInicioEvento').pickadate('picker').get('highlight', 'dd');
    
    this.evento.data_inicio = day_inicio + "/" + month_inicio + "/" + year_inicio;

    let year_fim: string = $('#dataFimEvento').pickadate('picker').get('highlight', 'yyyy');
    let month_fim: string = $('#dataFimEvento').pickadate('picker').get('highlight', 'mm');
    let day_fim: string = $('#dataFimEvento').pickadate('picker').get('highlight', 'dd');

    this.evento.data_fim = day_fim + "/" + month_fim + "/" + year_fim;

    this.evento.hora_inicio = $('#horaInicioEvento').val();
    this.evento.hora_fim = $('#horaFimEvento').val();

    console.log(event);
    console.log(this.evento);

    this.service
    .cadastrar(this.evento)
    .subscribe(res => {
        console.log(res);

        this.mensagem = res;

        if(this.mensagem.status == 200){
          Materialize.toast('Cadastro realizado com sucesso!!', 3000, 'rounded') 
        }

    }, erro => console.log(erro));

  }
}
