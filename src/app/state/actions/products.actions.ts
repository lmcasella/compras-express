import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../../models/product.interface';

export const loadProducts = createAction('[Products List] Load Products');

export const loadProductsSuccess = createAction(
  '[Products List] Load Products Success',
  props<{ products: ProductModel[] }>()
);

export const loadProductsFailure = createAction(
  '[Products List] Load Products Failure',
  props<{ error: any }>()
);
