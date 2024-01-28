import {Address} from '../types/address.type';
import {Type} from "class-transformer";
import {Roll} from "../types/roll.type";

/**
 * Normally I might prefer to just use a type, rather than a "whole" class,
 * however, using a class lets @nestjs/swagger auto-detect types for API
 * methods.
 *
 * In this case, the much-easier documentation is worth the cost of dealing
 * with a class.
 *
 * This is especially true for domain types, though they have their
 * own cases which may warrant a full class.
 */
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
