import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Stokvel {
  name: string;
  description: string;
  preExisting: string;
  startDate: string;
  stokvelType: string;
  savingsTerms?: string;
  contributionAmount: number;
  privacyOption: string;
  accounts: {
    bankName: string;
    accHolderName: string;
    accountNumber: string;
    accountType: string;
    debitDay: number;
    debitAuthorization: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class StokvelService {

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
}
