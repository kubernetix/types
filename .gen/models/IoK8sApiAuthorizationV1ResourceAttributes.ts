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

import { IoK8sApiAuthorizationV1FieldSelectorAttributes } from '../models/IoK8sApiAuthorizationV1FieldSelectorAttributes';
import { IoK8sApiAuthorizationV1LabelSelectorAttributes } from '../models/IoK8sApiAuthorizationV1LabelSelectorAttributes';
import { HttpFile } from '../http/http';

/**
* ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
*/
export class IoK8sApiAuthorizationV1ResourceAttributes {
    'fieldSelector'?: IoK8sApiAuthorizationV1FieldSelectorAttributes;
    /**
    * Group is the API Group of the Resource.  \"*\" means all.
    */
    'group'?: string;
    'labelSelector'?: IoK8sApiAuthorizationV1LabelSelectorAttributes;
    /**
    * Name is the name of the resource being requested for a \"get\" or deleted for a \"delete\". \"\" (empty) means all.
    */
    'name'?: string;
    /**
    * Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces \"\" (empty) is defaulted for LocalSubjectAccessReviews \"\" (empty) is empty for cluster-scoped resources \"\" (empty) means \"all\" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
    */
    'namespace'?: string;
    /**
    * Resource is one of the existing resource types.  \"*\" means all.
    */
    'resource'?: string;
    /**
    * Subresource is one of the existing resource types.  \"\" means none.
    */
    'subresource'?: string;
    /**
    * Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
    */
    'verb'?: string;
    /**
    * Version is the API Version of the Resource.  \"*\" means all.
    */
    'version'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fieldSelector",
            "baseName": "fieldSelector",
            "type": "IoK8sApiAuthorizationV1FieldSelectorAttributes",
            "format": ""
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string",
            "format": ""
        },
        {
            "name": "labelSelector",
            "baseName": "labelSelector",
            "type": "IoK8sApiAuthorizationV1LabelSelectorAttributes",
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
            "name": "resource",
            "baseName": "resource",
            "type": "string",
            "format": ""
        },
        {
            "name": "subresource",
            "baseName": "subresource",
            "type": "string",
            "format": ""
        },
        {
            "name": "verb",
            "baseName": "verb",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAuthorizationV1ResourceAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}
