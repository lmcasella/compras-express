import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectAuthFeature = (state: AppState) => state.user;

export const selectAuthEmail = createSelector(
  selectAuthFeature,
  (state) => state.email
);

export const selectAuthPassword = createSelector(
  selectAuthFeature,
  (state) => state.password
);

export const selectAuthLoginError = createSelector(
  selectAuthFeature,
  (state) => state.loginError
);
