import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProductState } from '../../models/product.state';

export const selectProducts = (state: AppState) => state.products;

export const selectProductsList = createSelector(
  selectProducts,
  (state: ProductState) => state.products
);

export const selectProductsLoading = createSelector(
  selectProducts,
  (state: ProductState) => state.loading
);
