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

import { IoK8sApiCoreV1DaemonEndpoint } from '../models/IoK8sApiCoreV1DaemonEndpoint';
import { HttpFile } from '../http/http';

/**
* NodeDaemonEndpoints lists ports opened by daemons running on the Node.
*/
export class IoK8sApiCoreV1NodeDaemonEndpoints {
    'kubeletEndpoint'?: IoK8sApiCoreV1DaemonEndpoint;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kubeletEndpoint",
            "baseName": "kubeletEndpoint",
            "type": "IoK8sApiCoreV1DaemonEndpoint",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1NodeDaemonEndpoints.attributeTypeMap;
    }

    public constructor() {
    }
}
