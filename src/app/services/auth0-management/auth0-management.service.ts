import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Auth0UserUpdatePayload {
  phoneNumber?: string;
  givenName?: string;
  familyName?: string;
  name?: string;
}

export interface Auth0UserProfile {
  sub: string;
  name?: string;
  email?: string;
  picture?: string;
  phoneNumber?: string;
  user_metadata?: Record<string, any>;
}

/**
 * Calls your backend's Auth0 Management API proxy endpoints.
 * The backend holds the Management API client credentials and
 * exposes safe, scoped endpoints so the frontend never touches
 * the Management API directly.
 */
@Injectable({ providedIn: 'root' })
export class Auth0ManagementService {
  private readonly base = `${environment.apiUrl}users/me`;

  constructor(private http: HttpClient) {}

  /** Fetch the current user's full Auth0 profile (incl. phone_number). */
  getProfile(): Observable<Auth0UserProfile> {
    return this.http.get<Auth0UserProfile>(this.base);
  }

  /** Update phone number via backend proxy to Auth0 Management API. */
  updatePhoneNumber(phoneNumber: string): Observable<Auth0UserProfile> {
    return this.http.patch<Auth0UserProfile>(`${this.base}/phone`, { phoneNumber });
  }

  /** Update display name via backend proxy. */
  updateName(name: string): Observable<Auth0UserProfile> {
    return this.http.patch<Auth0UserProfile>(`${this.base}/name`, { name });
  }

  /** Generic profile update (only allowed fields forwarded by backend). */
  updateProfile(payload: Auth0UserUpdatePayload): Observable<Auth0UserProfile> {
    return this.http.patch<Auth0UserProfile>(this.base, payload);
  }
}

