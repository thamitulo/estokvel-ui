/**
 * DTO matching backend SavingsTermDto.
 * Fetched from GET /api/public/savings-terms
 */
export interface SavingsTermDto {
  id: number;
  name: string;         // e.g. "6 Months"
  months: number;       // e.g. 6
  description: string;
}

