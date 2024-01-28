import {Controller, Get, NotFoundException, Param, Query, UsePipes} from '@nestjs/common';
import {SchoolsService} from '../../domain/services/schools.service';
import {ListSchoolsQuery} from '../queries/list-schools.query';
import {School} from '../../domain/models/school.model';
import {SchoolResponse} from '../responses/school.response';
import {SchoolsPageResponse} from '../responses/schools-page.response';
import {ApiAcceptedResponse, ApiNotFoundResponse, ApiOkResponse} from "@nestjs/swagger";
import {plainToClass, plainToClassFromExist, plainToInstance} from "class-transformer";

@Controller({
  path: 'v1',
})
export class SchoolsController {
  constructor(private readonly schools: SchoolsService) {}

  @Get('/schools/:id')
  @ApiOkResponse({
    description: 'The school with the given ID',
    type: SchoolResponse
  })
  @ApiNotFoundResponse({description: 'A school with the given ID does not exist'})
  public async getSchool(
    @Param('id') id: string,
  ): Promise<SchoolResponse> {
    const school = await this.schools.get(id);

    if (!school) throw new NotFoundException(`A school with the ID "${id}" does not exist`);

    return new SchoolResponse(school);
  }

  @Get('/schools')
  @ApiOkResponse({
    description: 'A page of schools',
    type: SchoolsPageResponse,
  })
  public async listSchools(
    @Query() queryParams: ListSchoolsQuery,
  ): Promise<SchoolsPageResponse> {
    const schools = await this.schools.list(queryParams);
    const total = await this.schools.count(queryParams);

    return new SchoolsPageResponse(schools, {...queryParams, total});
  }
}
