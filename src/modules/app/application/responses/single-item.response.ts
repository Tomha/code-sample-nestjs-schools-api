/**
 * Normally I might prefer to just use a type, rather than a "whole" class,
 * however, using a class lets @nestjs/swagger auto-detect types for API
 * methods.
 *
 * In this case, the much-easier documentation is worth the cost of dealing
 * with a class.
 */
export class SingleItemResponse<T> {
  constructor(
    data: T
  ) {
    this.data = data;
  }

  data: T;
}
