import {Transform} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

/**
 * Normally I might prefer to just use a type, rather than a "whole" class,
 * however, using a class lets @nestjs/swagger auto-detect types for API
 * methods.
 *
 * In this case, the much-easier documentation is worth the cost of dealing
 * with a class.
 */
export class ListSchoolsQuery {
  @ApiProperty({default: 1, required: false})
  @Transform(({value}) => Number.parseInt(value, 10))
  page: number = 1;

  @ApiProperty({default: 10, required: false})
  @Transform(({value}) => Number.parseInt(value, 10))
  pageSize: number = 10;

  @ApiProperty({default: undefined, required: false})
  search?: string;
}
