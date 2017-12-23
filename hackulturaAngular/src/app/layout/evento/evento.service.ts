import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoComponent } from './evento.component';

@Injectable()
export class EventoService {

  http: Http;
  headers: Headers;
  url : string = "http://hackultura.herokuapp.com/eventos";
  
  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers;
    this.headers.append('Content-Type', 'application/json');
  }

  listar(): Observable<EventoComponent[]>{
    return this.http
    .get(this.url)
    .map(res => res.json());
  }

  cadastrar(evento: EventoComponent): Observable<string>{
    console.log(JSON.stringify(evento));
    return this.http.post(this.url, JSON.stringify(evento), {headers: this.headers}).map(res => res.json());;
  }
}