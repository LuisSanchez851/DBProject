import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { ClienteInicioComponent } from './cliente-inicio/cliente-inicio.component';
import { ComprasDevolucionesComponent } from './compras-devoluciones/compras-devoluciones.component';
import { ProductosComponent } from './producto/producto.component';
import { AdminInicioComponent } from './admin-inicio/admin-inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteInicioComponent,
    ComprasDevolucionesComponent,
    ProductosComponent,
    AdminInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

