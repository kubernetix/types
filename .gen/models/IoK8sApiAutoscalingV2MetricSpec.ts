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

import { IoK8sApiAutoscalingV2ContainerResourceMetricSource } from '../models/IoK8sApiAutoscalingV2ContainerResourceMetricSource';
import { IoK8sApiAutoscalingV2ExternalMetricSource } from '../models/IoK8sApiAutoscalingV2ExternalMetricSource';
import { IoK8sApiAutoscalingV2ObjectMetricSource } from '../models/IoK8sApiAutoscalingV2ObjectMetricSource';
import { IoK8sApiAutoscalingV2PodsMetricSource } from '../models/IoK8sApiAutoscalingV2PodsMetricSource';
import { IoK8sApiAutoscalingV2ResourceMetricSource } from '../models/IoK8sApiAutoscalingV2ResourceMetricSource';
import { HttpFile } from '../http/http';

/**
* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
*/
export class IoK8sApiAutoscalingV2MetricSpec {
    'containerResource'?: IoK8sApiAutoscalingV2ContainerResourceMetricSource;
    'external'?: IoK8sApiAutoscalingV2ExternalMetricSource;
    'object'?: IoK8sApiAutoscalingV2ObjectMetricSource;
    'pods'?: IoK8sApiAutoscalingV2PodsMetricSource;
    'resource'?: IoK8sApiAutoscalingV2ResourceMetricSource;
    /**
    * type is the type of metric source.  It should be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerResource",
            "baseName": "containerResource",
            "type": "IoK8sApiAutoscalingV2ContainerResourceMetricSource",
            "format": ""
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "IoK8sApiAutoscalingV2ExternalMetricSource",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "IoK8sApiAutoscalingV2ObjectMetricSource",
            "format": ""
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "IoK8sApiAutoscalingV2PodsMetricSource",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "IoK8sApiAutoscalingV2ResourceMetricSource",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV2MetricSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
