export class StokvelType {
  private constructor(public readonly name: string) {}

  static readonly INVESTMENT = new StokvelType('investment');
  static readonly PROPERTY = new StokvelType('property');
  static readonly FAMILY = new StokvelType('family');
  static readonly BURIAL = new StokvelType('burial');
  static readonly CONTRIBUTION = new StokvelType('contribution');

  static values(): StokvelType[] {
    return [
      StokvelType.INVESTMENT,
      StokvelType.PROPERTY,
      StokvelType.FAMILY,
      StokvelType.BURIAL,
      StokvelType.CONTRIBUTION
    ];
  }
}

export interface Stokvel {
  id?: number;
  name: string;
  description: string;
  stokvelType: StokvelType;
  startDate: string;
  active?: boolean;
  memberCount?: number;
  contributionPerMember?: number;
  totalContributions?: number;
  targetAmount?: number;
  contributionAmount: number,
  adminUser?: string
  status: 'active' | 'pending' | 'completed';
  collectedAmount: number;
  monthlyContribution: number;
  nextPayoutDate: Date;
  myNextPayout?: Date;
  progress: number;
}
