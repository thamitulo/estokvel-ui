import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserSubscriptionDto, UpgradeRequest, TierCode } from '../../models/subscription';

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private readonly api = `${environment.apiUrl}subscriptions`;

  private _subscription$ = new BehaviorSubject<UserSubscriptionDto | null>(null);
  readonly subscription$ = this._subscription$.asObservable();

  constructor(private http: HttpClient) {}

  /** Load my subscription (authenticated). */
  load(): Observable<UserSubscriptionDto> {
    return this.http.get<UserSubscriptionDto>(`${this.api}/me`).pipe(
      tap(sub => this._subscription$.next(sub))
    );
  }

  /** Public tier catalogue — no auth required. */
  getTierCatalogue(): Observable<UserSubscriptionDto> {
    return this.http.get<UserSubscriptionDto>(`${this.api}/tiers`);
  }

  /** Change subscription tier. */
  changeTier(tier: TierCode): Observable<UserSubscriptionDto> {
    const body: UpgradeRequest = { tier };
    return this.http.post<UserSubscriptionDto>(`${this.api}/me/tier`, body).pipe(
      tap(sub => this._subscription$.next(sub))
    );
  }

  /** Cancel paid subscription (revert to FREE). */
  cancel(): Observable<UserSubscriptionDto> {
    return this.http.delete<UserSubscriptionDto>(`${this.api}/me`).pipe(
      tap(sub => this._subscription$.next(sub))
    );
  }

  get snapshot(): UserSubscriptionDto | null {
    return this._subscription$.value;
  }
}

