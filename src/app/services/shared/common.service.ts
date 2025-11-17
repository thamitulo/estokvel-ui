import { Injectable } from '@angular/core';

export interface Activity {
  type: 'contribution' | 'payout' | 'invitation' | 'update' | 'withdrawal';
  description: string;
  stokvelName: string;
  date: Date;
  amount?: number;
  status: 'completed' | 'pending' | 'failed';
}

export interface Referral {
  friendName: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
  amount?: number;
  email: string;
  cellphone: string;
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
export class CommonService {

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

  // Referral Data
  getReferralHistory(): Referral[] {
    return [
      {
        friendName: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        date: new Date('2024-01-15'),
        status: 'completed',
        amount: 50,
        cellphone: '0788778174'
      },
      {
        friendName: 'Mike Thompson',
        email: 'mike.t@email.com',
        date: new Date('2024-01-12'),
        status: 'completed',
        amount: 50,
        cellphone: '0788778174'
      },
      {
        friendName: 'Lisa Brown',
        email: 'lisa.b@email.com',
        date: new Date('2024-01-10'),
        status: 'pending',
        cellphone: '0788778174'
      },
      {
        friendName: 'David Wilson',
        email: 'david.w@email.com',
        date: new Date('2024-01-08'),
        status: 'completed',
        amount: 50,
        cellphone: '0788778174'
      },
      {
        friendName: 'Emma Davis',
        email: 'emma.d@email.com',
        date: new Date('2024-01-05'),
        status: 'pending',
        cellphone: '0788778174'
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
}
