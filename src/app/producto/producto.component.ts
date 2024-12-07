import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductosComponent {
  producto: any = {}; // Aquí guardaremos los detalles del producto
  cantidad: number = 1; // Cantidad seleccionada por el usuario

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener el id del producto de la URL
    const productoId = this.route.snapshot.paramMap.get('id');
    if (productoId) {
      this.obtenerProducto(parseInt(productoId));
    }
  }

  // Obtener los detalles del producto desde la API
  obtenerProducto(id: number): void {
    this.http.get(`http://localhost:3000/productos/${id}`).subscribe(
      (data) => {
        console.log('Detalles del producto:', data);
        this.producto = data;
      },
      (error) => {
        console.error('Error al obtener el producto:', error);
      }
    );
  }

  // Función para manejar la compra del producto
  comprar(): void {
    alert(`Compraste ${this.cantidad} unidad(es) de ${this.producto.nombre}`);
    // Aquí podrías agregar lógica para procesar la compra (como enviar la cantidad a un servicio de pago)
  }
}
