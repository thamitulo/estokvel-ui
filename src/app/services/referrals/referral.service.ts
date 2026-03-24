import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {
  ReferralStats,
  ReferralHistory,
  CreateReferralRequest,
  ShareReferralRequest,
  ReferralResponse
} from '../../models/referrals/referrals';
import {environment} from "../../environments/environment";
import {PaginatedResponse} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  protected readonly apiUrl = `${environment.apiUrl}` + `referrals`;

  constructor(private http: HttpClient) {}

  /**
   * Get referral statistics for the current user
   */
  getStats(): Observable<ReferralStats> {
    return this.http.get<ReferralStats>(`${this.apiUrl}/stats`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Create a new referral
   */
  createReferral(request: CreateReferralRequest): Observable<ReferralResponse> {
    return this.http.post<ReferralResponse>(this.apiUrl, request).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get referral history with pagination
   */
  getHistory(page: number = 0, size: number = 10): Observable<PaginatedResponse<ReferralHistory>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PaginatedResponse<ReferralHistory>>(`${this.apiUrl}/history`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get recent referrals
   */
  getRecentHistory(limit: number = 5): Observable<ReferralHistory[]> {
    const params = new HttpParams().set('limit', limit.toString());

    return this.http.get<ReferralHistory[]>(`${this.apiUrl}/recent`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Share referral via different methods
   */
  shareReferral(request: ShareReferralRequest): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/share`, request).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get or generate referral code
   */
  getReferralCode(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/code`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get referral by ID
   */
  getReferralById(id: number): Observable<ReferralResponse> {
    return this.http.get<ReferralResponse>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Update referral status
   */
  updateStatus(id: number, status: string): Observable<ReferralResponse> {
    const params = new HttpParams().set('status', status);

    return this.http.patch<ReferralResponse>(
      `${this.apiUrl}/${id}/status`,
      null,
      { params }
    ).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Delete referral
   */
  deleteReferral(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Filter referrals by status
   */
  getReferralsByStatus(
    status: string,
    page: number = 0,
    size: number = 10
  ): Observable<PaginatedResponse<ReferralResponse>> {
    const params = new HttpParams()
      .set('status', status)
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PaginatedResponse<ReferralResponse>>(`${this.apiUrl}/filter`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get total earnings from referrals
   */
  getTotalEarnings(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/earnings`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Validate a referral code
   */
  validateReferralCode(code: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/validate/${code}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get shareable link for a referral code
   */
  getShareableLink(referralCode: string): string {
    return `${environment.apiUrl}/signup?ref=${referralCode}`;
  }

  /**
   * Generate WhatsApp share message
   */
  generateWhatsAppShareMessage(referralCode: string): string {
    const message = `Join eStokvel - the modern way to manage your stokvels! Use my referral code ${referralCode} to get R25 bonus when you create your first stokvel. Sign up here: ${this.getShareableLink(referralCode)}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  /**
   * Generate email share content
   */
  generateEmailShareContent(referralCode: string): { subject: string; body: string } {
    const subject = 'Join eStokvel with my referral code!';
    const body = `Hi there!

I'm using eStokvel to manage my stokvels and thought you might be interested too!

Use my referral code ${referralCode} when you sign up and we'll both get rewards:
- You get R25 bonus when you create your first stokvel
- I get R50 when you join

Sign up here: ${this.getShareableLink(referralCode)}

Let's grow our savings together!`;

    return { subject, body };
  }

  /**
   * Generate SMS share content
   */
  generateSmsShareContent(referralCode: string): string {
    return `Join eStokvel! Use my code ${referralCode} for R25 bonus. Sign up: ${this.getShareableLink(referralCode)}`;
  }

  /**
   * Share via WhatsApp using Web API
   */
  shareViaWhatsApp(referralCode: string): void {
    const message = `Join eStokvel - the modern way to manage your stokvels! Use my referral code ${referralCode} to get R25 bonus when you create your first stokvel. Sign up here: ${this.getShareableLink(referralCode)}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  /**
   * Share via email using mailto
   */
  shareViaEmail(referralCode: string, recipientEmail?: string): void {
    const content = this.generateEmailShareContent(referralCode);
    const mailtoUrl = `mailto:${recipientEmail || ''}?subject=${encodeURIComponent(content.subject)}&body=${encodeURIComponent(content.body)}`;
    window.open(mailtoUrl, '_blank');
  }

  /**
   * Share via SMS using sms protocol
   */
  shareViaSMS(referralCode: string, recipientPhone?: string): void {
    const message = this.generateSmsShareContent(referralCode);
    const smsUrl = `sms:${recipientPhone || ''}?&body=${encodeURIComponent(message)}`;
    window.open(smsUrl, '_blank');
  }

  /**
   * Share using Web Share API if available
   */
  shareViaWebShare(referralCode: string): void {
    if (navigator.share) {
      navigator.share({
        title: 'Join eStokvel',
        text: `Use my referral code ${referralCode} to get R25 bonus when you join eStokvel!`,
        url: this.getShareableLink(referralCode)
      }).catch(error => {
        console.error('Error sharing:', error);
        // Fallback to copying link
        this.copyToClipboard(this.getShareableLink(referralCode));
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      this.copyToClipboard(this.getShareableLink(referralCode));
    }
  }

  /**
   * Copy text to clipboard
   */
  copyToClipboard(text: string): Promise<void> {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      return new Promise((resolve, reject) => {
        try {
          document.execCommand('copy');
          textArea.remove();
          resolve();
        } catch (error) {
          textArea.remove();
          reject(error);
        }
      });
    }
  }

  /**
   * Format currency
   */
  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 2
    }).format(amount);
  }

  /**
   * Format date for display
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  /**
   * Get status badge class
   */
  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'COMPLETED':
        return 'badge-success';
      case 'PENDING':
        return 'badge-warning';
      case 'FAILED':
        return 'badge-danger';
      case 'EXPIRED':
        return 'badge-secondary';
      default:
        return 'badge-info';
    }
  }

  /**
   * Handle API errors
   */
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      if (error.status === 409) {
        errorMessage = error.error?.message || 'You already have a pending referral for this email.';
      } else if (error.status === 404) {
        errorMessage = 'Resource not found.';
      } else if (error.status === 403) {
        errorMessage = 'You do not have permission to perform this action.';
      } else if (error.status === 401) {
        errorMessage = 'Please login to continue.';
      } else if (error.status === 400) {
        errorMessage = error.error?.message || 'Invalid request. Please check your input.';
      } else if (error.status === 500) {
        errorMessage = 'Server error. Please try again later.';
      } else {
        errorMessage = error.error?.message || error.message || 'Unknown error occurred.';
      }
    }

    console.error('Referral Service Error:', error);
    return throwError(() => new Error(errorMessage));
  }
}
