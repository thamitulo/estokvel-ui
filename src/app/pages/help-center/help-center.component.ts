import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-help-center',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatExpansionModule, FormsModule],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss',
  standalone: true
})
export class HelpCenterComponent {
  searchQuery = '';

  categories = [
    { icon: 'person_add', label: 'Getting Started', count: 8 },
    { icon: 'savings', label: 'Managing Stokvels', count: 12 },
    { icon: 'payments', label: 'Payments & Wallet', count: 10 },
    { icon: 'group', label: 'Members & Invites', count: 7 },
    { icon: 'shield', label: 'Security & Privacy', count: 6 },
    { icon: 'receipt_long', label: 'Billing & Fees', count: 5 },
  ];

  faqs = [
    {
      category: 'Getting Started',
      items: [
        { q: 'How do I create an eStokvel account?', a: 'Visit the eStokvel website or download the app, click "Get Started Free" and follow the registration steps. You will need a valid South African ID number and email address.' },
        { q: 'Is eStokvel free to use?', a: 'Creating an account and joining stokvels is free. A small platform fee may apply for certain transactions. Check our pricing page for the latest fee schedule.' },
        { q: 'How do I verify my identity?', a: 'After registration, go to your Profile and follow the KYC (Know Your Customer) steps. You will need to upload a clear photo of your South African ID or passport and a selfie for facial verification.' },
        { q: 'Can I use eStokvel on my phone?', a: 'Yes! eStokvel is available as a Progressive Web App (PWA) and as a native app on Android and iOS. You can add it to your home screen directly from your browser.' },
      ]
    },
    {
      category: 'Managing Stokvels',
      items: [
        { q: 'How do I create a stokvel?', a: 'Log in, click "Create a Stokvel", fill in the details (name, type, contribution amount, payout cycle, maximum members) and invite your first members.' },
        { q: 'What is the minimum number of members?', a: 'A minimum of 3 members is required to start a stokvel on eStokvel.' },
        { q: 'Can I change the stokvel rules after creation?', a: 'Some settings can be adjusted by the organiser before the stokvel becomes active. Once the stokvel is running, core rules (contribution amount, payout cycle) are locked to protect all members.' },
        { q: 'How do I remove a member?', a: 'As the organiser, go to the stokvel management page, find the member and select "Remove Member". Note that removal is subject to the group\'s constitution rules.' },
      ]
    },
    {
      category: 'Payments & Wallet',
      items: [
        { q: 'How do I make a contribution?', a: 'Go to your stokvel, click "Make Contribution" and choose your payment method — eStokvel Wallet, bank transfer or card. Contributions are due on the date specified in the group\'s rules.' },
        { q: 'When will I receive my payout?', a: 'Payouts are processed according to the schedule set when the stokvel was created. You will receive a notification when your payout is ready and funds will appear in your eStokvel Wallet within 1–2 business days.' },
        { q: 'How do I withdraw from my wallet?', a: 'Go to Wallet → Withdraw, enter the amount and your bank account details. Withdrawals typically take 1–3 business days to reflect.' },
      ]
    },
  ];

  get filteredFaqs() {
    if (!this.searchQuery.trim()) return this.faqs;
    const q = this.searchQuery.toLowerCase();
    return this.faqs.map(cat => ({
      ...cat,
      items: cat.items.filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q))
    })).filter(cat => cat.items.length > 0);
  }
}

