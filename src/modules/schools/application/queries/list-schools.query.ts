import {Transform} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

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
