import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';
import { KycService } from '../services/kyc/kyc.service';

@Injectable({ providedIn: 'root' })
export class KycGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private kyc: KycService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated$.pipe(
      take(1),
      switchMap(isAuth => {
        if (!isAuth) {
          this.router.navigate(['/home']);
          return [false];
        }
        return this.kyc.loadStatus().pipe(
          map(status => {
            if (status.kycStatus === 'VERIFIED') return true;
            this.router.navigate(['/kyc']);
            return false;
          })
        );
      })
    );
  }
}

