import { Dispatch } from "redux";
import {
    Configuration,
    BillControllerApi,
    BillDTO,
    FullBillDTO,
} from "../../generated";
import { applyTokenMiddleware } from "../../libraries/apiUtils/applyTokenMiddleware";
import { IAction } from "../types";
import {
    CREATE_BILL_FAIL,
    CREATE_BILL_LOADING,
    CREATE_BILL_RESET,
    CREATE_BILL_SUCCESS,
} from "./consts";

const billControllerApi = new BillControllerApi(
    new Configuration({ middleware: [applyTokenMiddleware] })
);

export const createBill =
    (newBillDto: FullBillDTO) =>
        (dispatch: Dispatch<IAction<null, {}>>): void => {
            dispatch({
                type: CREATE_BILL_LOADING,
            });

            billControllerApi.newBillUsingPOST({ newBillDto }).subscribe(
                () => {
                    dispatch({
                        type: CREATE_BILL_SUCCESS,
                    });
                },
                (error) => {
                    dispatch({
                        type: CREATE_BILL_FAIL,
                        error,
                    });
                }
            );
        };

export const createBillReset =
    () =>
        (dispatch: Dispatch<IAction<null, {}>>): void => {
            dispatch({
                type: CREATE_BILL_RESET,
            });
        };
