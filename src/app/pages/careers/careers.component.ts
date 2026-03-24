import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  experience: string;
  salary: string;
  postedDate: string;
}

@Component({
  selector: 'app-careers',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule
  ],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
  standalone: true
})
export class CareersComponent implements OnInit {
  selectedDepartment: string = 'all';
  selectedLocation: string = 'all';
  selectedType: string = 'all';

  allPositions: JobPosition[] = [];
  filteredPositions: JobPosition[] = [];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadPositions();
    this.filterPositions();
  }

  loadPositions(): void {
    this.allPositions = [
      {
        id: 1,
        title: 'Senior Full Stack Developer',
        department: 'engineering',
        location: 'remote',
        type: 'full-time',
        description: 'Lead development of our core stokvel platform using modern web technologies. You\'ll work on both frontend and backend systems that handle thousands of transactions daily.',
        requirements: [
          '5+ years experience with Angular/React and Node.js',
          'Strong knowledge of TypeScript and modern JavaScript',
          'Experience with microservices architecture',
          'Knowledge of AWS/GCP cloud services',
          'Experience with financial systems (bonus)'
        ],
        benefits: [
          'Competitive salary + equity',
          'Remote-first work environment',
          'Latest tech equipment',
          'Conference & learning budget',
          'Health & wellness allowance'
        ],
        experience: '5+ years',
        salary: 'R900k - R1.2m',
        postedDate: '2 days ago'
      },
      {
        id: 2,
        title: 'Product Manager',
        department: 'product',
        location: 'johannesburg',
        type: 'full-time',
        description: 'Own the product roadmap for our stokvel management platform. Work closely with engineering, design, and users to build features that solve real problems.',
        requirements: [
          '3+ years in product management',
          'Experience in fintech or financial services',
          'Strong analytical and UX skills',
          'Excellent communication skills',
          'Technical background preferred'
        ],
        benefits: [
          'Leadership role in growing company',
          'Direct impact on product direction',
          'Generous leave policy',
          'Performance bonuses',
          'Team leadership opportunities'
        ],
        experience: '3+ years',
        salary: 'R800k - R1m',
        postedDate: '1 week ago'
      },
      {
        id: 3,
        title: 'UX/UI Designer',
        department: 'design',
        location: 'cape-town',
        type: 'full-time',
        description: 'Design intuitive and beautiful interfaces for our mobile and web applications. Focus on creating exceptional user experiences for our diverse user base.',
        requirements: [
          '3+ years in product design',
          'Strong portfolio of mobile/web apps',
          'Proficient in Figma/Sketch',
          'Understanding of UX research methods',
          'Experience with design systems'
        ],
        benefits: [
          'Creative freedom and ownership',
          'Work with latest design tools',
          'Regular design critiques',
          'Attend design conferences',
          'Flexible work arrangements'
        ],
        experience: '3+ years',
        salary: 'R600k - R800k',
        postedDate: '3 days ago'
      },
      {
        id: 4,
        title: 'Growth Marketing Lead',
        department: 'marketing',
        location: 'remote',
        type: 'full-time',
        description: 'Develop and execute growth strategies to acquire and retain users. Focus on digital marketing, partnerships, and community building.',
        requirements: [
          '4+ years in growth marketing',
          'Experience with SaaS/fintech products',
          'Strong analytical skills (Google Analytics, etc.)',
          'Experience with CRM and marketing automation',
          'Knowledge of South African market'
        ],
        benefits: [
          'Performance-based bonuses',
          'Marketing budget autonomy',
          'Team leadership role',
          'Conference attendance',
          'Remote work flexibility'
        ],
        experience: '4+ years',
        salary: 'R700k - R900k',
        postedDate: '5 days ago'
      },
      {
        id: 5,
        title: 'Backend Engineer',
        department: 'engineering',
        location: 'pretoria',
        type: 'full-time',
        description: 'Build and scale our backend services handling payments, notifications, and user management. Ensure high availability and security.',
        requirements: [
          '3+ years with Node.js/Python/Java',
          'Experience with PostgreSQL/MongoDB',
          'Knowledge of REST APIs and microservices',
          'Understanding of security best practices',
          'Experience with payment systems (bonus)'
        ],
        benefits: [
          'Work on challenging scale problems',
          'Modern tech stack',
          'Continuous learning opportunities',
          'Performance bonuses',
          'Flexible hours'
        ],
        experience: '3+ years',
        salary: 'R700k - R950k',
        postedDate: '1 week ago'
      },
      {
        id: 6,
        title: 'Customer Success Manager',
        department: 'operations',
        location: 'durban',
        type: 'full-time',
        description: 'Ensure our users get maximum value from our platform. Build relationships with stokvel groups and gather feedback to improve our product.',
        requirements: [
          '2+ years in customer success',
          'Excellent communication skills',
          'Experience with CRM systems',
          'Understanding of stokvel culture',
          'Problem-solving mindset'
        ],
        benefits: [
          'Direct user impact',
          'Commission on upsells',
          'Travel opportunities',
          'Team building events',
          'Career growth path'
        ],
        experience: '2+ years',
        salary: 'R400k - R550k',
        postedDate: '2 weeks ago'
      },
      {
        id: 7,
        title: 'DevOps Engineer',
        department: 'engineering',
        location: 'remote',
        type: 'full-time',
        description: 'Build and maintain our CI/CD pipelines, monitoring systems, and cloud infrastructure. Ensure our platform is reliable and scalable.',
        requirements: [
          '3+ years in DevOps/SRE role',
          'Expertise with AWS/GCP',
          'Experience with Docker/Kubernetes',
          'Knowledge of infrastructure as code',
          'Strong scripting skills'
        ],
        benefits: [
          'Work on critical infrastructure',
          'Latest cloud technologies',
          'On-call compensation',
          'Training certifications paid',
          'Remote work options'
        ],
        experience: '3+ years',
        salary: 'R800k - R1.1m',
        postedDate: '4 days ago'
      },
      {
        id: 8,
        title: 'Finance Intern',
        department: 'finance',
        location: 'johannesburg',
        type: 'internship',
        description: 'Support our finance team with bookkeeping, financial reporting, and analysis. Great opportunity to learn fintech finance operations.',
        requirements: [
          'Currently pursuing finance/accounting degree',
          'Basic Excel skills',
          'Attention to detail',
          'Willingness to learn',
          'Good communication skills'
        ],
        benefits: [
          'Paid internship',
          'Mentorship program',
          'Real-world experience',
          'Potential for full-time offer',
          'Networking opportunities'
        ],
        experience: 'Student',
        salary: 'Stipend',
        postedDate: '1 week ago'
      }
    ];
  }

  filterPositions(): void {
    this.filteredPositions = this.allPositions.filter(position => {
      const departmentMatch = this.selectedDepartment === 'all' || position.department === this.selectedDepartment;
      const locationMatch = this.selectedLocation === 'all' || position.location === this.selectedLocation;
      const typeMatch = this.selectedType === 'all' || position.type === this.selectedType;

      return departmentMatch && locationMatch && typeMatch;
    });
  }

  clearFilters(): void {
    this.selectedDepartment = 'all';
    this.selectedLocation = 'all';
    this.selectedType = 'all';
    this.filterPositions();
  }

  applyForPosition(position: JobPosition): void {
    // In a real app, this would navigate to an application form
    this.snackBar.open(`Applying for: ${position.title}`, 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });

    // You could also open a modal or navigate to application page
    // this.router.navigate(['/careers/apply', position.id]);
  }

  sendGeneralApplication(): void {
    this.snackBar.open('Opening general application form...', 'Close', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });

    // Open general application modal or page
    // window.open('/careers/general-application', '_blank');
  }
}
