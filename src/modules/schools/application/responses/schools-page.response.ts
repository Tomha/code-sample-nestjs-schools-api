import {Type} from "class-transformer";
import {School} from "../../domain/models/school.model";
import {PaginatedItemResponse} from "../../../app/application/responses/paginated-item.response";

export class SchoolsPageResponse extends PaginatedItemResponse<School> {
  @Type(() => Array<School>)
  data: School[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
  };
}
