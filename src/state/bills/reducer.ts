import produce from "immer";
import { IAction } from "../types";
import {
    CREATE_BILL_FAIL,
    CREATE_BILL_LOADING,
    CREATE_BILL_RESET,
    CREATE_BILL_SUCCESS,
    GET_BILL_SUCCESS,
    GET_BILL_LOADING,
    GET_BILL_FAIL
} from "./consts";
import { initial } from "./initial";
import { IBillsState } from "./types";

export default produce((draft: IBillsState, action: IAction<any, any>) => {
    switch (action.type) {

        /**
         * CREATE_BILL
         */
        case CREATE_BILL_LOADING: {
            draft.createBill.status = "LOADING";
            break;
        }

        case CREATE_BILL_SUCCESS: {
            draft.createBill.status = "SUCCESS";
            delete draft.createBill.error;
            break;
        }

        case CREATE_BILL_FAIL: {
            draft.createBill.status = "FAIL";
            draft.createBill.error = action.error;
            break;
        }

        case CREATE_BILL_RESET: {
            draft.createBill.status = "IDLE";
            delete draft.createBill.error;
            break;
        }

        case GET_BILL_LOADING: {
            draft.getBill.status = "LOADING";
            break;
          }
      
          case GET_BILL_SUCCESS: {
            if (action.payload.length > 0) {
              draft.getBill.status = "SUCCESS";
            } else {
              draft.getBill.status = "SUCCESS_EMPTY";
            }
            draft.getBill.data = action.payload;
            delete draft.getBill.error;
            break;
          }
      
          case GET_BILL_FAIL: {
            draft.getBill.status = "FAIL";
            draft.getBill.error = action.error;
            break;
          }
    }
}, initial);