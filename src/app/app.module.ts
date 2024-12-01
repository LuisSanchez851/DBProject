import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteInicioComponent } from './cliente-inicio/cliente-inicio.component';
import { ComprasDevolucionesComponent } from './compras-devoluciones/compras-devoluciones.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { AgentePanelComponent } from './agente-panel/agente-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteInicioComponent,
    ComprasDevolucionesComponent,
    ComentariosComponent,
    AgentePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

