interface ApiResponse<T> {
  page: number;
  total_pages: number;
  results: T[];
}

interface Category {
  id: number;
  name: string;
}

interface CategoryResponse {
  genres: Category[];
}

export type { ApiResponse, CategoryResponse, Category };
