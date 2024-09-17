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

import { IoK8sApiFlowcontrolV1beta3FlowSchemaCondition } from '../models/IoK8sApiFlowcontrolV1beta3FlowSchemaCondition';
import { HttpFile } from '../http/http';

/**
* FlowSchemaStatus represents the current state of a FlowSchema.
*/
export class IoK8sApiFlowcontrolV1beta3FlowSchemaStatus {
    /**
    * `conditions` is a list of the current states of FlowSchema.
    */
    'conditions'?: Array<IoK8sApiFlowcontrolV1beta3FlowSchemaCondition>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sApiFlowcontrolV1beta3FlowSchemaCondition>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1beta3FlowSchemaStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
