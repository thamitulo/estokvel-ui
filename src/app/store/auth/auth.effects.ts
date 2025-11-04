import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  /**
   * Persist user and token to localStorage whenever loginSuccess or logout occurs
   * This effect does NOT dispatch any new actions
   */
  persistAuth$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess, AuthActions.logout),
        tap(action => {
          if (action.type === '[Auth] Login Success') {
            localStorage.setItem('user', JSON.stringify(action.user));
            localStorage.setItem('token', action.token);
          } else {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
          }
        })
      ),
    { dispatch: false }
  );

  /**
   * Restore auth state from localStorage when the app starts
   * This effect dispatches the restoreAuth action
   */
  restoreAuth$ = createEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    return of(
      AuthActions.restoreAuth({
        user: user ? JSON.parse(user) : null,
        token: token || null,
      })
    );
  });
}
