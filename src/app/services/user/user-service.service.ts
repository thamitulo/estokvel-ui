import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

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

  constructor(private auth: AuthService) {
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
  }

  setUser(user: AppUser | null) {
    this._userSubject.next(user);
  }
}
