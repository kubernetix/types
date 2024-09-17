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

import { IoK8sApiAppsV1DeploymentStrategy } from '../models/IoK8sApiAppsV1DeploymentStrategy';
import { IoK8sApiCoreV1PodTemplateSpec } from '../models/IoK8sApiCoreV1PodTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../models/IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { HttpFile } from '../http/http';

/**
* DeploymentSpec is the specification of the desired behavior of the Deployment.
*/
export class IoK8sApiAppsV1DeploymentSpec {
    /**
    * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
    */
    'minReadySeconds'?: number;
    /**
    * Indicates that the deployment is paused.
    */
    'paused'?: boolean;
    /**
    * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
    */
    'progressDeadlineSeconds'?: number;
    /**
    * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
    */
    'replicas'?: number;
    /**
    * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
    */
    'revisionHistoryLimit'?: number;
    'selector': IoK8sApimachineryPkgApisMetaV1LabelSelector;
    'strategy'?: IoK8sApiAppsV1DeploymentStrategy;
    'template': IoK8sApiCoreV1PodTemplateSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "minReadySeconds",
            "baseName": "minReadySeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "paused",
            "baseName": "paused",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "progressDeadlineSeconds",
            "baseName": "progressDeadlineSeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "revisionHistoryLimit",
            "baseName": "revisionHistoryLimit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "IoK8sApimachineryPkgApisMetaV1LabelSelector",
            "format": ""
        },
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "IoK8sApiAppsV1DeploymentStrategy",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "IoK8sApiCoreV1PodTemplateSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAppsV1DeploymentSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
