import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  AdminLoginRequest, AdminLoginResponse,
  PlatformStats, AdminStokvel, AdminUser, PagedResponse
} from '../../models/admin';

const ADMIN_TOKEN_KEY = 'admin_jwt';
const ADMIN_USER_KEY  = 'admin_user';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly api = `${environment.apiUrl}admin`;

  private _loggedIn$ = new BehaviorSubject<boolean>(this.hasToken());
  readonly loggedIn$ = this._loggedIn$.asObservable();

  constructor(private http: HttpClient) {}

  // ── Auth ──────────────────────────────────────────────────────────────────

  login(req: AdminLoginRequest): Observable<AdminLoginResponse> {
    return this.http.post<AdminLoginResponse>(`${this.api}/auth/login`, req).pipe(
      tap(res => {
        localStorage.setItem(ADMIN_TOKEN_KEY, res.token);
        localStorage.setItem(ADMIN_USER_KEY, JSON.stringify({
          username: res.username,
          displayName: res.displayName,
          email: res.email
        }));
        this._loggedIn$.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    localStorage.removeItem(ADMIN_USER_KEY);
    this._loggedIn$.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(ADMIN_TOKEN_KEY);
  }

  hasToken(): boolean {
    const t = this.getToken();
    if (!t) return false;
    try {
      const payload = JSON.parse(atob(t.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch { return false; }
  }

  get currentUser(): { username: string; displayName: string; email: string } | null {
    const raw = localStorage.getItem(ADMIN_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  // ── Dashboard ─────────────────────────────────────────────────────────────

  getStats(): Observable<PlatformStats> {
    return this.http.get<PlatformStats>(`${this.api}/stats`, { headers: this.authHeaders() });
  }

  // ── Stokvels ──────────────────────────────────────────────────────────────

  getStokvels(search = '', page = 0, size = 20): Observable<PagedResponse<AdminStokvel>> {
    const params = new HttpParams()
      .set('search', search).set('page', page).set('size', size);
    return this.http.get<PagedResponse<AdminStokvel>>(
      `${this.api}/stokvels`, { params, headers: this.authHeaders() });
  }

  getStokvel(id: number): Observable<AdminStokvel> {
    return this.http.get<AdminStokvel>(
      `${this.api}/stokvels/${id}`, { headers: this.authHeaders() });
  }

  // ── Users ─────────────────────────────────────────────────────────────────

  getUsers(search = '', page = 0, size = 20): Observable<PagedResponse<AdminUser>> {
    const params = new HttpParams()
      .set('search', search).set('page', page).set('size', size);
    return this.http.get<PagedResponse<AdminUser>>(
      `${this.api}/users`, { params, headers: this.authHeaders() });
  }

  getUser(auth0Id: string): Observable<AdminUser> {
    return this.http.get<AdminUser>(
      `${this.api}/users/${encodeURIComponent(auth0Id)}`, { headers: this.authHeaders() });
  }

  mirrorUser(auth0Id: string): Observable<AdminUser> {
    return this.http.get<AdminUser>(
      `${this.api}/users/${encodeURIComponent(auth0Id)}/mirror`,
      { headers: this.authHeaders() });
  }

  // ────────────────────────────────────────────────────────────────────────────

  private authHeaders(): Record<string, string> {
    return { Authorization: `Bearer ${this.getToken()}` };
  }
}

