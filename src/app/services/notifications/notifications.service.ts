import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {environment} from "../../environments/environment";
import {Notification, NotificationResponse} from "../../models/notifications/notification.interface";

export interface NotificationCountDTO {
  unreadCount: number;
  totalCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly apiUrl = `${environment.apiUrl}notifications`;

  constructor(private http: HttpClient) {}

  getRecentNotifications(limit: number = 10): Observable<Notification[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<Notification[]>(`${this.apiUrl}/recent`, { params });
  }

  getAllNotifications(page: number = 0, size: number = 20): Observable<NotificationResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<NotificationResponse>(`${this.apiUrl}`, { params });
  }

  getUnreadCount(): Observable<number> {
    return this.http.get<NotificationCountDTO>(`${this.apiUrl}/unread-count`).pipe(
      map(dto => dto.unreadCount ?? 0)
    );
  }

  getUnreadCountFull(): Observable<NotificationCountDTO> {
    return this.http.get<NotificationCountDTO>(`${this.apiUrl}/unread-count`);
  }

  getPendingJoinRequests(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/join-requests/pending`);
  }

  markAsRead(notificationId: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${notificationId}/read`, {});
  }

  markAllAsRead(): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/read-all`, {});
  }

  sendJoinRequestResponse(notificationId: number, response: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${notificationId}/response`, response);
  }

  deleteNotification(notificationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${notificationId}`);
  }
}
