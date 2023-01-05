import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from '../../home/services/home.service';
import { mergeMap, catchError } from 'rxjs';
import * as ProductsActions from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private homeService: HomeService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() =>
        this.homeService.getProducts().pipe(
          mergeMap((data: any) => {
            const products: any = [];
            data.forEach((element: any) => {
              products.push({
                id: element.payload.doc.id,
                ...(element.payload.doc.data() as {}),
              });
            });
            return [ProductsActions.loadProductsSuccess({ products })];
          }),
          catchError((error) => {
            return [ProductsActions.loadProductsFailure({ error })];
          })
        )
      )
    )
  );
}
