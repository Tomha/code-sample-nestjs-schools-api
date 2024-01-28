import {School} from "../../domain/models/school.model";
import {Type} from "class-transformer";
import {SingleItemResponse} from "../../../app/application/responses/single-item.response";

export class SchoolResponse extends SingleItemResponse<School>{
  @Type(() => School)
  data: School;
}
