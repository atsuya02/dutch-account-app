/* tslint:disable */
/* eslint-disable */
/**
 * dutch_account_app
 * 割り勘アプリ
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner } from '../model';
// @ts-ignore
import { PaymentAffiliation } from '../model';
// @ts-ignore
import { ResponseError } from '../model';
/**
 * PaymentAffiliationApi - axios parameter creator
 * @export
 */
export const PaymentAffiliationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 支払グループに複数のユーザーを所属させる
         * @summary 支払グループに複数のユーザーを所属させる
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>} [addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner] リクエスト用の支払グループの所属情報の配列
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPaymentAffiliationsByManagementGroupIdAndPaymentGroupId: async (managementGroupId: string, paymentGroupId: string, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner?: Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'managementGroupId' is not null or undefined
            assertParamExists('addPaymentAffiliationsByManagementGroupIdAndPaymentGroupId', 'managementGroupId', managementGroupId)
            // verify required parameter 'paymentGroupId' is not null or undefined
            assertParamExists('addPaymentAffiliationsByManagementGroupIdAndPaymentGroupId', 'paymentGroupId', paymentGroupId)
            const localVarPath = `/management_groups/{management_group_id}/payment_groups/{payment_group_id}/payment_affiliations/bulk_insert`
                .replace(`{${"management_group_id"}}`, encodeURIComponent(String(managementGroupId)))
                .replace(`{${"payment_group_id"}}`, encodeURIComponent(String(paymentGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication accessToken required
            await setApiKeyToObject(localVarHeaderParameter, "access-token", configuration)

            // authentication client required
            await setApiKeyToObject(localVarHeaderParameter, "client", configuration)

            // authentication uid required
            await setApiKeyToObject(localVarHeaderParameter, "uid", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 支払グループに所属する全てのユーザーを取得する
         * @summary 支払グループに所属する全てのユーザーを取得
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentAffiliationsByManagementGroupIdAndPaymentGroupId: async (managementGroupId: string, paymentGroupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'managementGroupId' is not null or undefined
            assertParamExists('getPaymentAffiliationsByManagementGroupIdAndPaymentGroupId', 'managementGroupId', managementGroupId)
            // verify required parameter 'paymentGroupId' is not null or undefined
            assertParamExists('getPaymentAffiliationsByManagementGroupIdAndPaymentGroupId', 'paymentGroupId', paymentGroupId)
            const localVarPath = `/management_groups/{management_group_id}/payment_groups/{payment_group_id}/payment_affiliations`
                .replace(`{${"management_group_id"}}`, encodeURIComponent(String(managementGroupId)))
                .replace(`{${"payment_group_id"}}`, encodeURIComponent(String(paymentGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication accessToken required
            await setApiKeyToObject(localVarHeaderParameter, "access-token", configuration)

            // authentication client required
            await setApiKeyToObject(localVarHeaderParameter, "client", configuration)

            // authentication uid required
            await setApiKeyToObject(localVarHeaderParameter, "uid", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 複数のユーザーの支払グループへの所属情報を更新する
         * @summary 複数のユーザーの支払グループへの所属情報を更新
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>} [addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner] リクエスト用の支払グループの所属情報の配列
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePaymentAffiliationsByManagementGroupIdAndPaymentGroupId: async (managementGroupId: string, paymentGroupId: string, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner?: Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'managementGroupId' is not null or undefined
            assertParamExists('updatePaymentAffiliationsByManagementGroupIdAndPaymentGroupId', 'managementGroupId', managementGroupId)
            // verify required parameter 'paymentGroupId' is not null or undefined
            assertParamExists('updatePaymentAffiliationsByManagementGroupIdAndPaymentGroupId', 'paymentGroupId', paymentGroupId)
            const localVarPath = `/management_groups/{management_group_id}/payment_groups/{payment_group_id}/payment_affiliations/bulk_update`
                .replace(`{${"management_group_id"}}`, encodeURIComponent(String(managementGroupId)))
                .replace(`{${"payment_group_id"}}`, encodeURIComponent(String(paymentGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication accessToken required
            await setApiKeyToObject(localVarHeaderParameter, "access-token", configuration)

            // authentication client required
            await setApiKeyToObject(localVarHeaderParameter, "client", configuration)

            // authentication uid required
            await setApiKeyToObject(localVarHeaderParameter, "uid", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PaymentAffiliationApi - functional programming interface
 * @export
 */
export const PaymentAffiliationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PaymentAffiliationApiAxiosParamCreator(configuration)
    return {
        /**
         * 支払グループに複数のユーザーを所属させる
         * @summary 支払グループに複数のユーザーを所属させる
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>} [addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner] リクエスト用の支払グループの所属情報の配列
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner?: Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PaymentAffiliation>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 支払グループに所属する全てのユーザーを取得する
         * @summary 支払グループに所属する全てのユーザーを取得
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PaymentAffiliation>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 複数のユーザーの支払グループへの所属情報を更新する
         * @summary 複数のユーザーの支払グループへの所属情報を更新
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>} [addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner] リクエスト用の支払グループの所属情報の配列
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner?: Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PaymentAffiliation>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PaymentAffiliationApi - factory interface
 * @export
 */
export const PaymentAffiliationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PaymentAffiliationApiFp(configuration)
    return {
        /**
         * 支払グループに複数のユーザーを所属させる
         * @summary 支払グループに複数のユーザーを所属させる
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>} [addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner] リクエスト用の支払グループの所属情報の配列
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner?: Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>, options?: any): AxiosPromise<Array<PaymentAffiliation>> {
            return localVarFp.addPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner, options).then((request) => request(axios, basePath));
        },
        /**
         * 支払グループに所属する全てのユーザーを取得する
         * @summary 支払グループに所属する全てのユーザーを取得
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, options?: any): AxiosPromise<Array<PaymentAffiliation>> {
            return localVarFp.getPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 複数のユーザーの支払グループへの所属情報を更新する
         * @summary 複数のユーザーの支払グループへの所属情報を更新
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>} [addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner] リクエスト用の支払グループの所属情報の配列
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner?: Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>, options?: any): AxiosPromise<Array<PaymentAffiliation>> {
            return localVarFp.updatePaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PaymentAffiliationApi - object-oriented interface
 * @export
 * @class PaymentAffiliationApi
 * @extends {BaseAPI}
 */
export class PaymentAffiliationApi extends BaseAPI {
    /**
     * 支払グループに複数のユーザーを所属させる
     * @summary 支払グループに複数のユーザーを所属させる
     * @param {string} managementGroupId 管理グループID
     * @param {string} paymentGroupId 支払グループID
     * @param {Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>} [addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner] リクエスト用の支払グループの所属情報の配列
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentAffiliationApi
     */
    public addPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner?: Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>, options?: AxiosRequestConfig) {
        return PaymentAffiliationApiFp(this.configuration).addPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 支払グループに所属する全てのユーザーを取得する
     * @summary 支払グループに所属する全てのユーザーを取得
     * @param {string} managementGroupId 管理グループID
     * @param {string} paymentGroupId 支払グループID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentAffiliationApi
     */
    public getPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, options?: AxiosRequestConfig) {
        return PaymentAffiliationApiFp(this.configuration).getPaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 複数のユーザーの支払グループへの所属情報を更新する
     * @summary 複数のユーザーの支払グループへの所属情報を更新
     * @param {string} managementGroupId 管理グループID
     * @param {string} paymentGroupId 支払グループID
     * @param {Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>} [addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner] リクエスト用の支払グループの所属情報の配列
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentAffiliationApi
     */
    public updatePaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner?: Array<AddPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner>, options?: AxiosRequestConfig) {
        return PaymentAffiliationApiFp(this.configuration).updatePaymentAffiliationsByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, addPaymentAffiliationsByManagementGroupIdAndPaymentGroupIdRequestInner, options).then((request) => request(this.axios, this.basePath));
    }
}
