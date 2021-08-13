import { BillDTO } from "../../../generated";
import { PatientDTO } from "../../../generated";
import { MedicalDTO } from "../../../generated";
import { FullBillDTO } from "../../../generated";
import { TUserCredentials } from "../../../state/main/types";
import { IAction, TAPIResponseStatus } from "../../../state/types";


interface IOwnProps {
    billHomeRoute: string;
  }

export interface IStateProps {
    userCredentials: TUserCredentials;
    isLoading: boolean;
    hasSucceeded: boolean;
    hasFailed: boolean;
    med: Array<MedicalDTO> | undefined;
    getMedStat: TAPIResponseStatus;
}

export interface IDispatchProps {
    createBill: (bill : FullBillDTO) => any;
    createBillReset: () => any;
    getMedicals: () => any;
}

export type TProps = IOwnProps & IStateProps & IDispatchProps;

export type TValues = Record<TFieldName, string>;

export type TFieldName =
  | "id"
  | "firstName"
  | "secondName"
  | "birthDate"
  | "address";



export type TActivityTransitionState = "IDLE" | "TO_PATIENT_DETAILS";