import { Dispatch } from "redux";
import isEmpty from "lodash.isempty";
import { number } from "yup";
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
  SEARCH_BILL_FAIL,
  SEARCH_BILL_LOADING,
  SEARCH_BILL_SUCCESS,
  GET_BILL_LOADING,
  GET_BILL_SUCCESS,
  GET_BILL_FAIL,
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
        (payload) => {
          dispatch({
            type: CREATE_BILL_SUCCESS,
          });
        },
        (error) => {
          dispatch({
            type: CREATE_BILL_FAIL,
            error: error,
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

export const getBill =
  (code: number) =>
    (dispatch: Dispatch<IAction<BillDTO, {}>>): void => {
      dispatch({
        type: GET_BILL_LOADING,
      });
      billControllerApi.getBillUsingGET({ id: code }).subscribe(
          (payload) => {
            if (typeof payload === "object" && !isEmpty(payload)) {
              dispatch({
                type: GET_BILL_SUCCESS,
                payload: payload,
              });
            } else {
              dispatch({
                type: GET_BILL_SUCCESS,
                payload: [],
              });
            }
          },
          (error) => {
            dispatch({
              type: GET_BILL_FAIL,
              error,
            });
          }
        );
    };