import { Component, HostListener, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements AfterViewInit {
  @ViewChildren('faqCard') faqCards!: QueryList<ElementRef>;

  faqs = [
    {
      question: 'What is estokvel?',
      answer: `estokvel is an online community that allows people to create & join 
               stokvels online. Contributions are collected monthly and distributed 
               according to the payment order.`,
      isOpen: false
    },
    {
      question: 'Where do contributions go before being paid to members?',
      answer: `Contributions are collected via a secure payment system and held in a 
               bank-approved account until disbursed.`,
      isOpen: false
    },
    {
      question: 'Does the administrator get a fee?',
      answer: `No, the administrator does not receive a fee. They may gain exclusive 
               competition rewards.`,
      isOpen: false
    },
    {
      question: 'How do I invite people to join?',
      answer: `Use "My Stokvels" → select a stokvel → invite members. Invitations 
               are sent via email and SMS.`,
      isOpen: false
    },
    {
      question: 'Is my money secure?',
      answer: `We adhere strictly to legal and banking policies. Only amounts authorized 
               by you are debited.`,
      isOpen: false
    },
    {
      question: 'Is there interest earned on Savings Stokvels?',
      answer: `Currently we cannot earn interest. We are exploring opportunities 
               with our banking partners.`,
      isOpen: false
    },
    {
      question: 'Will contributions always be paid?',
      answer: `We have strict mechanisms to ensure contributions are tracked and 
               disbursed reliably.`,
      isOpen: false
    }
  ];

  searchTerm = '';

  ngAfterViewInit() {
    this.onScroll(); // trigger initial animation check
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.faqCards.forEach((card, index) => {
      const rect = card.nativeElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) {
        setTimeout(() => card.nativeElement.classList.add('in-view'), index * 100);
      }
    });
  }

  toggleFaq(faq: any) {
    faq.isOpen = !faq.isOpen;
  }

  get filteredFaqs() {
    if (!this.searchTerm) return this.faqs;
    return this.faqs.filter(f =>
      f.question.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      f.answer.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
