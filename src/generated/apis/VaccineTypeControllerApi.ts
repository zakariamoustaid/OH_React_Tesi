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
    ResponseEntity,
    VaccineTypeDTO,
} from '../models';

export interface CheckVaccineTypeCodeUsingGETRequest {
    code: string;
}

export interface DeleteVaccineTypeUsingDELETERequest {
    code: string;
}

export interface NewVaccineTypeUsingPOSTRequest {
    newVaccineType: VaccineTypeDTO;
}

export interface UpdateVaccineTypeUsingPUTRequest {
    updateVaccineType: VaccineTypeDTO;
}

/**
 * no description
 */
export class VaccineTypeControllerApi extends BaseAPI {

    /**
     * checkVaccineTypeCode
     */
    checkVaccineTypeCodeUsingGET({ code }: CheckVaccineTypeCodeUsingGETRequest): Observable<boolean>
    checkVaccineTypeCodeUsingGET({ code }: CheckVaccineTypeCodeUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    checkVaccineTypeCodeUsingGET({ code }: CheckVaccineTypeCodeUsingGETRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'checkVaccineTypeCodeUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/vaccinetype/check/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * deleteVaccineType
     */
    deleteVaccineTypeUsingDELETE({ code }: DeleteVaccineTypeUsingDELETERequest): Observable<ResponseEntity>
    deleteVaccineTypeUsingDELETE({ code }: DeleteVaccineTypeUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<ResponseEntity>>
    deleteVaccineTypeUsingDELETE({ code }: DeleteVaccineTypeUsingDELETERequest, opts?: OperationOpts): Observable<ResponseEntity | RawAjaxResponse<ResponseEntity>> {
        throwIfNullOrUndefined(code, 'code', 'deleteVaccineTypeUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ResponseEntity>({
            url: '/vaccinetype/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getVaccineType
     */
    getVaccineTypeUsingGET(): Observable<Array<VaccineTypeDTO>>
    getVaccineTypeUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<VaccineTypeDTO>>>
    getVaccineTypeUsingGET(opts?: OperationOpts): Observable<Array<VaccineTypeDTO> | RawAjaxResponse<Array<VaccineTypeDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<VaccineTypeDTO>>({
            url: '/vaccinetype',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * newVaccineType
     */
    newVaccineTypeUsingPOST({ newVaccineType }: NewVaccineTypeUsingPOSTRequest): Observable<ResponseEntity>
    newVaccineTypeUsingPOST({ newVaccineType }: NewVaccineTypeUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ResponseEntity>>
    newVaccineTypeUsingPOST({ newVaccineType }: NewVaccineTypeUsingPOSTRequest, opts?: OperationOpts): Observable<ResponseEntity | RawAjaxResponse<ResponseEntity>> {
        throwIfNullOrUndefined(newVaccineType, 'newVaccineType', 'newVaccineTypeUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ResponseEntity>({
            url: '/vaccinetype',
            method: 'POST',
            headers,
            body: newVaccineType,
        }, opts?.responseOpts);
    };

    /**
     * updateVaccineType
     */
    updateVaccineTypeUsingPUT({ updateVaccineType }: UpdateVaccineTypeUsingPUTRequest): Observable<ResponseEntity>
    updateVaccineTypeUsingPUT({ updateVaccineType }: UpdateVaccineTypeUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ResponseEntity>>
    updateVaccineTypeUsingPUT({ updateVaccineType }: UpdateVaccineTypeUsingPUTRequest, opts?: OperationOpts): Observable<ResponseEntity | RawAjaxResponse<ResponseEntity>> {
        throwIfNullOrUndefined(updateVaccineType, 'updateVaccineType', 'updateVaccineTypeUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ResponseEntity>({
            url: '/vaccinetype',
            method: 'PUT',
            headers,
            body: updateVaccineType,
        }, opts?.responseOpts);
    };

}