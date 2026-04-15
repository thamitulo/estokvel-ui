import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface TransactionRequest {
  stokvelId: number;
  amount: number;
  reference?: string;
  description?: string;
  currency?: string;
}

export interface Transaction {
  id: number;
  userId: string;
  type: 'CREDIT' | 'DEBIT';
  amount: number;
  currency: string;
  reference: string;
  description: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REVERSED';
  createdAt: string;
  processedAt?: string;
  balanceAfterTransaction?: number;
  reasonCode?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly apiUrl = `${environment.apiUrl}transactions`;

  constructor(private http: HttpClient) {}

  /**
   * Record a contribution to a stokvel
   */
  contribute(request: TransactionRequest): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}/contribute`, request);
  }

  /**
   * Record a payout from a stokvel
   */
  payout(request: TransactionRequest): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}/payout`, request);
  }

  /**
   * Get recent transactions for current user
   */
  getRecentTransactions(limit: number = 10): Observable<Transaction[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<Transaction[]>(`${this.apiUrl}/recent`, { params });
  }

  /**
   * Get account balance for current user
   */
  getBalance(): Observable<{ balance: number }> {
    return this.http.get<{ balance: number }>(`${this.apiUrl}/balance`);
  }

  /**
   * Get all transactions for a specific stokvel
   */
  getStokvelTransactions(stokvelId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/stokvels/${stokvelId}`);
  }
}

