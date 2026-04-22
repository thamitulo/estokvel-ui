import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-stokvel-basics',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatExpansionModule],
  templateUrl: './stokvel-basics.component.html',
  styleUrl: './stokvel-basics.component.scss',
  standalone: true
})
export class StokvelBasicsComponent {
  faqs = [
    { q: 'What is a stokvel?', a: 'A stokvel is a type of informal savings club or investment society where members agree to contribute a fixed amount of money to a common fund on a weekly, fortnightly or monthly basis.' },
    { q: 'How many members do I need?', a: 'eStokvel requires a minimum of 3 members to start a stokvel group. There is no hard maximum, but most groups range from 5 to 20 members.' },
    { q: 'What types of stokvels are available?', a: 'eStokvel supports Burial Societies, Grocery Stokvels, Investment Clubs, Burial Societies, Social Stokvels and General Savings groups.' },
    { q: 'Is my money safe?', a: 'Yes. All transactions are processed through secure, encrypted payment channels and eStokvel is fully POPIA-compliant.' },
    { q: 'When do I get paid out?', a: 'Payouts follow the cycle agreed upon when the stokvel was created — monthly, bi-monthly or annually depending on the group structure.' },
  ];
}
