import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteInicioComponent } from './cliente-inicio/cliente-inicio.component';
import { ComprasDevolucionesComponent } from './compras-devoluciones/compras-devoluciones.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { AgentePanelComponent } from './agente-panel/agente-panel.component';

const routes: Routes = [

  { path : '', component: ClienteInicioComponent},
  { path : 'compras', component: ComprasDevolucionesComponent },
  { path : 'comentarios', component: ComentariosComponent },
  { path : 'agente-panel', component: AgentePanelComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
