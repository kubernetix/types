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

import { IoK8sApiNetworkingV1NetworkPolicyEgressRule } from '../models/IoK8sApiNetworkingV1NetworkPolicyEgressRule';
import { IoK8sApiNetworkingV1NetworkPolicyIngressRule } from '../models/IoK8sApiNetworkingV1NetworkPolicyIngressRule';
import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../models/IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { HttpFile } from '../http/http';

/**
* NetworkPolicySpec provides the specification of a NetworkPolicy
*/
export class IoK8sApiNetworkingV1NetworkPolicySpec {
    /**
    * egress is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
    */
    'egress'?: Array<IoK8sApiNetworkingV1NetworkPolicyEgressRule>;
    /**
    * ingress is a list of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod\'s local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
    */
    'ingress'?: Array<IoK8sApiNetworkingV1NetworkPolicyIngressRule>;
    'podSelector': IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
    * policyTypes is a list of rule types that the NetworkPolicy relates to. Valid options are [\"Ingress\"], [\"Egress\"], or [\"Ingress\", \"Egress\"]. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ \"Egress\" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include \"Egress\" (since such a policy would not include an egress section and would otherwise default to just [ \"Ingress\" ]). This field is beta-level in 1.8
    */
    'policyTypes'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "egress",
            "baseName": "egress",
            "type": "Array<IoK8sApiNetworkingV1NetworkPolicyEgressRule>",
            "format": ""
        },
        {
            "name": "ingress",
            "baseName": "ingress",
            "type": "Array<IoK8sApiNetworkingV1NetworkPolicyIngressRule>",
            "format": ""
        },
        {
            "name": "podSelector",
            "baseName": "podSelector",
            "type": "IoK8sApimachineryPkgApisMetaV1LabelSelector",
            "format": ""
        },
        {
            "name": "policyTypes",
            "baseName": "policyTypes",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiNetworkingV1NetworkPolicySpec.attributeTypeMap;
    }

    public constructor() {
    }
}
