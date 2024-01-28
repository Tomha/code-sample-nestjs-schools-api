import {Transform} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class ListSchoolsQuery {
  @ApiProperty({default: 1, required: false})
  @Transform( ({value}) => Number.parseInt(value))
  page: number;
  @ApiProperty({default: 10, required: false})
  @Transform( ({value}) => Number.parseInt(value))
  pageSize: number;
  @ApiProperty({default: undefined, required: false})
  search?: string;
}
