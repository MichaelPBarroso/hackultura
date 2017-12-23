import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // public itensMenu: Array<any> = [];

  constructor() {

    /*this.itensMenu.push({
        titulo: 'assets/images/slider1.jpg',
        url: '/'
    }, {
        titulo: 'assets/images/slider2.jpg',
        url: '/'
    }, {
        titulo: 'assets/images/slider3.jpg',
        url: '/'
    });*/
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $(document).ready(function() {
        $('.modal').modal();
      });
  }
}
