import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-glossary',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './glossary.component.html',
  styleUrl: './glossary.component.scss',
  standalone: true
})
export class GlossaryComponent {
  terms = [
    { term: 'Stokvel', def: 'An informal savings or investment club where members pool funds and receive payouts in rotation or at agreed intervals.' },
    { term: 'Contribution', def: 'The fixed amount each member pays into the group fund on a regular basis (weekly, monthly, etc.).' },
    { term: 'Payout Cycle', def: 'The agreed frequency at which the pooled funds are distributed to a member — monthly, bi-monthly or annually.' },
    { term: 'Rotating Stokvel', def: 'A stokvel structure where each member receives the full pot once per cycle in a pre-agreed order.' },
    { term: 'Investment Club', def: 'A stokvel where pooled funds are collectively invested in shares, property or other assets.' },
    { term: 'Burial Society', def: 'A communal fund used to cover funeral and related expenses for members and their families.' },
    { term: 'POPIA', def: 'Protection of Personal Information Act — South African legislation governing how personal data must be handled.' },
    { term: 'Digital Constitution', def: 'An eStokvel-generated electronic document outlining the rules, obligations and rights of all stokvel members.' },
    { term: 'Organiser', def: 'The member who creates and administers the stokvel group on eStokvel.' },
    { term: 'Member', def: 'Any person who has joined and been accepted into a stokvel group.' },
    { term: 'Privacy (Public/Private)', def: 'Public stokvels are open for anyone to join. Private stokvels require an invitation from the organiser.' },
    { term: 'eStokvel Wallet', def: 'The in-app digital wallet used to store, send and receive stokvel funds securely.' },
  ];

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  getTermsByLetter(letter: string) {
    return this.terms.filter(t => t.term.toUpperCase().startsWith(letter));
  }

  hasTerms(letter: string) {
    return this.getTermsByLetter(letter).length > 0;
  }
}
