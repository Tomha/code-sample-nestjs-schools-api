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
