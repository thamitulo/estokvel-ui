import { createAction, props } from '@ngrx/store';
import { User } from './auth.model';

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User; token: string }>()
);

export const logout = createAction('[Auth] Logout');

export const restoreAuth = createAction(
  '[Auth] Restore Auth',
  props<{ user: User | null; token: string | null }>()
);
