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
import { AddUserRequest } from '../model';
// @ts-ignore
import { User } from '../model';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ユーザーを作成する
         * @summary ユーザー作成
         * @param {AddUserRequest} [addUserRequest] リクエストユーザー
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUser: async (addUserRequest?: AddUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユーザーIDでユーザーを削除する
         * @summary ユーザー削除
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUserByUserId: async (userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteUserByUserId', 'userId', userId)
            const localVarPath = `/users/{user_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユーザーIDでユーザーを取得する
         * @summary ユーザー取得
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByUserId: async (userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUserByUserId', 'userId', userId)
            const localVarPath = `/users/{user_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 全てのユーザーを取得する
         * @summary 全ユーザー取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユーザーIDでユーザーを更新する
         * @summary ユーザー更新
         * @param {number} userId ユーザーID
         * @param {AddUserRequest} [addUserRequest] リクエストユーザー
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserByUserId: async (userId: number, addUserRequest?: AddUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateUserByUserId', 'userId', userId)
            const localVarPath = `/users/{user_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * ユーザーを作成する
         * @summary ユーザー作成
         * @param {AddUserRequest} [addUserRequest] リクエストユーザー
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addUser(addUserRequest?: AddUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addUser(addUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユーザーIDでユーザーを削除する
         * @summary ユーザー削除
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUserByUserId(userId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserByUserId(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユーザーIDでユーザーを取得する
         * @summary ユーザー取得
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserByUserId(userId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserByUserId(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 全てのユーザーを取得する
         * @summary 全ユーザー取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユーザーIDでユーザーを更新する
         * @summary ユーザー更新
         * @param {number} userId ユーザーID
         * @param {AddUserRequest} [addUserRequest] リクエストユーザー
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUserByUserId(userId: number, addUserRequest?: AddUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserByUserId(userId, addUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * ユーザーを作成する
         * @summary ユーザー作成
         * @param {AddUserRequest} [addUserRequest] リクエストユーザー
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUser(addUserRequest?: AddUserRequest, options?: any): AxiosPromise<User> {
            return localVarFp.addUser(addUserRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * ユーザーIDでユーザーを削除する
         * @summary ユーザー削除
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUserByUserId(userId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteUserByUserId(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * ユーザーIDでユーザーを取得する
         * @summary ユーザー取得
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByUserId(userId: number, options?: any): AxiosPromise<User> {
            return localVarFp.getUserByUserId(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 全てのユーザーを取得する
         * @summary 全ユーザー取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(options?: any): AxiosPromise<Array<User>> {
            return localVarFp.getUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * ユーザーIDでユーザーを更新する
         * @summary ユーザー更新
         * @param {number} userId ユーザーID
         * @param {AddUserRequest} [addUserRequest] リクエストユーザー
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserByUserId(userId: number, addUserRequest?: AddUserRequest, options?: any): AxiosPromise<User> {
            return localVarFp.updateUserByUserId(userId, addUserRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - interface
 * @export
 * @interface UserApi
 */
export interface UserApiInterface {
    /**
     * ユーザーを作成する
     * @summary ユーザー作成
     * @param {AddUserRequest} [addUserRequest] リクエストユーザー
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    addUser(addUserRequest?: AddUserRequest, options?: AxiosRequestConfig): AxiosPromise<User>;

    /**
     * ユーザーIDでユーザーを削除する
     * @summary ユーザー削除
     * @param {number} userId ユーザーID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    deleteUserByUserId(userId: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * ユーザーIDでユーザーを取得する
     * @summary ユーザー取得
     * @param {number} userId ユーザーID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUserByUserId(userId: number, options?: AxiosRequestConfig): AxiosPromise<User>;

    /**
     * 全てのユーザーを取得する
     * @summary 全ユーザー取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUsers(options?: AxiosRequestConfig): AxiosPromise<Array<User>>;

    /**
     * ユーザーIDでユーザーを更新する
     * @summary ユーザー更新
     * @param {number} userId ユーザーID
     * @param {AddUserRequest} [addUserRequest] リクエストユーザー
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    updateUserByUserId(userId: number, addUserRequest?: AddUserRequest, options?: AxiosRequestConfig): AxiosPromise<User>;

}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI implements UserApiInterface {
    /**
     * ユーザーを作成する
     * @summary ユーザー作成
     * @param {AddUserRequest} [addUserRequest] リクエストユーザー
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public addUser(addUserRequest?: AddUserRequest, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).addUser(addUserRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユーザーIDでユーザーを削除する
     * @summary ユーザー削除
     * @param {number} userId ユーザーID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public deleteUserByUserId(userId: number, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).deleteUserByUserId(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユーザーIDでユーザーを取得する
     * @summary ユーザー取得
     * @param {number} userId ユーザーID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserByUserId(userId: number, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserByUserId(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 全てのユーザーを取得する
     * @summary 全ユーザー取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUsers(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユーザーIDでユーザーを更新する
     * @summary ユーザー更新
     * @param {number} userId ユーザーID
     * @param {AddUserRequest} [addUserRequest] リクエストユーザー
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public updateUserByUserId(userId: number, addUserRequest?: AddUserRequest, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).updateUserByUserId(userId, addUserRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
