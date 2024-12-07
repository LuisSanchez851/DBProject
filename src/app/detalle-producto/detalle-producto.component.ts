import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'] // Cambia `styleUrl` por `styleUrls`
})

export class DetalleProductoComponent {
  
  principal() {
    this.router.navigate(['principal']);
  }

  producto: any = {}; // Aquí guardaremos los detalles del producto
  cantidad: number = 1; // Cantidad seleccionada por el usuario

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    const productoId = this.route.snapshot.paramMap.get('id_producto');
    console.log('ID del producto desde la URL:', productoId); // Depuración
    if (productoId) {
      this.obtenerProducto(parseInt(productoId)); // Convierte a número
    }
  }
  // Obtener los detalles del producto desde la API
  obtenerProducto(id_producto: number): void {
    this.http.get(`http://localhost:3000/api/productos/${id_producto}`).subscribe(
      (data) => {
        this.producto = data;
      },
      (error) => {
        console.error('Error al obtener el producto:', error);
      }
    );
  }

  // Función para manejar la compra del producto
  comprar(): void {
    alert(`Compraste ${this.cantidad} unidad(es) de ${this.producto.nombre_producto}`);
    // Aquí podrías agregar lógica para procesar la compra (como enviar la cantidad a un servicio de pago)
  }
}
