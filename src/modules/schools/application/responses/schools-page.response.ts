import {Type} from "class-transformer";
import {School} from "../../domain/models/school.model";
import {PaginatedItemResponse} from "../../../app/application/responses/paginated-item.response";

/**
 * Normally I might prefer to just use a type, rather than a "whole" class,
 * however, using a class lets @nestjs/swagger auto-detect types for API
 * methods.
 *
 * In this case, the much-easier documentation is worth the cost of dealing
 * with a class.
 *
 * Unfortunately, extending PaginatedItemResponse is also required for nested
 * classes to work correctly in this way.
 */
export class SchoolsPageResponse extends PaginatedItemResponse<School> {
  @Type(() => Array<School>)
  data: School[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
  };
}
