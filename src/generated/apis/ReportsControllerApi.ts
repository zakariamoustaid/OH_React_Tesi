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
import { BaseAPI, HttpHeaders, OperationOpts, RawAjaxResponse } from '../runtime';

/**
 * no description
 */
export class ReportsControllerApi extends BaseAPI {

    /**
     * printDiseasesListPdf
     */
    printDiseasesListPdfUsingGET(): Observable<string>
    printDiseasesListPdfUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<string>>
    printDiseasesListPdfUsingGET(opts?: OperationOpts): Observable<string | RawAjaxResponse<string>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<string>({
            url: '/reports/diseases-list',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * printExamsListPdf
     */
    printExamsListPdfUsingGET(): Observable<string>
    printExamsListPdfUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<string>>
    printExamsListPdfUsingGET(opts?: OperationOpts): Observable<string | RawAjaxResponse<string>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<string>({
            url: '/reports/exams-list',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

}