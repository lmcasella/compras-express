import { Component, OnInit } from '@angular/core';
import { GridReadyEvent } from 'ag-grid-community';
import { Observable, switchMap } from 'rxjs';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-cart-grid',
  templateUrl: './cart-grid.component.html',
  styleUrls: ['./cart-grid.component.css'],
})
export class CartGridComponent implements OnInit {
  constructor(public homeService: HomeService) {}

  public rowData$!: Observable<any[]>;
  public rowData: any[] = [];

  getCarts() {
    return this.homeService.getCarts();
  }

  columnDefs = [
    { headerName: 'Imagen', field: 'imagen' },
    { headerName: 'Nombre', field: 'nombre' },
    { headerName: 'Descripcion', field: 'descripcion' },
    { headerName: 'Precio', field: 'precio' },
    { headerName: 'Cantidad', field: 'cantidad' },
  ];

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.getCarts().pipe(
      switchMap((data) => {
        return data.map((e: any) => {
          return e.payload.doc.data().product_carts.map((e: any) => {
            return {
              imagen: `<img src="${e.product_image}" width="100px" height="100px" />`,
              nombre: e.product_name,
              descripcion: e.product_description,
              precio: e.product_price,
              cantidad: e.product_quantity,
            };
          });
        });
      })
    );
  }

  ngOnInit() {}
}
