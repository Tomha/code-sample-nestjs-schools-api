import {Injectable} from '@nestjs/common';
import {School} from '../../domain/models/school.model';
import {Database} from 'sqlite';
import {SchoolsTableRow} from '../types/schools-table-row';
import {createSchoolFromSchoolsTableRowFactory} from '../factories/create-school-from-schools-table-row.factory';
import {SchoolRepositoryContract} from '../../domain/contracts/school-repository.contract';

@Injectable()
export class SchoolRepository extends SchoolRepositoryContract {
  constructor(private readonly sqlite: Database) {
    super();
  }

  async list(params: {
    page: number;
    pageSize: number;
    search: string;
  }): Promise<School[]> {
    const offset = params.page * params.pageSize;

    const results = await this.sqlite.all<SchoolsTableRow[]>(
      `SELECT * FROM schools WHERE Org_name = ? LIMIT ? OFFSET ?`,
      [params.search, params.pageSize, offset],
    );

    return results.map(createSchoolFromSchoolsTableRowFactory);
  }

  async get(params: {id: string}): Promise<School | null> {
    const result = await this.sqlite.get<SchoolsTableRow>(
      `SELECT * FROM schools WHERE id = ?`,
      [params.id],
    );

    if (!result) return null;

    return createSchoolFromSchoolsTableRowFactory(result);
  }
}
