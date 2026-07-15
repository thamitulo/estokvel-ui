import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export type KycStatus = 'NOT_STARTED' | 'PENDING' | 'VERIFIED' | 'REJECTED';

export interface KycStatusResponse {
  kycStatus: KycStatus;
  submittedAt?: string;
  reviewedAt?: string;
  rejectionReason?: string;
}

@Injectable({ providedIn: 'root' })
export class KycService {
  private readonly _status$ = new BehaviorSubject<KycStatusResponse | null>(null);
  readonly status$: Observable<KycStatusResponse | null> = this._status$.asObservable();

  constructor(private http: HttpClient) {}

  /** Load KYC status from the backend and cache in the subject. */
  loadStatus(): Observable<KycStatusResponse> {
    return this.http.get<KycStatusResponse>(`${environment.apiUrl}kyc/status`).pipe(
      tap(res => this._status$.next(res)),
      catchError(() => {
        const fallback: KycStatusResponse = { kycStatus: 'NOT_STARTED' };
        this._status$.next(fallback);
        return of(fallback);
      })
    );
  }

  /** Returns true synchronously if the cached status is VERIFIED. */
  get isVerified(): boolean {
    return this._status$.value?.kycStatus === 'VERIFIED';
  }

  /** Observable that emits true only when KYC is VERIFIED. */
  isVerified$(): Observable<boolean> {
    return this.status$.pipe(map(s => s?.kycStatus === 'VERIFIED'));
  }

  /** Submit KYC documents/data for review. */
  submitKyc(payload: {
    idNumber: string;
    idType: 'RSA_ID' | 'PASSPORT';
    dateOfBirth: string;
    phoneNumber: string;
  }): Observable<KycStatusResponse> {
    return this.http.post<KycStatusResponse>(`${environment.apiUrl}kyc/submit`, payload).pipe(
      tap(res => this._status$.next(res))
    );
  }
}

