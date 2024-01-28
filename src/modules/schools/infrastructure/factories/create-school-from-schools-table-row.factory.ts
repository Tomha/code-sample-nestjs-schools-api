import {SchoolsTableRow} from '../types/schools-table-row';
import {School} from '../../domain/models/school.model';

export const createSchoolFromSchoolsTableRowFactory = (
  schoolsTableRow: SchoolsTableRow,
): School => {
  return {
    id: schoolsTableRow.School_Id,
    name: schoolsTableRow.Org_Name,
    telephone: schoolsTableRow.Telephone,
    fax: schoolsTableRow.Fax,
    email: schoolsTableRow.Email,
    contactName: schoolsTableRow.Contact1_Name,
    url: schoolsTableRow.URL,
    addressOne: {
      lineOne: schoolsTableRow.Add1_Line1,
      suburb: schoolsTableRow.Add1_Suburb,
      city: schoolsTableRow.Add1_City,
    },
    addressTwo: {
      lineOne: schoolsTableRow.Add2_Line1,
      suburb: schoolsTableRow.Add2_Suburb,
      city: schoolsTableRow.Add2_City,
      postalCode: schoolsTableRow.Add2_Postal_Code,
    },
    urbanRuralIndicator: schoolsTableRow.Urban_Rural_Indicator,
    type: schoolsTableRow.Org_Type,
    definition: schoolsTableRow.Definition,
    authority: schoolsTableRow.Authority,
    schoolDonations: schoolsTableRow.School_Donations,
    coEducationStatus: schoolsTableRow.CoEd_Status,
    KMEPeakBody: schoolsTableRow.KMEPeakBody,
    takiwa: schoolsTableRow.Takiwā,
    territorialAuthority: schoolsTableRow.Territorial_Authority,
    regionalCouncil: schoolsTableRow.Regional_Council,
    localOfficeName: schoolsTableRow.Local_Office_Name,
    educationRegion: schoolsTableRow.Education_Region,
    generalElectorate: schoolsTableRow.General_Electorate,
    maoriElectorate: schoolsTableRow.Māori_Electorate,
    statisticalAreaTwoCode: schoolsTableRow.Statistical_Area_2_Code,
    statisticalAreaTwoDescription:
      schoolsTableRow.Statistical_Area_2_Description,
    ward: schoolsTableRow.Ward,
    colId: schoolsTableRow.Col_Id,
    colName: schoolsTableRow.Col_Name,
    latitude: parseInt(schoolsTableRow.Latitude, 10),
    longitude: parseInt(schoolsTableRow.Longitude, 10),
    enrolmentScheme: schoolsTableRow.Enrolment_Scheme,
    roll: {
      date: schoolsTableRow.Roll_Date
        ? new Date(schoolsTableRow.Roll_Date)
        : undefined,
      total: parseInt(schoolsTableRow.Total, 10),
      european: parseInt(schoolsTableRow.European, 10),
      maori: parseInt(schoolsTableRow.Māori, 10),
      pacific: parseInt(schoolsTableRow.Pacific, 10),
      asian: parseInt(schoolsTableRow.Asian, 10),
      melaa: parseInt(schoolsTableRow.MELAA, 10),
      other: parseInt(schoolsTableRow.Other, 10),
      international: parseInt(schoolsTableRow.International, 10),
    },
    isolationIndex: schoolsTableRow.Isolation_Index,
    languageOfInstruction: schoolsTableRow.Language_of_Instruction,
    boardingFacilities: schoolsTableRow.BoardingFacilities,
    cohortEntry: schoolsTableRow.CohortEntry,
    status: schoolsTableRow.Status,
    dateSchoolOpened: schoolsTableRow.DateSchoolOpened
      ? new Date(schoolsTableRow.DateSchoolOpened)
      : undefined,
  };
};
