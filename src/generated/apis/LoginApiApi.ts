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
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    LoginResponse,
} from '../models';

export interface LoginUsingPOSTRequest {
    password: string;
    username: string;
}

/**
 * no description
 */
export class LoginApiApi extends BaseAPI {

    /**
     * Login with the given credentials.
     * Login
     */
    loginUsingPOST({ password, username }: LoginUsingPOSTRequest): Observable<LoginResponse>
    loginUsingPOST({ password, username }: LoginUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<LoginResponse>>
    loginUsingPOST({ password, username }: LoginUsingPOSTRequest, opts?: OperationOpts): Observable<LoginResponse | RawAjaxResponse<LoginResponse>> {
        throwIfNullOrUndefined(password, 'password', 'loginUsingPOST');
        throwIfNullOrUndefined(username, 'username', 'loginUsingPOST');

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'password': password,
            'username': username,
        };

        return this.request<LoginResponse>({
            url: '/auth/login',
            method: 'POST',
            query,
        }, opts?.responseOpts);
    };

    /**
     * Logout the current user.
     * Logout
     */
    logoutUsingPOST(): Observable<void>
    logoutUsingPOST(opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    logoutUsingPOST(opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<void>({
            url: '/auth/logout',
            method: 'POST',
            headers,
        }, opts?.responseOpts);
    };

}