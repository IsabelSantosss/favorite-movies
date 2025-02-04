export interface GetAllResponseType<T> {
      page: number;
      results: T[] | T;
      totalPages: number;
      totalResults: number;
}