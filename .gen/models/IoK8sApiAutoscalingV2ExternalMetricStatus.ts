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

import { IoK8sApiAutoscalingV2MetricIdentifier } from '../models/IoK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricValueStatus } from '../models/IoK8sApiAutoscalingV2MetricValueStatus';
import { HttpFile } from '../http/http';

/**
* ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
*/
export class IoK8sApiAutoscalingV2ExternalMetricStatus {
    'current': IoK8sApiAutoscalingV2MetricValueStatus;
    'metric': IoK8sApiAutoscalingV2MetricIdentifier;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "current",
            "baseName": "current",
            "type": "IoK8sApiAutoscalingV2MetricValueStatus",
            "format": ""
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "IoK8sApiAutoscalingV2MetricIdentifier",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV2ExternalMetricStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
