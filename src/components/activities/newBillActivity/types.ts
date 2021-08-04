import { BillDTO } from "../../../generated";
import { FullBillDTO } from "../../../generated";
import { TUserCredentials } from "../../../state/main/types";

interface IOwnProps {
    billHomeRoute: string;
  }

export interface IStateProps {
    userCredentials: TUserCredentials;
    isLoading: boolean;
    hasSucceeded: boolean;
    hasFailed: boolean;
}

export interface IDispatchProps {
    createBill: (bill: FullBillDTO) => any;
    createBillReset: () => any;
}

export type TProps = IOwnProps & IStateProps & IDispatchProps;


export type TActivityTransitionState =
  | "IDLE"
  | "TO_NEW_BILL_RESET"
  | "TO_BILL_HOME";