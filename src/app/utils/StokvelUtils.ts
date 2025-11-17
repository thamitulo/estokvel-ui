import {Stokvel, StokvelResponse, StokvelType} from "../models/stokvel";

export class StokvelUtils {

  static getCollectedAmount(stokvel: StokvelResponse): number {
    return stokvel.monthlyContribution;
  }

  static getProgress(stokvel: StokvelResponse): number {
    const collected = this.getCollectedAmount(stokvel);
    const progress = (collected / (stokvel.targetAmount || 0)) * 100;
    return Math.min(progress, 100);
  }

  static getRemainingAmount(stokvel: StokvelResponse): number {
    const collected = this.getCollectedAmount(stokvel);
    return Math.max((stokvel?.targetAmount || 0 ) - collected, 0);
  }

  static isTargetReached(stokvel: StokvelResponse): boolean {
    return this.getProgress(stokvel) >= 100;
  }


  static getFormattedProgress(stokvel: StokvelResponse): string {
    return `${this.getProgress(stokvel).toFixed(1)}%`;
  }

  getCollectedAmount(stokvel: Stokvel): number {
    return stokvel?.collectedAmount ?? 0;
  }

  static progressColor(stokvel: StokvelResponse): string {
    const pct = this.getProgress(stokvel);
    if (pct >= 100) return 'primary';
    if (pct >= 50) return 'accent';
    return 'warn';
  }

  static defaultRules() {
    return [
      {
        id: 1,
        title: 'Regular Contributions',
        description: 'All members must make their contributions by the 7th of each month.',
        enabled: true
      },
      {
        id: 2,
        title: 'Transparency',
        description: 'All financial transactions and records will be visible to all members.',
        enabled: true
      },
      {
        id: 3,
        title: 'Meeting Attendance',
        description: 'Members should attend at least 75% of scheduled meetings.',
        enabled: true
      },
      {
        id: 4,
        title: 'Payout Schedule',
        description: 'Payouts will follow the agreed rotational schedule strictly.',
        enabled: true
      },
      {
        id: 5,
        title: 'New Member Approval',
        description: 'New members must be approved by majority vote of existing members.',
        enabled: true
      }
    ];
  }

  static getStokvelTypeDisplayName(typeName: string): string {
    const displayNames: { [key: string]: string } = {
      [StokvelType.INVESTMENT.name]: 'Investment Group',
      [StokvelType.PROPERTY.name]: 'Property Stokvel',
      [StokvelType.FAMILY.name]: 'Family Stokvel',
      [StokvelType.BURIAL.name]: 'Burial Stokvel',
      [StokvelType.MONTHLY.name]: 'Monthly Rotational Stokvel'
    };

    return displayNames[typeName] || typeName;
  }
}
