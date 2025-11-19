import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from "../../environments/environment";
import {map, shareReplay, tap} from "rxjs/operators";
import {PaginatedResponse, StokvelResponse} from "../../models";
import {CacheService} from "../cache/cache.service";

@Injectable({
  providedIn: 'root'
})
export class StokvelService {

  private baseUrl = `${environment.apiUrl}` + 'stokvels';
  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient,
              private cacheService: CacheService) {
  }

  getStokvelTypes(): Observable<any[]> {
    return this.http.get<any[]>('types');
  }

  getSavingsTerms(): Observable<any[]> {
    return this.http.get<any[]>('savingsTerms');
  }

  createStokvel(stokvelData: any): Observable<any> {
    return this.http.post('/api/stokvels', stokvelData).pipe(
      tap(() => {
        this.clearAllStokvelCache();
      })
    );
  }

  getUserStokvels(auth0Id: string): Observable<StokvelResponse[]> {
    const cacheKey = `user-stokvels-${auth0Id}`;

    const cached = this.cacheService.get<StokvelResponse[]>(cacheKey);
    if (cached) {
      return cached;
    }

    const request$ = this.http.get<PaginatedResponse<StokvelResponse>>(`${this.baseUrl}/my-stokvels`).pipe(
      map(response => response.content)
    );

    this.cacheService.set(cacheKey, request$, 2 * 60 * 1000); // 2 minutes TTL
    return request$;
  }

  // Get with forced refresh (bypass cache)
  getUserStokvelsForceRefresh(auth0Id: string): Observable<StokvelResponse[]> {
    const cacheKey = `user-stokvels-${auth0Id}`;
    this.cacheService.delete(cacheKey);
    return this.getUserStokvels(auth0Id);
  }

  // Get full paginated response with caching
  getUserStokvelsPaginated(auth0Id: string, page: number = 0, size: number = 10): Observable<PaginatedResponse<StokvelResponse>> {
    const cacheKey = `user-stokvels-paginated-${auth0Id}-${page}-${size}`;

    const cached = this.cacheService.get<PaginatedResponse<StokvelResponse>>(cacheKey);
    if (cached) {
      return cached;
    }

    const request$ = this.http.get<PaginatedResponse<StokvelResponse>>(
      `${this.baseUrl}/my-stokvels?page=${page}&size=${size}`
    );

    this.cacheService.set(cacheKey, request$, 2 * 60 * 1000);
    return request$;
  }

  // Clear cache when stokvel is created/updated
  clearUserStokvelsCache(auth0Id: string): void {
    const keysToDelete: string[] = [];

    this.cacheService['cache'].forEach((value, key) => {
      if (key.startsWith(`user-stokvels-${auth0Id}`)) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.cacheService.delete(key));
  }

  // Clear all stokvel-related cache
  clearAllStokvelCache(): void {
    const keysToDelete: string[] = [];

    this.cacheService['cache'].forEach((value, key) => {
      if (key.startsWith('user-stokvels-')) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.cacheService.delete(key));
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
