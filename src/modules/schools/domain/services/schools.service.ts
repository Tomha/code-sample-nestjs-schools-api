import {Injectable} from '@nestjs/common';
import {SchoolRepository} from '../../infrastructure/repositories/school.repository';

@Injectable()
export class SchoolsService {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  async count(params: {search?: string}) {
    return this.schoolRepository.count(params);
  }

  async list(params: {page: number; pageSize: number; search?: string}) {
    return this.schoolRepository.list(params);
  }

  async get(id: string) {
    return this.schoolRepository.get({id});
  }
}
