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
* VolumeMount describes a mounting of a Volume within a container.
*/
export class IoK8sApiCoreV1VolumeMount {
    /**
    * Path within the container at which the volume should be mounted.  Must not contain \':\'.
    */
    'mountPath': string;
    /**
    * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).
    */
    'mountPropagation'?: string;
    /**
    * This must match the Name of a Volume.
    */
    'name': string;
    /**
    * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
    */
    'readOnly'?: boolean;
    /**
    * RecursiveReadOnly specifies whether read-only mounts should be handled recursively.  If ReadOnly is false, this field has no meaning and must be unspecified.  If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only.  If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime.  If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason.  If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None).  If this field is not specified, it is treated as an equivalent of Disabled.
    */
    'recursiveReadOnly'?: string;
    /**
    * Path within the volume from which the container\'s volume should be mounted. Defaults to \"\" (volume\'s root).
    */
    'subPath'?: string;
    /**
    * Expanded path within the volume from which the container\'s volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container\'s environment. Defaults to \"\" (volume\'s root). SubPathExpr and SubPath are mutually exclusive.
    */
    'subPathExpr'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mountPath",
            "baseName": "mountPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "mountPropagation",
            "baseName": "mountPropagation",
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
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "recursiveReadOnly",
            "baseName": "recursiveReadOnly",
            "type": "string",
            "format": ""
        },
        {
            "name": "subPath",
            "baseName": "subPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "subPathExpr",
            "baseName": "subPathExpr",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1VolumeMount.attributeTypeMap;
    }

    public constructor() {
    }
}
