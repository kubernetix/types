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

import { IoK8sApiCoreV1LimitRangeItem } from '../models/IoK8sApiCoreV1LimitRangeItem';
import { HttpFile } from '../http/http';

/**
* LimitRangeSpec defines a min/max usage limit for resources that match on kind.
*/
export class IoK8sApiCoreV1LimitRangeSpec {
    /**
    * Limits is the list of LimitRangeItem objects that are enforced.
    */
    'limits': Array<IoK8sApiCoreV1LimitRangeItem>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "limits",
            "baseName": "limits",
            "type": "Array<IoK8sApiCoreV1LimitRangeItem>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1LimitRangeSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
