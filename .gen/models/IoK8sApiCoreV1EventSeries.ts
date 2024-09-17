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
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
*/
export class IoK8sApiCoreV1EventSeries {
    /**
    * Number of occurrences in this series up to the last heartbeat time
    */
    'count'?: number;
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'lastObservedTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "lastObservedTime",
            "baseName": "lastObservedTime",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1EventSeries.attributeTypeMap;
    }

    public constructor() {
    }
}
