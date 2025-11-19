import { Injectable } from '@angular/core';

import { Observable, of, tap, timer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export interface CacheItem<T> {
  data: Observable<T>;
  timestamp: number;
  ttl?: number; // Time to live in milliseconds
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, CacheItem<any>>();
  private readonly DEFAULT_TTL = 59 * 60 * 1000; // 59 minutes default

  get<T>(key: string): Observable<T> | null {
    const item = this.cache.get(key);

    if (!item) {
      return null;
    }

    // Check if cache has expired
    if (item.ttl && Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  set<T>(key: string, data: Observable<T>, ttl?: number): void {
    const cacheItem: CacheItem<T> = {
      data: data.pipe(shareReplay(1)),
      timestamp: Date.now(),
      ttl: ttl || this.DEFAULT_TTL
    };

    this.cache.set(key, cacheItem);

    // Auto-cleanup when TTL expires
    if (cacheItem.ttl) {
      timer(cacheItem.ttl).subscribe(() => {
        this.cache.delete(key);
      });
    }
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    if (item.ttl && Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }
}
