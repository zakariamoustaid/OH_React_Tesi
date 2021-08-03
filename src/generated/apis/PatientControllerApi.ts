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
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    PatientDTO,
    ResponseEntity,
} from '../models';

export interface DeletePatientUsingDELETERequest {
    code: number;
}

export interface GetPatientUsingGETRequest {
    code: number;
}

export interface GetPatientsUsingGETRequest {
    page?: number;
    size?: number;
}

export interface NewPatientUsingPOSTRequest {
    newPatient: PatientDTO;
}

export interface SearchPatientUsingGETRequest {
    address?: string;
    birthDate?: string;
    firstName?: string;
    secondName?: string;
}

export interface UpdatePatientUsingPUTRequest {
    code: number;
    updatePatient: PatientDTO;
}

/**
 * no description
 */
export class PatientControllerApi extends BaseAPI {

    /**
     * deletePatient
     */
    deletePatientUsingDELETE({ code }: DeletePatientUsingDELETERequest): Observable<ResponseEntity>
    deletePatientUsingDELETE({ code }: DeletePatientUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<ResponseEntity>>
    deletePatientUsingDELETE({ code }: DeletePatientUsingDELETERequest, opts?: OperationOpts): Observable<ResponseEntity | RawAjaxResponse<ResponseEntity>> {
        throwIfNullOrUndefined(code, 'code', 'deletePatientUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ResponseEntity>({
            url: '/patients/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getPatient
     */
    getPatientUsingGET({ code }: GetPatientUsingGETRequest): Observable<PatientDTO>
    getPatientUsingGET({ code }: GetPatientUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PatientDTO>>
    getPatientUsingGET({ code }: GetPatientUsingGETRequest, opts?: OperationOpts): Observable<PatientDTO | RawAjaxResponse<PatientDTO>> {
        throwIfNullOrUndefined(code, 'code', 'getPatientUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<PatientDTO>({
            url: '/patients/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getPatients
     */
    getPatientsUsingGET({ page, size }: GetPatientsUsingGETRequest): Observable<Array<PatientDTO>>
    getPatientsUsingGET({ page, size }: GetPatientsUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<PatientDTO>>>
    getPatientsUsingGET({ page, size }: GetPatientsUsingGETRequest, opts?: OperationOpts): Observable<Array<PatientDTO> | RawAjaxResponse<Array<PatientDTO>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = {};

        if (page != null) { query['page'] = page; }
        if (size != null) { query['size'] = size; }

        return this.request<Array<PatientDTO>>({
            url: '/patients',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * newPatient
     */
    newPatientUsingPOST({ newPatient }: NewPatientUsingPOSTRequest): Observable<number>
    newPatientUsingPOST({ newPatient }: NewPatientUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    newPatientUsingPOST({ newPatient }: NewPatientUsingPOSTRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(newPatient, 'newPatient', 'newPatientUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<number>({
            url: '/patients',
            method: 'POST',
            headers,
            body: newPatient,
        }, opts?.responseOpts);
    };

    /**
     * searchPatient
     */
    searchPatientUsingGET({ address, birthDate, firstName, secondName }: SearchPatientUsingGETRequest): Observable<Array<PatientDTO>>
    searchPatientUsingGET({ address, birthDate, firstName, secondName }: SearchPatientUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<PatientDTO>>>
    searchPatientUsingGET({ address, birthDate, firstName, secondName }: SearchPatientUsingGETRequest, opts?: OperationOpts): Observable<Array<PatientDTO> | RawAjaxResponse<Array<PatientDTO>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = {};

        if (address != null) { query['address'] = address; }
        if (birthDate != null) { query['birthDate'] = birthDate; }
        if (firstName != null) { query['firstName'] = firstName; }
        if (secondName != null) { query['secondName'] = secondName; }

        return this.request<Array<PatientDTO>>({
            url: '/patients/search',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * updatePatient
     */
    updatePatientUsingPUT({ code, updatePatient }: UpdatePatientUsingPUTRequest): Observable<number>
    updatePatientUsingPUT({ code, updatePatient }: UpdatePatientUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    updatePatientUsingPUT({ code, updatePatient }: UpdatePatientUsingPUTRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(code, 'code', 'updatePatientUsingPUT');
        throwIfNullOrUndefined(updatePatient, 'updatePatient', 'updatePatientUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<number>({
            url: '/patients/{code}'.replace('{code}', encodeURI(code)),
            method: 'PUT',
            headers,
            body: updatePatient,
        }, opts?.responseOpts);
    };

}