export class SingleItemResponse<T> {
  constructor(
    data: T
  ) {
    this.data = data;
  }

  data: T;
}
