import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from, switchMap } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import {environment} from "./environments/environment";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  private readonly excludedUrls = [
    '/assets/',
    '.json',
    'auth0.com'
    // other URLs that don't need authentication
  ];

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isExcludedUrl(req.url) || !this.requiresAuth(req.url)) {
      return next.handle(req);
    }

    return from(this.auth.getAccessTokenSilently()).pipe(
      switchMap(token => {
        if (token) {
          const authReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });

          if (!environment.production) {
            console.log(`Authenticated request to: ${req.url}`);
          }

          return next.handle(authReq);
        } else {
          if (!environment.production) {
            console.warn(`No auth token for: ${req.url}`);
          }
          return next.handle(req);
        }
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
