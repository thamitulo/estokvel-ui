/**
 * DTO matching backend ActivityDto.
 * Fetched from GET /api/dashboard/recent-activities
 */
export interface ActivityDto {
  type: 'contribution' | 'payout' | 'invitation' | 'update' | 'withdrawal' | string;
  description: string;
  stokvelName: string;
  amount?: number;      // Optional - backend BigDecimal serialized as number
  date: string;         // ISO date string - backend LocalDateTime
}

