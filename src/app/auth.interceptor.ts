import {catchError, mergeMap, Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {environment} from "./environments/environment";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "@auth0/auth0-angular";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request URL (before token):', req.url);
    console.log('Authorization Header (before token):', req.headers.get('Authorization'));

    // Only attach token to backend API requests
    if (!req.url.includes(environment.apiUrl)) {
      console.log('Skipping interceptor for non-API URL');
      return next.handle(req);
    }

    return this.auth.getAccessTokenSilently().pipe(
      tap(token => {
        console.log('Auth token retrieved:', token ? 'YES' : 'NO');
        console.log('Token length:', token?.length);
      }),
      mergeMap(token => {
        const authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Making authenticated request to:', req.url);
        return next.handle(authReq);
      }),
      catchError(error => {
        console.error('Error in auth interceptor:', error);
        return next.handle(req); // Continue without token
      })
    );
  }
}
