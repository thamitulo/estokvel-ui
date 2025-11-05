import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Stokvel, StokvelType} from "../../models/stokvel";

@Injectable({
  providedIn: 'root'
})
export class StokvelService {

  private baseUrl = '/api/stokvels';

  constructor(private http: HttpClient) { }

  getStokvelTypes(): Observable<any[]> {
    return this.http.get<any[]>('/stokvel/types');
  }

  getSavingsTerms(): Observable<any[]> {
    return this.http.get<any[]>('/stokvel/savingsTerms');
  }

  createStokvel(data: any): Observable<any> {
    return this.http.post<any>('/stokvel/create', data);
  }

  getUserStokvels(username: string){
    //return this.http.get<any>('/api/stokvels');
    return this.getStokvels();
  }

  getStokvels(): Observable<Stokvel[]> {
   // return this.http.get<Stokvel[]>(this.baseUrl);
    const stokvels: Stokvel[] = [
      {
        id: 1,
        name: 'Mabogo Dinku Investment Club',
        description: 'Long-term investment stokvel focusing on stock market and property investments',
        stokvelType: StokvelType.INVESTMENT,
        status: 'active',
        startDate: '2024-01-01',
        active: true,
        memberCount: 12,
        contributionPerMember: 5000,
        totalContributions: 45000,
        collectedAmount: 45000,
        targetAmount: 60000,
        monthlyContribution: 5000,
        nextPayoutDate: new Date('2024-12-15'),
        myNextPayout: new Date('2024-12-15'),
        progress: 75,
        contributionAmount: 500
      },
      {
        id: 2,
        name: 'Family Education Fund',
        description: 'Saving for children education and family development projects',
        stokvelType: StokvelType.FAMILY,
        status: 'active',
        startDate: '2023-06-01',
        active: true,
        memberCount: 8,
        contributionPerMember: 2500,
        totalContributions: 35000,
        collectedAmount: 35000,
        targetAmount: 50000,
        monthlyContribution: 2500,
        nextPayoutDate: new Date('2024-11-30'),
        progress: 70,
        contributionAmount: 500
      },
      {
        id: 3,
        name: 'Property Investment Group',
        description: 'Joint property investment for rental income and capital growth',
        stokvelType: StokvelType.PROPERTY,
        status: 'active',
        startDate: '2022-09-15',
        active: true,
        memberCount: 15,
        contributionPerMember: 10000,
        totalContributions: 250000,
        collectedAmount: 250000,
        targetAmount: 500000,
        monthlyContribution: 10000,
        nextPayoutDate: new Date('2025-03-20'),
        progress: 50,
        contributionAmount: 500
      },
      {
        id: 4,
        name: 'Community Burial Society',
        description: 'Community support for funeral expenses and family assistance',
        stokvelType: StokvelType.BURIAL,
        status: 'active',
        startDate: '2024-01-15',
        active: true,
        memberCount: 20,
        contributionPerMember: 2000,
        totalContributions: 80000,
        collectedAmount: 80000,
        targetAmount: 100000,
        monthlyContribution: 2000,
        nextPayoutDate: new Date('2024-12-01'),
        myNextPayout: new Date('2024-12-01'),
        progress: 80,
        contributionAmount: 500

      }
    ];

    return of(stokvels);
  }

  joinStokvel(stokvelId: number, payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${stokvelId}/join`, payload);
  }
}
