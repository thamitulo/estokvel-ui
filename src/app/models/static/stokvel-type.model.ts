/**
 * DTO matching backend StokvelTypeDto.
 * Fetched from GET /api/public/stokvel-types
 */
export interface StokvelTypeDto {
  id: string;           // e.g. "investment", "rotational"
  name: string;         // e.g. "Investment Club"
  description: string;
  icon?: string;        // emoji or icon name for UI display
}

