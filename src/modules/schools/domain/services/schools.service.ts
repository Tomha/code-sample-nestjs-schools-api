import {Injectable} from '@nestjs/common';
import {SchoolRepositoryContract} from '../contracts/school-repository.contract';

@Injectable()
export class SchoolsService {
  constructor(private readonly schoolRepository: SchoolRepositoryContract) {}

  async list(params: {page: number; pageSize: number; search: string}) {
    return this.schoolRepository.list(params);
  }

  async get(id: string) {
    return this.schoolRepository.get({id});
  }
}
