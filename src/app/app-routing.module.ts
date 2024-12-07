import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteInicioComponent } from './cliente-inicio/cliente-inicio.component';
import { ComprasDevolucionesComponent } from './compras-devoluciones/compras-devoluciones.component';
import { AdminInicioComponent } from './admin-inicio/admin-inicio.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

const routes: Routes = [

  { path : '', component: ClienteInicioComponent},
  { path : 'compras', component: ComprasDevolucionesComponent },
  { path : 'admin', component : AdminInicioComponent},
  { path : 'principal', component : ClienteInicioComponent},
  { path : 'producto/:id_producto', component : DetalleProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
