/**
 * Normally I might prefer to just use a type, rather than a "whole" class,
 * however, using a class lets @nestjs/swagger auto-detect types for API
 * methods.
 *
 * In this case, the much-easier documentation is worth the cost of dealing
 * with a class.
 */
export class PaginatedItemResponse<T> {
  constructor(
    data: T[],
    meta: {
      page: number;
      pageSize: number;
      total: number;
    }) {
      this.data = data;
      this.meta = meta;
  }

  data: T[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
  };
}
