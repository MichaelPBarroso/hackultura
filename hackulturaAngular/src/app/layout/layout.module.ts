import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CadastroComponent } from './evento/cadastro/cadastro.component';

import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDg8n1eiXTv1A2azzwTQT2TNPqhvqoTfPg'
    })
  ],
  declarations: [
    LayoutComponent,
    NotFoundComponent,
    CadastroComponent
  ]
})
export class LayoutModule { }
