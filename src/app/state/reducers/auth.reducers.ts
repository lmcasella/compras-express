import { createReducer, on } from '@ngrx/store';
import { loginFailure, loginSuccess } from '../actions/auth.actions';
import { AuthState } from '../../models/auth.state';

export const initialState: AuthState = {
  email: null,
  password: null,
};

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { LoginSuccessResponse }) => {
    return {
      ...state,
      email: LoginSuccessResponse.email,
      password: LoginSuccessResponse.password,
    };
  }),
  on(loginFailure, (state, { error }) => {
    return {
      ...state,
      loginError: error,
      email: null,
      password: null,
    };
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
