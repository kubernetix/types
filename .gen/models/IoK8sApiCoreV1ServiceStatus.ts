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

import { IoK8sApiCoreV1LoadBalancerStatus } from '../models/IoK8sApiCoreV1LoadBalancerStatus';
import { IoK8sApimachineryPkgApisMetaV1Condition } from '../models/IoK8sApimachineryPkgApisMetaV1Condition';
import { HttpFile } from '../http/http';

/**
* ServiceStatus represents the current status of a service.
*/
export class IoK8sApiCoreV1ServiceStatus {
    /**
    * Current service state
    */
    'conditions'?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
    'loadBalancer'?: IoK8sApiCoreV1LoadBalancerStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sApimachineryPkgApisMetaV1Condition>",
            "format": ""
        },
        {
            "name": "loadBalancer",
            "baseName": "loadBalancer",
            "type": "IoK8sApiCoreV1LoadBalancerStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ServiceStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
