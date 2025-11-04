export class StokvelType {
  name: string;

  constructor(name: string) {
    this.name = name;
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
  contributionAmount?: number,
  adminUser?: string
}
