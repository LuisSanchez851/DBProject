import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrl: './admin-inicio.component.css'
})
export class AdminInicioComponent {

  activeForm: string | null = null; // Para rastrear el formulario visible

  // Método para cambiar el formulario activo
  showForm(formName: string): void {
    this.activeForm = this.activeForm === formName ? null : formName;
  }

}
