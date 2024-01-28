import {Controller, Get} from '@nestjs/common';
import {SchoolsService} from '../../../domain/services/schools.service';

@Controller()
export class SchoolsController {
  constructor(private readonly schools: SchoolsService) {}

  @Get('/schools/:id')
  public async getSchool(id: string) {
    return this.schools.get(id);
  }

  @Get('/schools')
  public async listSchools() {
    return this.schools.list({
      page: 0,
      pageSize: 10,
      search: '',
    });
  }
}
