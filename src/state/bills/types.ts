import { BillDTO } from "../../generated";
import { IApiResponse } from "../types";

export type IBillsState = {
  createBill: IApiResponse<null>;
  getBill: IApiResponse<BillDTO>;
};