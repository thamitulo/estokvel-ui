import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, filter, take, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface AppUser {
  id?: string;
  name?: string;
  email?: string;
  picture?: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private _userSubject = new BehaviorSubject<AppUser | null>(null);
  user$: Observable<AppUser | null> = this._userSubject.asObservable();

  userName$: Observable<string | null> = this.user$.pipe(
    map(user => user?.name || user?.email || null)
  );

  constructor(private auth: AuthService, private http: HttpClient) {
    // Subscribe to Auth0 user$ and update local BehaviorSubject
    this.auth.user$.pipe(
      tap(auth0User => {
        if (auth0User) {
          const appUser: AppUser = {
            id: auth0User.sub,
            name: auth0User.name,
            email: auth0User.email,
            picture: auth0User.picture
          };
          this._userSubject.next(appUser);
        } else {
          this._userSubject.next(null);
        }
      })
    ).subscribe();

    // Claim any pending email-based invitations once authenticated
    this.auth.isAuthenticated$.pipe(
      filter(isAuth => isAuth),
      take(1),
      switchMap(() =>
        this.http.post(`${environment.apiUrl}stokvel-members/claim-invitations`, {})
          .pipe(catchError(() => of(null)))
      )
    ).subscribe(result => {
      if (result && (result as any).claimed > 0) {
        console.info('Claimed', (result as any).claimed, 'pending stokvel invitation(s)');
      }
    });
  }

  setUser(user: AppUser | null) {
    this._userSubject.next(user);
  }
}
