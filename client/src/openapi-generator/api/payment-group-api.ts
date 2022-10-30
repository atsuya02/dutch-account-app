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
import { AddPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest } from '../model';
// @ts-ignore
import { PaymentGroup } from '../model';
// @ts-ignore
import { PaymentGroupAndPaymentAffiliations } from '../model';
// @ts-ignore
import { ResponseError } from '../model';
// @ts-ignore
import { UpdatePaymentGroupByPaymentGroupIdRequest } from '../model';
/**
 * PaymentGroupApi - axios parameter creator
 * @export
 */
export const PaymentGroupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 管理グループに紐づく支払グループを作成し複数のユーザーを所属させる
         * @summary 管理グループに紐づく支払グループを作成し複数のユーザーを所属させる
         * @param {string} managementGroupId 管理グループID
         * @param {AddPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest} [addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest] リクエスト用の支払グループと支払グループの所属情報の配列
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPaymentGroupAndPaymentAffiliationsByManagementGroupId: async (managementGroupId: string, addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest?: AddPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'managementGroupId' is not null or undefined
            assertParamExists('addPaymentGroupAndPaymentAffiliationsByManagementGroupId', 'managementGroupId', managementGroupId)
            const localVarPath = `/management_groups/{management_group_id}/payment_groups/payment_affiliations/bulk_insert`
                .replace(`{${"management_group_id"}}`, encodeURIComponent(String(managementGroupId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 管理グループに紐づく支払グループを削除する
         * @summary 管理グループに紐づく支払グループを削除
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePaymentGroupByPaymentGroupId: async (managementGroupId: string, paymentGroupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'managementGroupId' is not null or undefined
            assertParamExists('deletePaymentGroupByPaymentGroupId', 'managementGroupId', managementGroupId)
            // verify required parameter 'paymentGroupId' is not null or undefined
            assertParamExists('deletePaymentGroupByPaymentGroupId', 'paymentGroupId', paymentGroupId)
            const localVarPath = `/management_groups/{management_group_id}/payment_groups/{payment_group_id}`
                .replace(`{${"management_group_id"}}`, encodeURIComponent(String(managementGroupId)))
                .replace(`{${"payment_group_id"}}`, encodeURIComponent(String(paymentGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * 管理グループに紐づく支払グループを取得する
         * @summary 管理グループに紐づく支払グループを取得
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentGroupByManagementGroupIdAndPaymentGroupId: async (managementGroupId: string, paymentGroupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'managementGroupId' is not null or undefined
            assertParamExists('getPaymentGroupByManagementGroupIdAndPaymentGroupId', 'managementGroupId', managementGroupId)
            // verify required parameter 'paymentGroupId' is not null or undefined
            assertParamExists('getPaymentGroupByManagementGroupIdAndPaymentGroupId', 'paymentGroupId', paymentGroupId)
            const localVarPath = `/management_groups/{management_group_id}/payment_groups/{payment_group_id}`
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
         * 管理グループに紐づく全ての支払グループを取得する
         * @summary 管理グループに紐づく全ての支払グループを取得
         * @param {string} managementGroupId 管理グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentGroupsByManagementGroupId: async (managementGroupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'managementGroupId' is not null or undefined
            assertParamExists('getPaymentGroupsByManagementGroupId', 'managementGroupId', managementGroupId)
            const localVarPath = `/management_groups/{management_group_id}/payment_groups`
                .replace(`{${"management_group_id"}}`, encodeURIComponent(String(managementGroupId)));
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
         * 管理グループに紐づく支払グループを更新する
         * @summary 管理グループに紐づく支払グループを更新
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {UpdatePaymentGroupByPaymentGroupIdRequest} [updatePaymentGroupByPaymentGroupIdRequest] リクエスト用の支払グループ
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePaymentGroupByPaymentGroupId: async (managementGroupId: string, paymentGroupId: string, updatePaymentGroupByPaymentGroupIdRequest?: UpdatePaymentGroupByPaymentGroupIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'managementGroupId' is not null or undefined
            assertParamExists('updatePaymentGroupByPaymentGroupId', 'managementGroupId', managementGroupId)
            // verify required parameter 'paymentGroupId' is not null or undefined
            assertParamExists('updatePaymentGroupByPaymentGroupId', 'paymentGroupId', paymentGroupId)
            const localVarPath = `/management_groups/{management_group_id}/payment_groups/{payment_group_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updatePaymentGroupByPaymentGroupIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PaymentGroupApi - functional programming interface
 * @export
 */
export const PaymentGroupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PaymentGroupApiAxiosParamCreator(configuration)
    return {
        /**
         * 管理グループに紐づく支払グループを作成し複数のユーザーを所属させる
         * @summary 管理グループに紐づく支払グループを作成し複数のユーザーを所属させる
         * @param {string} managementGroupId 管理グループID
         * @param {AddPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest} [addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest] リクエスト用の支払グループと支払グループの所属情報の配列
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addPaymentGroupAndPaymentAffiliationsByManagementGroupId(managementGroupId: string, addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest?: AddPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentGroupAndPaymentAffiliations>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addPaymentGroupAndPaymentAffiliationsByManagementGroupId(managementGroupId, addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 管理グループに紐づく支払グループを削除する
         * @summary 管理グループに紐づく支払グループを削除
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePaymentGroupByPaymentGroupId(managementGroupId: string, paymentGroupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePaymentGroupByPaymentGroupId(managementGroupId, paymentGroupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 管理グループに紐づく支払グループを取得する
         * @summary 管理グループに紐づく支払グループを取得
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPaymentGroupByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentGroupByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 管理グループに紐づく全ての支払グループを取得する
         * @summary 管理グループに紐づく全ての支払グループを取得
         * @param {string} managementGroupId 管理グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPaymentGroupsByManagementGroupId(managementGroupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PaymentGroup>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentGroupsByManagementGroupId(managementGroupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 管理グループに紐づく支払グループを更新する
         * @summary 管理グループに紐づく支払グループを更新
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {UpdatePaymentGroupByPaymentGroupIdRequest} [updatePaymentGroupByPaymentGroupIdRequest] リクエスト用の支払グループ
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePaymentGroupByPaymentGroupId(managementGroupId: string, paymentGroupId: string, updatePaymentGroupByPaymentGroupIdRequest?: UpdatePaymentGroupByPaymentGroupIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePaymentGroupByPaymentGroupId(managementGroupId, paymentGroupId, updatePaymentGroupByPaymentGroupIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PaymentGroupApi - factory interface
 * @export
 */
export const PaymentGroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PaymentGroupApiFp(configuration)
    return {
        /**
         * 管理グループに紐づく支払グループを作成し複数のユーザーを所属させる
         * @summary 管理グループに紐づく支払グループを作成し複数のユーザーを所属させる
         * @param {string} managementGroupId 管理グループID
         * @param {AddPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest} [addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest] リクエスト用の支払グループと支払グループの所属情報の配列
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPaymentGroupAndPaymentAffiliationsByManagementGroupId(managementGroupId: string, addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest?: AddPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest, options?: any): AxiosPromise<PaymentGroupAndPaymentAffiliations> {
            return localVarFp.addPaymentGroupAndPaymentAffiliationsByManagementGroupId(managementGroupId, addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 管理グループに紐づく支払グループを削除する
         * @summary 管理グループに紐づく支払グループを削除
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePaymentGroupByPaymentGroupId(managementGroupId: string, paymentGroupId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deletePaymentGroupByPaymentGroupId(managementGroupId, paymentGroupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 管理グループに紐づく支払グループを取得する
         * @summary 管理グループに紐づく支払グループを取得
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentGroupByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, options?: any): AxiosPromise<PaymentGroup> {
            return localVarFp.getPaymentGroupByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 管理グループに紐づく全ての支払グループを取得する
         * @summary 管理グループに紐づく全ての支払グループを取得
         * @param {string} managementGroupId 管理グループID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentGroupsByManagementGroupId(managementGroupId: string, options?: any): AxiosPromise<Array<PaymentGroup>> {
            return localVarFp.getPaymentGroupsByManagementGroupId(managementGroupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 管理グループに紐づく支払グループを更新する
         * @summary 管理グループに紐づく支払グループを更新
         * @param {string} managementGroupId 管理グループID
         * @param {string} paymentGroupId 支払グループID
         * @param {UpdatePaymentGroupByPaymentGroupIdRequest} [updatePaymentGroupByPaymentGroupIdRequest] リクエスト用の支払グループ
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePaymentGroupByPaymentGroupId(managementGroupId: string, paymentGroupId: string, updatePaymentGroupByPaymentGroupIdRequest?: UpdatePaymentGroupByPaymentGroupIdRequest, options?: any): AxiosPromise<PaymentGroup> {
            return localVarFp.updatePaymentGroupByPaymentGroupId(managementGroupId, paymentGroupId, updatePaymentGroupByPaymentGroupIdRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PaymentGroupApi - object-oriented interface
 * @export
 * @class PaymentGroupApi
 * @extends {BaseAPI}
 */
export class PaymentGroupApi extends BaseAPI {
    /**
     * 管理グループに紐づく支払グループを作成し複数のユーザーを所属させる
     * @summary 管理グループに紐づく支払グループを作成し複数のユーザーを所属させる
     * @param {string} managementGroupId 管理グループID
     * @param {AddPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest} [addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest] リクエスト用の支払グループと支払グループの所属情報の配列
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentGroupApi
     */
    public addPaymentGroupAndPaymentAffiliationsByManagementGroupId(managementGroupId: string, addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest?: AddPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest, options?: AxiosRequestConfig) {
        return PaymentGroupApiFp(this.configuration).addPaymentGroupAndPaymentAffiliationsByManagementGroupId(managementGroupId, addPaymentGroupAndPaymentAffiliationsByManagementGroupIdRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 管理グループに紐づく支払グループを削除する
     * @summary 管理グループに紐づく支払グループを削除
     * @param {string} managementGroupId 管理グループID
     * @param {string} paymentGroupId 支払グループID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentGroupApi
     */
    public deletePaymentGroupByPaymentGroupId(managementGroupId: string, paymentGroupId: string, options?: AxiosRequestConfig) {
        return PaymentGroupApiFp(this.configuration).deletePaymentGroupByPaymentGroupId(managementGroupId, paymentGroupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 管理グループに紐づく支払グループを取得する
     * @summary 管理グループに紐づく支払グループを取得
     * @param {string} managementGroupId 管理グループID
     * @param {string} paymentGroupId 支払グループID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentGroupApi
     */
    public getPaymentGroupByManagementGroupIdAndPaymentGroupId(managementGroupId: string, paymentGroupId: string, options?: AxiosRequestConfig) {
        return PaymentGroupApiFp(this.configuration).getPaymentGroupByManagementGroupIdAndPaymentGroupId(managementGroupId, paymentGroupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 管理グループに紐づく全ての支払グループを取得する
     * @summary 管理グループに紐づく全ての支払グループを取得
     * @param {string} managementGroupId 管理グループID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentGroupApi
     */
    public getPaymentGroupsByManagementGroupId(managementGroupId: string, options?: AxiosRequestConfig) {
        return PaymentGroupApiFp(this.configuration).getPaymentGroupsByManagementGroupId(managementGroupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 管理グループに紐づく支払グループを更新する
     * @summary 管理グループに紐づく支払グループを更新
     * @param {string} managementGroupId 管理グループID
     * @param {string} paymentGroupId 支払グループID
     * @param {UpdatePaymentGroupByPaymentGroupIdRequest} [updatePaymentGroupByPaymentGroupIdRequest] リクエスト用の支払グループ
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentGroupApi
     */
    public updatePaymentGroupByPaymentGroupId(managementGroupId: string, paymentGroupId: string, updatePaymentGroupByPaymentGroupIdRequest?: UpdatePaymentGroupByPaymentGroupIdRequest, options?: AxiosRequestConfig) {
        return PaymentGroupApiFp(this.configuration).updatePaymentGroupByPaymentGroupId(managementGroupId, paymentGroupId, updatePaymentGroupByPaymentGroupIdRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
