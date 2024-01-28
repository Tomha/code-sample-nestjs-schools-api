import {Address} from '../types/address.type';
import {Type} from "class-transformer";
import {Roll} from "../types/roll.type";

export class School {
  id: string;
  name: string;
  telephone?: string;
  fax?: string;
  email?: string;
  contactName?: string;
  url?: string;
  @Type(() => Address)
  addressOne?: Address;
  @Type(() => Address)
  addressTwo?: Address;
  urbanRuralIndicator: string;
  type: string;
  definition: string;
  authority: string;
  schoolDonations: string;
  coEducationStatus: string;
  KMEPeakBody: string;
  takiwa: string;
  territorialAuthority: string;
  regionalCouncil: string;
  localOfficeName: string;
  educationRegion: string;
  generalElectorate: string;
  maoriElectorate: string;
  statisticalAreaTwoCode: string;
  statisticalAreaTwoDescription: string;
  ward: string;
  colId: string;
  colName: string;
  latitude: number;
  longitude: number;
  enrolmentScheme: string;
  @Type(() => Roll)
  roll: Roll;
  isolationIndex: string;
  languageOfInstruction: string;
  boardingFacilities: string;
  cohortEntry: string;
  status: string;
  dateSchoolOpened?: Date;
}
