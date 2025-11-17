import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: Date;
  readTime: string;
  category: 'welcome' | 'tips' | 'platform' | 'security' | 'community';
  tags: string[];
  views: number;
  likes: number;
  featured: boolean;
  imageUrl?: string;
  author: string;
}

export interface Activity {
  type: 'contribution' | 'payout' | 'invitation' | 'update' | 'withdrawal';
  description: string;
  stokvelName: string;
  date: Date;
  amount?: number;
  status: 'completed' | 'pending' | 'failed';
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  avatar: string;
  department: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBlogPosts(): BlogPost[] {
    return [
      {
        id: '1',
        title: 'Welcome to eStokvel: Revolutionizing Traditional Savings',
        excerpt: 'Join me, Thami Tulo, on this exciting journey as we transform traditional stokvels for the digital age. Discover the inspiration behind eStokvel and our vision for financial empowerment.',
        content: `
          <h2>The Beginning of a Dream</h2>
          <p>Growing up in the township, I witnessed firsthand the power of stokvels in our community. My grandmother was part of a stokvel that helped put me through school and a burial scheme that buried her, and I saw how these community savings groups transformed lives.</p>

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
    ];
  }
  // Activity Data
  getRecentActivities(): Activity[] {
    return [
      {
        type: 'contribution',
        description: 'Monthly contribution made',
        stokvelName: 'Mabogo Dinku Investment Club',
        date: new Date('2024-01-15'),
        amount: 5000,
        status: 'completed'
      },
      {
        type: 'payout',
        description: 'Investment dividend received',
        stokvelName: 'Property Investment Group',
        date: new Date('2024-01-10'),
        amount: 7500,
        status: 'completed'
      },
      {
        type: 'invitation',
        description: 'Invited to join new stokvel',
        stokvelName: 'Tech Investment Group',
        date: new Date('2024-01-08'),
        status: 'pending'
      },
      {
        type: 'update',
        description: 'Stokvel rules updated',
        stokvelName: 'Family Education Fund',
        date: new Date('2024-01-05'),
        status: 'completed'
      },
      {
        type: 'contribution',
        description: 'Additional contribution',
        stokvelName: 'Community Burial Society',
        date: new Date('2024-01-03'),
        amount: 2000,
        status: 'completed'
      }
    ];
  }

  // FAQ Data
  getFAQs(): FAQ[] {
    return [
      {
        question: 'How do I create a new stokvel?',
        answer: 'Click on "Create Stokvel" from your dashboard, fill in the stokvel details including name, type, contribution amount, and invite members. You can set up automatic contributions and payout schedules.',
        category: 'stokvel-basics'
      },
      {
        question: 'What are the fees for using eStokvel?',
        answer: 'Basic stokvel management is free. We charge a small 1% platform fee only on successful investment returns and 2% for premium features like automated payouts and advanced analytics.',
        category: 'pricing'
      },
      {
        question: 'How secure is my money and personal information?',
        answer: 'We use bank-level 256-bit encryption, comply with POPIA regulations, and all transactions are monitored 24/7. Your funds are held in trusted financial institutions.',
        category: 'security'
      },
      {
        question: 'Can I join multiple stokvels?',
        answer: 'Yes! You can join as many stokvels as you want. Each stokvel operates independently, and you can manage all your memberships from your single dashboard.',
        category: 'membership'
      },
      {
        question: 'What happens if a member misses a contribution?',
        answer: 'The stokvel admin can set up automatic reminders, and the platform provides flexible options for catch-up payments. Each stokvel sets its own rules for missed contributions.',
        category: 'contributions'
      }
    ];
  }

  // Team Data
  getTeamMembers(): TeamMember[] {
    return [
      {
        name: 'Thami Tulo',
        position: 'Founder & CEO',
        bio: 'Passionate about financial inclusion and technology. Founded eStokvel to revolutionize traditional savings methods in South Africa.',
        avatar: '/assets/images/team/thami-tulo.jpg',
        department: 'Leadership'
      },
      {
        name: 'Nomsa Khumalo',
        position: 'Head of Product',
        bio: 'Product strategist with 10+ years experience in fintech. Focused on creating user-friendly financial solutions.',
        avatar: '/assets/images/team/nomsa-khumalo.jpg',
        department: 'Product'
      },
      {
        name: 'James Peterson',
        position: 'CTO',
        bio: 'Technology expert specializing in secure financial systems and scalable architecture.',
        avatar: '/assets/images/team/james-peterson.jpg',
        department: 'Technology'
      }
    ];
  }

  // Platform Statistics
  getPlatformStats() {
    return {
      totalUsers: 12500,
      totalStokvels: 3200,
      totalAmountManaged: 48500000,
      averageReturn: 12.5,
      userSatisfaction: 98.2
    };
  }

  // Contact Information
  getContactInfo() {
    return {
      supportEmail: 'support@estokvel.co.za',
      generalEmail: 'info@estokvel.co.za',
      phone: '011 234 5678',
      emergencyPhone: '011 234 5679',
      address: '123 Innovation Street, Johannesburg, 2000, South Africa',
      whatsapp: '+27 72 123 4567',
      businessHours: {
        weekdays: '8:00 AM - 6:00 PM',
        saturday: '9:00 AM - 1:00 PM',
        sunday: 'Closed'
      }
    };
  }

  // Social Media Links
  getSocialLinks() {
    return {
      facebook: 'https://facebook.com/estokvel',
      twitter: 'https://twitter.com/estokvel',
      instagram: 'https://instagram.com/estokvel',
      linkedin: 'https://linkedin.com/company/estokvel',
      youtube: 'https://youtube.com/estokvel'
    };
  }

  // Legal Documents
  getLegalDocuments() {
    return [
      {
        name: 'Terms of Service',
        url: '/assets/docs/terms-of-service.pdf',
        size: '245 KB',
        lastUpdated: '2024-01-01'
      },
      {
        name: 'Privacy Policy',
        url: '/assets/docs/privacy-policy.pdf',
        size: '180 KB',
        lastUpdated: '2024-01-01'
      },
      {
        name: 'Cookie Policy',
        url: '/assets/docs/cookie-policy.pdf',
        size: '120 KB',
        lastUpdated: '2024-01-01'
      }
    ];
  }

  getProtectedData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/protected`);
  }
}
