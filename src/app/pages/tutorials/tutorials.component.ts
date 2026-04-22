import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-tutorials',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatExpansionModule],
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.scss',
  standalone: true
})
export class TutorialsComponent {
  tutorials = [
    { icon: 'person_add', title: 'Getting Started', desc: 'Create your eStokvel account, complete your profile and verify your identity.', duration: '5 min', level: 'Beginner' },
    { icon: 'add_circle', title: 'Creating a Stokvel', desc: 'Step-by-step guide to setting up your first stokvel — name, rules, members and payout cycles.', duration: '8 min', level: 'Beginner' },
    { icon: 'group_add', title: 'Inviting Members', desc: 'How to invite friends and family to join your private stokvel via link or email.', duration: '3 min', level: 'Beginner' },
    { icon: 'payments', title: 'Making Contributions', desc: 'How to make monthly contributions using your linked payment method or eStokvel wallet.', duration: '5 min', level: 'Beginner' },
    { icon: 'manage_accounts', title: 'Managing Your Stokvel', desc: 'Approve members, track contributions and manage the payout schedule as an organiser.', duration: '10 min', level: 'Intermediate' },
    { icon: 'account_balance_wallet', title: 'Using the Wallet', desc: 'Deposit, withdraw and transfer funds using the eStokvel in-app wallet.', duration: '7 min', level: 'Intermediate' },
    { icon: 'bar_chart', title: 'Reading Reports', desc: 'Understand contribution history, payout forecasts and member activity dashboards.', duration: '6 min', level: 'Intermediate' },
    { icon: 'shield', title: 'Security Best Practices', desc: 'How to keep your account secure — 2FA, strong passwords and recognising phishing.', duration: '5 min', level: 'All Levels' },
  ];
}
