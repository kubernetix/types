/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* ExpressionWarning is a warning information that targets a specific expression.
*/
export class IoK8sApiAdmissionregistrationV1ExpressionWarning {
    /**
    * The path to the field that refers the expression. For example, the reference to the expression of the first item of validations is \"spec.validations[0].expression\"
    */
    'fieldRef': string;
    /**
    * The content of type checking information in a human-readable form. Each line of the warning contains the type that the expression is checked against, followed by the type check error from the compiler.
    */
    'warning': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fieldRef",
            "baseName": "fieldRef",
            "type": "string",
            "format": ""
        },
        {
            "name": "warning",
            "baseName": "warning",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAdmissionregistrationV1ExpressionWarning.attributeTypeMap;
    }

    public constructor() {
    }
}
