import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
  selectAuthState,
  auth => auth.user
);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  auth => auth.isLoggedIn
);
