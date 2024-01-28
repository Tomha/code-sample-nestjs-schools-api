import {School} from '../models/school.model';

/**
 * This contract is implemented as a class rather than just a type, so that it the class can be used as a provider in the NestJS DI container.
 */
export class SchoolRepositoryContract {
  list(params: {
    page?: number;
    pageSize?: number;
    search?: string;
  }): Promise<School[]> {
    throw new Error('Method not implemented.');
  }

  get(params: {id: string}): Promise<School | null> {
    throw new Error('Method not implemented.');
  }
}
