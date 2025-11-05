import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent {

  year = new Date().getFullYear();

  currentYear: number = new Date().getFullYear();
  socialLinks: any = {};
  contactInfo: any = {};
  appLinks = {
    playStore: 'https://play.google.com/store/apps/details?id=co.za.estokvel',
    appStore: 'https://apps.apple.com/za/app/estokvel/id123456789'
  };

  constructor() {}

  ngOnInit() {
    this.socialLinks = this.getSocialLinks();
    this.contactInfo = this.getContactInfo();
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

  getSocialLinks() {
    return {
      facebook: 'https://facebook.com/estokvel',
      twitter: 'https://twitter.com/estokvel',
      instagram: 'https://instagram.com/estokvel',
      linkedin: 'https://linkedin.com/company/estokvel',
      youtube: 'https://youtube.com/estokvel'
    };
  }
}
