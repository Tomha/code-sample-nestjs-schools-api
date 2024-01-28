import {
  Controller,
  DefaultValuePipe,
  Get, NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import {SchoolsService} from '../../../domain/services/schools.service';
import {ListSchoolsQuery} from "../queries/list-schools.query";

@Controller({
  path: 'v1',
})
export class SchoolsController {
  constructor(private readonly schools: SchoolsService) {}

  @Get('/schools/:id')
  public async getSchool(@Param('id') id: string) {
    const school = await this.schools.get(id);

    if (!school) throw new NotFoundException(`School "${id}" not found`);

    return {data: school};
  }

  @Get('/schools')
  public async listSchools(
    @Query() queryParams: ListSchoolsQuery,
  ) {
    const schools = await this.schools.list({
      page: queryParams.page,
      pageSize: queryParams.pageSize,
      search: queryParams.search,
    });

    const total = await this.schools.count({
      search: queryParams.search,
    });

    return {
      data: schools,
      meta: {
        page: queryParams.page,
        pageSize: queryParams.pageSize,
        count: schools.length,
        total,
      },
    }
  }
}
