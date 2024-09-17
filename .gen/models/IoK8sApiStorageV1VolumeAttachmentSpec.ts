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

import { IoK8sApiStorageV1VolumeAttachmentSource } from '../models/IoK8sApiStorageV1VolumeAttachmentSource';
import { HttpFile } from '../http/http';

/**
* VolumeAttachmentSpec is the specification of a VolumeAttachment request.
*/
export class IoK8sApiStorageV1VolumeAttachmentSpec {
    /**
    * attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
    */
    'attacher': string;
    /**
    * nodeName represents the node that the volume should be attached to.
    */
    'nodeName': string;
    'source': IoK8sApiStorageV1VolumeAttachmentSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attacher",
            "baseName": "attacher",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeName",
            "baseName": "nodeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "IoK8sApiStorageV1VolumeAttachmentSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiStorageV1VolumeAttachmentSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
