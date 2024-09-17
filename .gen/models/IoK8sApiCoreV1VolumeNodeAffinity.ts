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

import { IoK8sApiCoreV1NodeSelector } from '../models/IoK8sApiCoreV1NodeSelector';
import { HttpFile } from '../http/http';

/**
* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
*/
export class IoK8sApiCoreV1VolumeNodeAffinity {
    'required'?: IoK8sApiCoreV1NodeSelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "required",
            "baseName": "required",
            "type": "IoK8sApiCoreV1NodeSelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1VolumeNodeAffinity.attributeTypeMap;
    }

    public constructor() {
    }
}
