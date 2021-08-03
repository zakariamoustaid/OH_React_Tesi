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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    MalnutritionDTO,
} from '../models';

export interface DeleteMalnutritionUsingDELETERequest {
    malnutritionDTO: MalnutritionDTO;
}

export interface GetLastMalnutritionUsingGETRequest {
    idPatient: number;
}

export interface GetMalnutritionUsingGETRequest {
    idAdmission: string;
}

export interface NewMalnutritionUsingPOSTRequest {
    malnutritionDTO: MalnutritionDTO;
}

export interface UpdateMalnutritionUsingPUTRequest {
    malnutritionDTO: MalnutritionDTO;
}

/**
 * no description
 */
export class MalnutritionControllerApi extends BaseAPI {

    /**
     * deleteMalnutrition
     */
    deleteMalnutritionUsingDELETE({ malnutritionDTO }: DeleteMalnutritionUsingDELETERequest): Observable<boolean>
    deleteMalnutritionUsingDELETE({ malnutritionDTO }: DeleteMalnutritionUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteMalnutritionUsingDELETE({ malnutritionDTO }: DeleteMalnutritionUsingDELETERequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(malnutritionDTO, 'malnutritionDTO', 'deleteMalnutritionUsingDELETE');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/malnutritions',
            method: 'DELETE',
            headers,
            body: malnutritionDTO,
        }, opts?.responseOpts);
    };

    /**
     * getLastMalnutrition
     */
    getLastMalnutritionUsingGET({ idPatient }: GetLastMalnutritionUsingGETRequest): Observable<MalnutritionDTO>
    getLastMalnutritionUsingGET({ idPatient }: GetLastMalnutritionUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<MalnutritionDTO>>
    getLastMalnutritionUsingGET({ idPatient }: GetLastMalnutritionUsingGETRequest, opts?: OperationOpts): Observable<MalnutritionDTO | RawAjaxResponse<MalnutritionDTO>> {
        throwIfNullOrUndefined(idPatient, 'idPatient', 'getLastMalnutritionUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<MalnutritionDTO>({
            url: '/malnutritions/last/{id_patient}'.replace('{id_patient}', encodeURI(idPatient)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getMalnutrition
     */
    getMalnutritionUsingGET({ idAdmission }: GetMalnutritionUsingGETRequest): Observable<Array<MalnutritionDTO>>
    getMalnutritionUsingGET({ idAdmission }: GetMalnutritionUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<MalnutritionDTO>>>
    getMalnutritionUsingGET({ idAdmission }: GetMalnutritionUsingGETRequest, opts?: OperationOpts): Observable<Array<MalnutritionDTO> | RawAjaxResponse<Array<MalnutritionDTO>>> {
        throwIfNullOrUndefined(idAdmission, 'idAdmission', 'getMalnutritionUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<MalnutritionDTO>>({
            url: '/malnutritions/{id_admission}'.replace('{id_admission}', encodeURI(idAdmission)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * newMalnutrition
     */
    newMalnutritionUsingPOST({ malnutritionDTO }: NewMalnutritionUsingPOSTRequest): Observable<void>
    newMalnutritionUsingPOST({ malnutritionDTO }: NewMalnutritionUsingPOSTRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    newMalnutritionUsingPOST({ malnutritionDTO }: NewMalnutritionUsingPOSTRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        throwIfNullOrUndefined(malnutritionDTO, 'malnutritionDTO', 'newMalnutritionUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<void>({
            url: '/malnutritions',
            method: 'POST',
            headers,
            body: malnutritionDTO,
        }, opts?.responseOpts);
    };

    /**
     * updateMalnutrition
     */
    updateMalnutritionUsingPUT({ malnutritionDTO }: UpdateMalnutritionUsingPUTRequest): Observable<MalnutritionDTO>
    updateMalnutritionUsingPUT({ malnutritionDTO }: UpdateMalnutritionUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<MalnutritionDTO>>
    updateMalnutritionUsingPUT({ malnutritionDTO }: UpdateMalnutritionUsingPUTRequest, opts?: OperationOpts): Observable<MalnutritionDTO | RawAjaxResponse<MalnutritionDTO>> {
        throwIfNullOrUndefined(malnutritionDTO, 'malnutritionDTO', 'updateMalnutritionUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<MalnutritionDTO>({
            url: '/malnutritions',
            method: 'PUT',
            headers,
            body: malnutritionDTO,
        }, opts?.responseOpts);
    };

}