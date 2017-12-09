import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CadastroComponent } from './evento/cadastro/cadastro.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    NotFoundComponent,
    CadastroComponent,
    MapsComponent
  ]
})
export class LayoutModule { }
