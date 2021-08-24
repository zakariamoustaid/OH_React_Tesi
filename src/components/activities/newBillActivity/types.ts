import { Dispatch, SetStateAction } from "react";
import { BillDTO, PatientDTO } from "../../../generated";
import { BillItemsDTO } from "../../../generated";
import { PriceDTO } from "../../../generated";
import { PriceListDTO } from "../../../generated";
import { MedicalDTO } from "../../../generated";
import { FullBillDTO } from "../../../generated";
import { TUserCredentials } from "../../../state/main/types";
import {TAPIResponseStatus } from "../../../state/types";

interface IOwnProps {
    billHomeRoute: string;
  }

//
  //Interface used for share variable prices and item-setItem
  //between child and father
//
export interface PricesState {
  prices: Array<PriceDTO> | undefined;
  items: BillItemsDTO[];
  setItems: Dispatch<SetStateAction<BillItemsDTO[]>>;
}

export interface ItemsState {
  items: Array<Item> | undefined;
}

export interface IStateProps {
    userCredentials: TUserCredentials;
    med: Array<MedicalDTO> | undefined;
    bill: BillDTO | undefined;
    prices: Array<PriceDTO> | undefined;
    getMedStat: TAPIResponseStatus;
    priceLists: Array<PriceListDTO> | undefined;
}

export interface IDispatchProps {
    newBill: (newBillDto: FullBillDTO) => any;
    getPrices: () => any;
    getMedicals: () => any;
    getPriceLists: () => any;
}

export type TProps = IOwnProps & IStateProps & IDispatchProps;

export type Item = {
  "hashCode": number | undefined,
  "id": number | undefined,
  "price": boolean | undefined,
  "billId": number | undefined,
  "priceId": number | undefined,
  "itemDescription": string | undefined,
  "itemAmount": number | undefined,
  "itemQuantity": number | undefined,
  "itemDisplayCode": string | undefined,
  "itemId": number | undefined,
}


export type TActivityTransitionState = "IDLE" | "TO_PATIENT_DETAILS";