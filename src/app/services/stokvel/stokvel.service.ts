import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from "../../environments/environment";
import {map, shareReplay, tap} from "rxjs/operators";
import {PaginatedResponse, SavingsTermDto, StokvelResponse, StokvelTypeDto} from "../../models";
import {CacheService} from "../cache/cache.service";

@Injectable({
  providedIn: 'root'
})
export class StokvelService {

  private apiUrl = `${environment.apiUrl}stokvels`;
  private httpWithoutInterceptor: HttpClient;
  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient,
              private handler: HttpBackend,
              private cacheService: CacheService) {
    this.httpWithoutInterceptor = new HttpClient(handler);
  }

  getStokvelTypes(): Observable<StokvelTypeDto[]> {
    return this.http.get<StokvelTypeDto[]>(`${environment.apiUrl}public/stokvel-types`);
  }

  getSavingsTerms(): Observable<SavingsTermDto[]> {
    return this.http.get<SavingsTermDto[]>(`${environment.apiUrl}public/savings-terms`);
  }

  createStokvel(stokvelData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, stokvelData).pipe(
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

    const request$ = this.http.get<PaginatedResponse<StokvelResponse>>(`${this.apiUrl}/my-stokvels`).pipe(
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
      `${this.apiUrl}/my-stokvels?page=${page}&size=${size}`
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

  clearAllStokvelCache(): void {
    const keysToDelete: string[] = [];

    this.cacheService['cache'].forEach((value, key) => {
      if (key.startsWith('user-stokvels-')) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.cacheService.delete(key));
  }

  getPublicStokvels(page: number = 0, size: number = 10): Observable<PaginatedResponse<StokvelResponse>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    // Uses PublicController endpoint (/api/public/) which requires no authentication
    return this.httpWithoutInterceptor.get<PaginatedResponse<StokvelResponse>>(
      `${environment.apiUrl}public/get-public-stokvels`, { params }
    );
  }

  joinStokvel(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/join-request`, payload);
  }

  getStokvelById(id: number): Observable<StokvelResponse> {
    return this.http.get<StokvelResponse>(`${this.apiUrl}/${id}`);
  }

  /** Fetches a PUBLIC stokvel detail without requiring authentication */
  getPublicStokvelById(id: number): Observable<StokvelResponse> {
    return this.httpWithoutInterceptor.get<StokvelResponse>(
      `${environment.apiUrl}public/stokvels/${id}`
    );
  }

  /** Returns IDs of stokvels the current user is a member of (any role) */
  getJoinedStokvelIds(): Observable<number[]> {
    return this.http.get<StokvelResponse[]>(`${this.apiUrl}/joined`).pipe(
      map(stokvels => stokvels.map(s => s.id))
    );
  }

  getJoinedStokvels(): Observable<StokvelResponse[]> {
    return this.http.get<StokvelResponse[]>(`${this.apiUrl}/joined`);
  }

  getPendingJoinRequests(stokvelId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${stokvelId}/join-requests/pending`);
  }

  updateJoinRequestStatus(requestId: number, status: string, adminNotes?: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/join-requests/${requestId}/status`, { status, adminNotes });
  }

  removeMember(stokvelId: number, memberId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${stokvelId}/members/${memberId}`);
  }

  leaveStokvel(stokvelId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${stokvelId}/leave`, {});
  }

  getAdminStokvelIds(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}/admin/stokvel-ids`);
  }

  // Dashboard endpoints
  getDashboardSummary(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}dashboard/summary`);
  }

  getRecentActivities(limit: number = 10): Observable<any[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<any[]>(`${environment.apiUrl}dashboard/recent-activities`, { params });
  }

  getPortfolioDistribution(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}dashboard/portfolio-distribution`);
  }

  getMyStokvelsDetailed(): Observable<StokvelResponse[]> {
    return this.http.get<StokvelResponse[]>(`${environment.apiUrl}dashboard/my-stokvels-detailed`);
  }
}
