import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-resources',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatChipsModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss',
  standalone: true
})
export class ResourcesComponent {
  featured = [
    { icon: 'school', title: 'Stokvel Basics Guide', desc: 'A comprehensive introduction to stokvels — how they work, the different types and how to choose the right one for your goals.', tag: 'Guide', link: '/stokvel-basics' },
    { icon: 'play_circle', title: 'Getting Started Tutorial', desc: 'Step-by-step video walkthrough of creating your eStokvel account, setting up your first stokvel and inviting members.', tag: 'Tutorial', link: '/tutorials' },
    { icon: 'menu_book', title: 'Stokvel Glossary', desc: 'Definitions of all key terms you\'ll encounter when using eStokvel — from "contribution" to "payout cycle".', tag: 'Reference', link: '/glossary' },
  ];

  resources = [
    {
      category: 'Legal & Compliance',
      icon: 'gavel',
      items: [
        { title: 'POPIA Overview', desc: 'How eStokvel protects your personal data under the Protection of Personal Information Act.', link: '/popia', tag: 'Legal' },
        { title: 'Regulatory Framework', desc: 'The South African laws that govern stokvel operations and how eStokvel complies.', link: '/regulatory', tag: 'Legal' },
        { title: 'Compliance Centre', desc: 'Our full compliance posture — from KYC to transaction monitoring.', link: '/compliance', tag: 'Compliance' },
        { title: 'Terms of Service', desc: 'The complete terms governing your use of the eStokvel platform.', link: '/terms', tag: 'Legal' },
        { title: 'Privacy Policy', desc: 'Detailed information about how we collect, use and protect your data.', link: '/privacy-policy', tag: 'Legal' },
        { title: 'FSCA Information', desc: 'Information about the Financial Sector Conduct Authority and our registration.', link: '/fsca', tag: 'Regulatory' },
        { title: 'Disclaimer', desc: 'Important disclaimers about the use of eStokvel services.', link: '/disclaimer', tag: 'Legal' },
      ]
    },
    {
      category: 'Learning',
      icon: 'school',
      items: [
        { title: 'Stokvel Basics', desc: 'Everything you need to know about stokvels and how to get started.', link: '/stokvel-basics', tag: 'Guide' },
        { title: 'Tutorials', desc: 'Step-by-step guides to using every feature of the eStokvel platform.', link: '/tutorials', tag: 'Tutorial' },
        { title: 'Glossary', desc: 'Key terms and definitions for the eStokvel platform.', link: '/glossary', tag: 'Reference' },
        { title: 'FAQs', desc: 'Answers to the most commonly asked questions about eStokvel.', link: '/faq', tag: 'FAQ' },
        { title: 'Help Center', desc: 'Browse all help articles or search for specific topics.', link: '/help-center', tag: 'Support' },
      ]
    },
    {
      category: 'Company',
      icon: 'business',
      items: [
        { title: 'About eStokvel', desc: 'Our story, mission and the team behind South Africa\'s leading digital stokvel platform.', link: '/about-us', tag: 'Company' },
        { title: 'Security', desc: 'How we protect your account, data and funds with industry-leading security.', link: '/security', tag: 'Security' },
        { title: 'Press & Media', desc: 'News, press releases and media resources for journalists.', link: '/press', tag: 'Media' },
        { title: 'Blog', desc: 'Articles, tips and stories from the eStokvel community.', link: '/blog', tag: 'Blog' },
        { title: 'Contact Us', desc: 'Get in touch with our team for support or enquiries.', link: '/contact', tag: 'Support' },
      ]
    },
  ];

  tagColors: Record<string, string> = {
    'Guide': '#0d47a1', 'Tutorial': '#7c3aed', 'Reference': '#0891b2',
    'Legal': '#dc2626', 'Compliance': '#059669', 'Regulatory': '#b45309',
    'FAQ': '#0d47a1', 'Support': '#00796b', 'Media': '#9333ea',
    'Blog': '#f59e0b', 'Company': '#1d4ed8', 'Security': '#16a34a',
  };
}

