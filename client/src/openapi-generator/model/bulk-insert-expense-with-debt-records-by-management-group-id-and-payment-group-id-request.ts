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


// May contain unused imports in some cases
// @ts-ignore
import { BulkInsertExpenseWithDebtRecordsByManagementGroupIdAndPaymentGroupIdRequestExpensesInner } from './bulk-insert-expense-with-debt-records-by-management-group-id-and-payment-group-id-request-expenses-inner';

/**
 * 
 * @export
 * @interface BulkInsertExpenseWithDebtRecordsByManagementGroupIdAndPaymentGroupIdRequest
 */
export interface BulkInsertExpenseWithDebtRecordsByManagementGroupIdAndPaymentGroupIdRequest {
    /**
     * 
     * @type {Array<BulkInsertExpenseWithDebtRecordsByManagementGroupIdAndPaymentGroupIdRequestExpensesInner>}
     * @memberof BulkInsertExpenseWithDebtRecordsByManagementGroupIdAndPaymentGroupIdRequest
     */
    'expenses': Array<BulkInsertExpenseWithDebtRecordsByManagementGroupIdAndPaymentGroupIdRequestExpensesInner>;
}

