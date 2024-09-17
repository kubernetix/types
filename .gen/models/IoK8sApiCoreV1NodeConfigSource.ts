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

import { IoK8sApiCoreV1ConfigMapNodeConfigSource } from '../models/IoK8sApiCoreV1ConfigMapNodeConfigSource';
import { HttpFile } from '../http/http';

/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
*/
export class IoK8sApiCoreV1NodeConfigSource {
    'configMap'?: IoK8sApiCoreV1ConfigMapNodeConfigSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "IoK8sApiCoreV1ConfigMapNodeConfigSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1NodeConfigSource.attributeTypeMap;
    }

    public constructor() {
    }
}
