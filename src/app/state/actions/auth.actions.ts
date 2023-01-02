import { createAction, props } from '@ngrx/store';
import { Login } from 'src/app/models/auth.interface';

export const loginRequest = createAction(
  '[Auth Page] Login Request',
  props<{
    email: string;
    password: string;
  }>()
);

export const loginSuccess = createAction(
  '[Auth Page] User Login Success',
  props<{ LoginSuccessResponse: Login }>()
);

export const loginFailure = createAction(
  '[Auth Page] User Login Failure',
  props<{ error: string }>()
);
