import { PriceDTO } from "../../generated";
import { PriceListDTO } from "../../generated";
import { IApiResponse } from "../types";

export type IPricesState = {
  getPrices: IApiResponse<Array<PriceDTO>>;
  getPriceLists: IApiResponse<Array<PriceListDTO>>;
};