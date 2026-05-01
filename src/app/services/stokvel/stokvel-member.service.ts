import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface StokvelMember {
  id: number;
  userAuth0Id: string;
  totalContributed: number;
  nextPayoutAmount: number;
  nextPayOutDate: Date;
  joinedAt: Date;
  stokvel: { id: number; name: string };
}

@Injectable({
  providedIn: 'root'
})
export class StokvelMemberService {

  private apiUrl = `${environment.apiUrl}stokvel-members`;

  constructor(private http: HttpClient) {}

  /**
   * Fetch user's stokvel memberships from backend.
   * This replaces the hardcoded mock data with real API call.
   */
  getUserMemberships(auth0Id: String): Observable<StokvelMember[]> {
    return this.http.get<StokvelMember[]>(`${this.apiUrl}/user/memberships`);
  }

  /**
   * Get total contributions for authenticated user
   */
  getUserTotalContributions(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/user/contributions`);
  }

  /**
   * Get next payout info for authenticated user
   */
  getUserNextPayout(): Observable<{ amount: number; daysUntilPayout: number }> {
    return this.http.get<{ amount: number; daysUntilPayout: number }>(
      `${this.apiUrl}/user/next-payout`
    );
  }

  /**
   * Claim pending invitations for the authenticated user (called after login)
   */
  claimInvitations(): Observable<{ claimed: number }> {
    return this.http.post<{ claimed: number }>(`${this.apiUrl}/claim-invitations`, {});
  }
}
