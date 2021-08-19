import { PriceDTO } from "../../generated";
import { IPricesState } from "./types";

export const initial: IPricesState = {
  getPrices: { status: "IDLE", data: [] },
  getPriceLists: { status: "IDLE", data: [] }
};
