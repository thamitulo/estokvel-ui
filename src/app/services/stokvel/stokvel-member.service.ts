import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {AuthService} from "@auth0/auth0-angular";

@Injectable({
  providedIn: 'root'
})
export class StokvelMemberService {

  constructor(private authService: AuthService) {}

  getUserMemberships(auth0Id: String): Observable<any[]> {
    return of([
      {
        id: 1,
        userAuth0Id: auth0Id,
        totalContributed: 4500,
        nextPayoutAmount: 18000,
        nextPayOutDate: new Date('2024-02-01'),
        joinedAt: new Date('2025-11-19'),
        stokvel: { id: 1, name: 'Mabogo Dinku Stokvel' }
      },
      {
        id: 2,
        userAuth0Id: auth0Id,
        totalContributed: 6000,
        nextPayoutAmount: 24000,
        joinedAt: new Date('2025-10-18'),
        nextPayOutDate: new Date('2026-02-01'),
        stokvel: { id: 2, name: 'Family Fund' }
      }
    ]);
  }
}
