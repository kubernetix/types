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
* LinuxContainerUser represents user identity information in Linux containers
*/
export class IoK8sApiCoreV1LinuxContainerUser {
    /**
    * GID is the primary gid initially attached to the first process in the container
    */
    'gid': number;
    /**
    * SupplementalGroups are the supplemental groups initially attached to the first process in the container
    */
    'supplementalGroups'?: Array<number>;
    /**
    * UID is the primary uid initially attached to the first process in the container
    */
    'uid': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "gid",
            "baseName": "gid",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "supplementalGroups",
            "baseName": "supplementalGroups",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1LinuxContainerUser.attributeTypeMap;
    }

    public constructor() {
    }
}
