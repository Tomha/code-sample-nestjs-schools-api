/**
 * Normally I might prefer to just use a type, rather than a "whole" class,
 * however, using a class lets @nestjs/swagger auto-detect types for API
 * methods.
 *
 * In this case, the much-easier documentation is worth the cost of dealing
 * with a class.
 *
 * This is especially true for domain types, though they have their
 * own cases which may warrant a full class.
 */
export class Roll {
  date?: Date;
  total: number;
  european: number;
  maori: number;
  pacific: number;
  asian: number;
  melaa: number;
  other: number;
  international: number;
}
