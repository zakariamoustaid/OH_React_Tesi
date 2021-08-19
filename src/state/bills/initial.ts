import billDTO from "../../mockServer/fixtures/billDTO";
import { BillDTO } from "../../generated";
import { IBillsState } from "./types";

export const initial: IBillsState = {
  createBill: { status: "IDLE" },
  getBill: { status: "IDLE", data: {} }
};
