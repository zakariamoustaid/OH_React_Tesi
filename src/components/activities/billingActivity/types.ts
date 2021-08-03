import { BillDTO } from "../../../generated";
import { TUserCredentials } from "../../../state/main/types";
import { IAction, TAPIResponseStatus } from "../../../state/types";

export interface IStateProps {
    userCredentials?: TUserCredentials;
}

export interface IDispatchProps {

}

export type TProps = IStateProps & IDispatchProps;
