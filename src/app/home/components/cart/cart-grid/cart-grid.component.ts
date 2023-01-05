import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-grid',
  templateUrl: './cart-grid.component.html',
  styleUrls: ['./cart-grid.component.css'],
})
export class CartGridComponent {
  constructor() {}

  columnDefs = [
    { headerName: 'Imagen', field: 'imagen' },
    { headerName: 'Nombre', field: 'nombre' },
    { headerName: 'Descripcion', field: 'descripcion' },
    { headerName: 'Precio', field: 'precio' },
  ];

  rowData = [
    { imagen: 'Toyota', nombre: 'Celica', descripcion: '', precio: 35000 },
    { imagen: 'Honda', nombre: 'Civic', descripcion: '', precio: 20000 },
    { imagen: 'Ford', nombre: 'Focus', descripcion: '', precio: 80000 },
    { imagen: 'Ford', nombre: 'Focus', descripcion: '', precio: 80000 },
  ];
}
