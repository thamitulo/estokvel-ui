import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.model';
import * as AuthActions from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isLoggedIn: true,
  })),
  on(AuthActions.logout, state => ({
    ...state,
    user: null,
    token: null,
    isLoggedIn: false,
  })),
  on(AuthActions.restoreAuth, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isLoggedIn: !!user,
  }))
);
