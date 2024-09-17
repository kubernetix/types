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
* ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration
*/
export class IoK8sApiCoreV1ConfigMapNodeConfigSource {
    /**
    * KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.
    */
    'kubeletConfigKey': string;
    /**
    * Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.
    */
    'name': string;
    /**
    * Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.
    */
    'namespace': string;
    /**
    * ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
    */
    'resourceVersion'?: string;
    /**
    * UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
    */
    'uid'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kubeletConfigKey",
            "baseName": "kubeletConfigKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceVersion",
            "baseName": "resourceVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ConfigMapNodeConfigSource.attributeTypeMap;
    }

    public constructor() {
    }
}
