export interface GetResponse<T> {
      page: number;
      results: T[] | T;
      totalPages: number;
      totalResults: number;
}