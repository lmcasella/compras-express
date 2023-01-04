import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from '../models/auth.state';
import { authReducer } from './reducers/auth.reducers';
import { ProductState } from '../models/product.state';
import { productsReducer } from './reducers/products.reducers';

export interface AppState {
  user: AuthState;
  products: ProductState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  user: authReducer,
  products: productsReducer,
};
