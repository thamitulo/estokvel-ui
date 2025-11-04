// blog.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MaterialModule} from "../../material.module";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: Date;
  readTime: string;
  category: 'welcome' | 'tips' | 'platform';
  tags: string[];
  views: number;
  likes: number;
  featured: boolean;
  imageUrl?: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  // Blog posts data
  allPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Welcome to eStokvel: A Personal Message from Thami Tulo',
      excerpt: 'Join me on this exciting journey as we revolutionize traditional stokvels for the digital age. Discover why I created eStokvel and our vision for the future.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-15'),
      readTime: '5 min read',
      category: 'welcome',
      tags: ['welcome', 'introduction', 'founder'],
      views: 1250,
      likes: 89,
      featured: true,
      imageUrl: '/assets/images/blog/welcome-post.jpg'
    },
    {
      id: '2',
      title: 'Why Traditional Stokvels Need a Digital Transformation',
      excerpt: 'Exploring the challenges faced by traditional stokvels and how technology can solve them while preserving the cultural essence of these savings groups.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-12'),
      readTime: '7 min read',
      category: 'platform',
      tags: ['digital transformation', 'technology', 'savings'],
      views: 890,
      likes: 67,
      featured: true,
      imageUrl: '/assets/images/blog/digital-transformation.jpg'
    },
    {
      id: '3',
      title: '5 Essential Tips for Starting Your First Stokvel',
      excerpt: 'New to stokvels? Here are my top 5 tips for starting a successful stokvel that will stand the test of time and help you achieve your financial goals.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-10'),
      readTime: '6 min read',
      category: 'tips',
      tags: ['beginners', 'tips', 'starting'],
      views: 1560,
      likes: 112,
      featured: false
    },
    {
      id: '4',
      title: 'Understanding eStokvel: Platform Features & Benefits',
      excerpt: 'A comprehensive guide to all the features eStokvel offers to make stokvel management easier, more secure, and more efficient.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-08'),
      readTime: '8 min read',
      category: 'platform',
      tags: ['features', 'platform', 'guide'],
      views: 720,
      likes: 45,
      featured: false
    },
    {
      id: '5',
      title: 'Building Trust in Digital Financial Platforms',
      excerpt: 'How eStokvel ensures security, transparency, and trust - the three pillars that make traditional stokvels successful.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-05'),
      readTime: '5 min read',
      category: 'platform',
      tags: ['trust', 'security', 'transparency'],
      views: 630,
      likes: 38,
      featured: false
    },
    {
      id: '6',
      title: 'The Power of Community in Financial Growth',
      excerpt: 'Why stokvels are more than just savings groups - they are communities that support each other financially and emotionally.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-03'),
      readTime: '4 min read',
      category: 'tips',
      tags: ['community', 'growth', 'support'],
      views: 940,
      likes: 76,
      featured: false
    }
  ];

  // Welcome series posts
  welcomeSeries: BlogPost[] = [
    {
      id: '1',
      title: 'Welcome to eStokvel: A Personal Message',
      excerpt: 'Join me on this exciting journey as we revolutionize traditional stokvels',
      content: '',
      date: new Date('2024-01-15'),
      readTime: '5 min',
      category: 'welcome',
      tags: [],
      views: 1250,
      likes: 89,
      featured: false
    },
    {
      id: '2',
      title: 'Getting Started: Your First Stokvel',
      excerpt: 'Step-by-step guide to creating and managing your first digital stokvel',
      content: '',
      date: new Date('2024-01-14'),
      readTime: '6 min',
      category: 'welcome',
      tags: [],
      views: 890,
      likes: 67,
      featured: false
    },
    {
      id: '3',
      title: 'Understanding Platform Features',
      excerpt: 'Master all the tools and features eStokvel offers for your stokvel',
      content: '',
      date: new Date('2024-01-13'),
      readTime: '7 min',
      category: 'welcome',
      tags: [],
      views: 760,
      likes: 54,
      featured: false
    }
  ];

  // Categories
  categories: Category[] = [
    { id: 'all', name: 'All Posts', count: 6 },
    { id: 'welcome', name: 'Welcome Series', count: 3 },
    { id: 'tips', name: 'Stokvel Tips', count: 2 },
    { id: 'platform', name: 'Platform Features', count: 3 }
  ];

  // Popular posts (top 3 by views)
  popularPosts: BlogPost[] = this.allPosts
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  // Filtering
  currentFilter: string = 'all';
  filteredPosts: BlogPost[] = this.allPosts;
  postsToShow: number = 4;

  // Newsletter
  newsletterEmail: string = '';

  constructor(private snackBar: MatSnackBar) {}

  // Filter posts by category
  filterPosts(category: string): void {
    this.currentFilter = category;

    if (category === 'all') {
      this.filteredPosts = this.allPosts.slice(0, this.postsToShow);
    } else {
      this.filteredPosts = this.allPosts
        .filter(post => post.category === category)
        .slice(0, this.postsToShow);
    }
  }

  // Load more posts
  loadMorePosts(): void {
    this.postsToShow += 4;
    this.filterPosts(this.currentFilter);
  }

  // Read a blog post
  readPost(post: BlogPost): void {
    // In a real app, this would navigate to the blog post detail page
    this.snackBar.open(`Opening: "${post.title}"`, 'Close', {
      duration: 3000
    });

    // Simulate view count increase
    post.views++;
  }

  // Subscribe to newsletter
  subscribeNewsletter(): void {
    if (this.newsletterEmail) {
      // In a real app, this would call a newsletter subscription service
      this.snackBar.open('Thank you for subscribing to our newsletter!', 'Close', {
        duration: 5000,
        panelClass: ['success-snackbar']
      });

      this.newsletterEmail = '';
    } else {
      this.snackBar.open('Please enter a valid email address', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }

  // Get total number of posts
  get totalPosts(): number {
    return this.allPosts.length;
  }

  // Get current year for footer
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
