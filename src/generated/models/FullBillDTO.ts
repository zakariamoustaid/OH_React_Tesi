// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    BillDTO,
    BillItemsDTO,
    BillPaymentsDTO,
} from './';

/**
 * @export
 * @interface FullBillDTO
 */
export interface FullBillDTO {
    /**
     * @type {BillDTO}
     * @memberof FullBillDTO
     */
    bill?: BillDTO;
    /**
     * @type {Array<BillItemsDTO>}
     * @memberof FullBillDTO
     */
    billItems?: Array<BillItemsDTO>;
    /**
     * @type {Array<BillPaymentsDTO>}
     * @memberof FullBillDTO
     */
    billPayments?: Array<BillPaymentsDTO>;
}
