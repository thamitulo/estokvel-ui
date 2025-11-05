import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {BlogPost} from "../backend.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<BlogPost[]> {
    //return this.http.get<BlogPost[]>(`${environment.apiUrl}/blogs`);
    return of([
      {
        id: '1',
        title: 'Welcome to eStokvel: Revolutionizing Traditional Savings',
        excerpt: 'Join me, Thami Tulo, on this exciting journey as we transform traditional stokvels for the digital age. Discover the inspiration behind eStokvel and our vision for financial empowerment.',
        content: `
          <h2>The Beginning of a Dream</h2>
          <p>Growing up in Soweto, I witnessed firsthand the power of stokvels in our community. My grandmother was part of a stokvel that helped put me through school, and I saw how these community savings groups transformed lives.</p>

          <h2>The Digital Transformation</h2>
          <p>While traditional stokvels are powerful, they face challenges: manual record-keeping, missed meetings, and security concerns. eStokvel was born to solve these problems while preserving the community spirit that makes stokvels special.</p>

          <h2>Our Mission</h2>
          <p>We're not just building an app; we're building a movement to democratize financial services and make community savings accessible, secure, and efficient for every South African.</p>
        `,
        date: new Date('2024-01-15'),
        readTime: '5 min read',
        category: 'welcome',
        tags: ['welcome', 'introduction', 'founder-story', 'digital-transformation'],
        views: 1250,
        likes: 89,
        featured: true,
        imageUrl: '/assets/images/blog/welcome-post.jpg',
        author: 'Thami Tulo'
      },
      {
        id: '2',
        title: '5 Essential Tips for Starting Your First Successful Stokvel',
        excerpt: 'New to stokvels? Learn the key principles for creating a stokvel that thrives, builds trust, and achieves financial goals for all members.',
        content: 'Full content about stokvel tips...',
        date: new Date('2024-01-12'),
        readTime: '7 min read',
        category: 'tips',
        tags: ['beginners', 'tips', 'starting-stokvel', 'best-practices'],
        views: 890,
        likes: 67,
        featured: true,
        author: 'Thami Tulo'
      },
      {
        id: '3',
        title: 'Understanding eStokvel: Complete Platform Feature Guide',
        excerpt: 'A comprehensive walkthrough of all eStokvel features designed to make stokvel management seamless and secure.',
        content: 'Full platform feature guide...',
        date: new Date('2024-01-10'),
        readTime: '8 min read',
        category: 'platform',
        tags: ['features', 'platform-guide', 'how-to', 'tutorial'],
        views: 1560,
        likes: 112,
        featured: false,
        author: 'Thami Tulo'
      },
      {
        id: '4',
        title: 'Security First: How We Protect Your Financial Data',
        excerpt: 'Learn about the bank-level security measures and POPIA compliance that keep your stokvel funds and data safe.',
        content: 'Security measures content...',
        date: new Date('2024-01-08'),
        readTime: '6 min read',
        category: 'security',
        tags: ['security', 'privacy', 'POPIA', 'data-protection'],
        views: 720,
        likes: 45,
        featured: false,
        author: 'Thami Tulo'
      },
      {
        id: '5',
        title: 'The Power of Community in Financial Growth',
        excerpt: 'Explore how stokvels create stronger communities while building financial resilience and generational wealth.',
        content: 'Community benefits content...',
        date: new Date('2024-01-05'),
        readTime: '5 min read',
        category: 'community',
        tags: ['community', 'financial-growth', 'wealth-building', 'social-impact'],
        views: 940,
        likes: 76,
        featured: false,
        author: 'Thami Tulo'
      }
    ]);
  }

  createBlog(blog: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(`${environment.apiUrl}/blogs`, blog);
  }

  // Repeat for activities, referrals, FAQs, team members
}
