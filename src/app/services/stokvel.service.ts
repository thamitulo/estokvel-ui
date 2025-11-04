import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Stokvel} from "../models/stokvel";

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

  getStokvels(): Observable<Stokvel[]> {
    return this.http.get<Stokvel[]>(this.baseUrl);
  }

  joinStokvel(stokvelId: number, payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${stokvelId}/join`, payload);
  }
}
