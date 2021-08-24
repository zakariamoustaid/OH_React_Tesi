import billDTO from "../../mockServer/fixtures/billDTO";
import { BillDTO } from "../../generated";
import { IBillsState } from "./types";

export const initial: IBillsState = {
  newBill: { status: "IDLE" },
  getBill: { status: "IDLE", data: {} }
};
