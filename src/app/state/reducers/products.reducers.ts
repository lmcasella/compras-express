import { createReducer, on } from '@ngrx/store';
import { ProductState } from 'src/app/models/product.state';
import { ProductModel } from '../../models/product.interface';
import { loadProducts, loadProductsSuccess } from '../actions/products.actions';

export const initialState: ProductState = { loading: false, products: [] };

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state) => {
    return { ...state, loading: true };
  }),
  on(loadProductsSuccess, (state, { products }) => {
    return { ...state, loading: false, products };
  })
);
