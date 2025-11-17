import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Stokvel, StokvelResponse, StokvelType} from "../../models/stokvel";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StokvelService {

  private baseUrl = `${environment.apiUrl}` + 'stokvels';

  constructor(private http: HttpClient) { }

  getStokvelTypes(): Observable<any[]> {
    return this.http.get<any[]>('types');
  }

  getSavingsTerms(): Observable<any[]> {
    return this.http.get<any[]>('savingsTerms');
  }

  createStokvel(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  getUserStokvels(username: string): Observable<StokvelResponse[]> {
    return this.http.get<any>(`${this.baseUrl}` + '/my-stokvels');
  }

  getStokvels(): Observable<StokvelResponse[]> {
   // return this.http.get<Stokvel[]>(this.baseUrl);
    const stokvels: StokvelResponse[] = [
      {
        id: 1,
        uuid: 'uuid-111',
        name: 'Mabogo Dinku Investment Club',
        description: 'Long-term investment stokvel focusing on stock market and property investments',

        type: 'investment',
        typeName: 'Investment Group',

        privacy: 'public',
        payoutCycle: 'monthly',
        rotationOrder: 'sequential',

        monthlyContribution: 5000,
        targetAmount: 60000,

        maxMembers: 20,
        totalMembers: 12,
        adminCount: 2,
        memberCount: 10,

        status: 'active',

        createdBy: 'admin1@example.com',
        createdAt: '2024-01-01T09:00:00',
        updatedAt: '2024-01-05T10:00:00',

        rules: [
          {
            id: 1,
            title: 'Monthly Contribution',
            description: 'Each member must contribute monthly',
            isDefault: true,
            enabled: true
          }
        ],

        members: [
          {
            id: 10,
            userAuth0Id: 'auth0|abc',
            userEmail: 'admin1@example.com',
            userName: 'Admin One',
            displayName: 'Admin One',
            role: 'ADMIN',
            joinedAt: '2024-01-01T09:00:00',
            joinedDate: '2024-01-01',
            status: 'ACTIVE',
            membershipStatus: 'ACTIVE'
          }
        ],

        adminMembers: [
          {
            id: 10,
            userAuth0Id: 'auth0|abc',
            userEmail: 'admin1@example.com',
            userName: 'Admin One',
            displayName: 'Admin One',
            role: 'ADMIN',
            joinedAt: '2024-01-01T09:00:00',
            joinedDate: '2024-01-01',
            status: 'ACTIVE',
            membershipStatus: 'ACTIVE'
          }
        ],

        regularMembers: []
      },

      {
        id: 2,
        uuid: 'uuid-222',
        name: 'Family Education Fund',
        description: 'Saving for children education and family development projects',

        type: 'family',
        typeName: 'Family Stokvel',

        privacy: 'private',
        payoutCycle: 'monthly',
        rotationOrder: 'sequential',

        monthlyContribution: 2500,
        targetAmount: 50000,

        maxMembers: 15,
        totalMembers: 8,
        adminCount: 1,
        memberCount: 7,

        status: 'active',

        createdBy: 'admin2@example.com',
        createdAt: '2023-06-01T10:00:00',
        updatedAt: '2024-01-01T08:00:00',

        rules: [],

        members: [],

        adminMembers: [],

        regularMembers: []
      },

      {
        id: 3,
        uuid: 'uuid-333',
        name: 'Property Investment Group',
        description: 'Joint property investment for rental income and capital growth',

        type: 'property',
        typeName: 'Property Stokvel',

        privacy: 'public',
        payoutCycle: 'quarterly',
        rotationOrder: 'sequential',

        monthlyContribution: 10000,
        targetAmount: 500000,

        maxMembers: 25,
        totalMembers: 15,
        adminCount: 3,
        memberCount: 12,

        status: 'active',

        createdBy: 'admin3@example.com',
        createdAt: '2022-09-15T08:30:00',
        updatedAt: '2024-02-01T12:00:00',

        rules: [],

        members: [],

        adminMembers: [],

        regularMembers: []
      },

      {
        id: 4,
        uuid: 'uuid-444',
        name: 'Community Burial Society',
        description: 'Community support for funeral expenses and family assistance',

        type: 'burial',
        typeName: 'Burial Stokvel',

        privacy: 'public',
        payoutCycle: 'monthly',
        rotationOrder: 'sequential',

        monthlyContribution: 2000,
        targetAmount: 100000,

        maxMembers: 30,
        totalMembers: 20,
        adminCount: 2,
        memberCount: 18,

        status: 'active',

        createdBy: 'admin4@example.com',
        createdAt: '2024-01-15T07:45:00',
        updatedAt: '2024-02-15T09:10:00',

        rules: [],

        members: [],

        adminMembers: [],

        regularMembers: []
      }
    ];

    return of(stokvels);
  }

  joinStokvel(stokvelId: number, payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${stokvelId}/join`, payload);
  }
}
