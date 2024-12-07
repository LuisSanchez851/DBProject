import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteInicioComponent } from './cliente-inicio/cliente-inicio.component';
import { ComprasDevolucionesComponent } from './compras-devoluciones/compras-devoluciones.component';
import { ProductosComponent } from './producto/producto.component';
import { AdminInicioComponent } from './admin-inicio/admin-inicio.component';

const routes: Routes = [

  { path : '', component: ClienteInicioComponent},
  { path : 'compras', component: ComprasDevolucionesComponent },
  { path : 'producto:id_producto', component: ProductosComponent },
  { path : 'admin', component : AdminInicioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
