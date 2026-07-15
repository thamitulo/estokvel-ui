import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, from, switchMap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from './environments/environment';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  private readonly excludedUrls = [
    '/assets/',
    '.json',
    'auth0.com'
  ];

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isExcludedUrl(req.url) || !this.requiresAuth(req.url)) {
      return next.handle(req);
    }

    // ── Auth3: No fallback – if no token, immediately reject the request ──
    return from(this.auth.getAccessTokenSilently()).pipe(
      catchError(tokenErr => {
        if (!environment.production) {
          console.warn('Could not acquire access token:', tokenErr);
        }
        // Propagate as 401 so calling code can react appropriately
        return throwError(() => new HttpErrorResponse({ status: 401, statusText: 'Unauthorized – no access token' }));
      }),
      switchMap(token => {
        const authReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
        if (!environment.production) {
          console.log(`Authenticated request to: ${req.url}`);
        }
        return next.handle(authReq);
      })
    );
  }

  private requiresAuth(url: string): boolean {
    return url.includes(environment.apiUrl) || url.startsWith('/api/');
  }

  private isExcludedUrl(url: string): boolean {
    return this.excludedUrls.some(excluded => url.includes(excluded));
  }
}
