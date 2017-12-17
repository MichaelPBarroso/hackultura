import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MapsComponent } from './maps.component';
import { AgmCoreModule } from '@agm/core';

import { MapsRoutingModule } from './maps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MapsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDg8n1eiXTv1A2azzwTQT2TNPqhvqoTfPg'
    })
  ],
  declarations: [
    MapsComponent
  ]
})
export class MapsModule { }
