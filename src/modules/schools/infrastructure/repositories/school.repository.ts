import {Injectable} from '@nestjs/common';
import {School} from '../../domain/models/school.model';
import {Database} from 'sqlite';
import {SchoolsTable} from "../fixtures/schools-table";
import {SchoolsTableRow} from '../types/schools-table-row';
import {createSchoolFromSchoolsTableRowFactory} from '../factories/create-school-from-schools-table-row.factory';

@Injectable()
export class SchoolRepository {
  constructor(private readonly sqlite: Database) {}

  async get(params: {id: string}): Promise<School | null> {
    const result = await this.sqlite.get<SchoolsTableRow>(
      `SELECT * FROM schools WHERE ${SchoolsTable.School_Id} = :id`,
      {
        ':id': params.id,
      },
    );

    if (!result) return null;

    return createSchoolFromSchoolsTableRowFactory(result);
  }

  async list(params: {
    page: number;
    pageSize: number;
    search?: string;
  }): Promise<School[]> {
    let queryString = `SELECT * FROM schools`;
    let queryParams: Record<string, any> = {};

    if (params.search) {
      queryString += ` WHERE ${SchoolsTable.Org_Name} LIKE '%' || :search || '%'`;
      queryParams[':search'] = params.search;
    }

    queryString += ` LIMIT :limit`;
    queryParams[':limit'] = params.pageSize;

    queryString += ` OFFSET :offset`;
    queryParams[':offset'] = (params.page - 1) * params.pageSize;

    const results = await this.sqlite.all(queryString, queryParams);

    return results.map(createSchoolFromSchoolsTableRowFactory);
  }

  async count(params: {
    search?: string;
  }): Promise<number> {
    let queryString = `SELECT COUNT(*) as count FROM schools`;
    let queryParams: Record<string, any> = {};

    if (params.search) {
      queryString += ` WHERE ${SchoolsTable.Org_Name} LIKE '%' || :search || '%'`;
      queryParams[':search'] = params.search;
    }

    const result = await this.sqlite.get<{count: number}>(queryString, queryParams);

    return result?.count || 0;
  }
}
