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

import { IoK8sApiAppsV1ReplicaSetSpec } from '../models/IoK8sApiAppsV1ReplicaSetSpec';
import { IoK8sApiAppsV1ReplicaSetStatus } from '../models/IoK8sApiAppsV1ReplicaSetStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../models/IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { HttpFile } from '../http/http';

/**
* ReplicaSet ensures that a specified number of pod replicas are running at any given time.
*/
export class IoK8sApiAppsV1ReplicaSet {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    'spec'?: IoK8sApiAppsV1ReplicaSetSpec;
    'status'?: IoK8sApiAppsV1ReplicaSetStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "IoK8sApiAppsV1ReplicaSetSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IoK8sApiAppsV1ReplicaSetStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAppsV1ReplicaSet.attributeTypeMap;
    }

    public constructor() {
    }
}
