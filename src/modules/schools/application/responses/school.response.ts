import {School} from "../../domain/models/school.model";
import {Type} from "class-transformer";
import {SingleItemResponse} from "../../../app/application/responses/single-item.response";

/**
 * Normally I might prefer to just use a type, rather than a "whole" class,
 * however, using a class lets @nestjs/swagger auto-detect types for API
 * methods.
 *
 * In this case, the much-easier documentation is worth the cost of dealing
 * with a class.
 *
 * Unfortunately, extending SingleItemResponse is also required for nested
 * classes to work correctly in this way.
 */
export class SchoolResponse extends SingleItemResponse<School>{
  @Type(() => School)
  data: School;
}
