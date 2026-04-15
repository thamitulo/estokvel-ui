/**
 * Simplified paginated response matching the backend PaginatedResponse<T> DTO.
 * Legacy Spring Page<T> fields are kept as optional for backwards compatibility.
 */
export interface PaginatedResponse<T> {
  content: T[];
  page: number;           // Current page index (0-based) - matches backend DTO
  size: number;
  totalElements: number;
  totalPages: number;
  // Legacy Spring Page<T> fields (optional, retained for backward compatibility)
  number?: number;        // Same as page, used by Spring Page<T>
  numberOfElements?: number;
  pageable?: any;
  first?: boolean;
  last?: boolean;
  empty?: boolean;
  sort?: any;
}


export interface PaginationParams {
  page?: number;
  size?: number;
  sort?: string;
  direction?: 'asc' | 'desc';
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  timestamp?: string;
}

export interface StokvelJoinData {
  stokvelId: number;
  stokvelName: string;
  currentUserId: string;
  userProfile: any;
  monthlyContribution?: number;
}
