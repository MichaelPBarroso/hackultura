import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CadastroComponent } from './evento/cadastro/cadastro.component';
import { ListaComponent } from './evento/lista/lista.component';

const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          { path: 'evento/cadastro', component: CadastroComponent},
          { path: 'evento', component: ListaComponent},
          { path: 'not-found', component: NotFoundComponent }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LayoutRoutingModule { }
