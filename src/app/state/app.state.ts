import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from '../models/auth.state';
import { authReducer } from './reducers/auth.reducers';

export interface AppState {
  user: AuthState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  user: authReducer,
};
