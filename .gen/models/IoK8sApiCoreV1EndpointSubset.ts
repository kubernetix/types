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

import { IoK8sApiCoreV1EndpointAddress } from '../models/IoK8sApiCoreV1EndpointAddress';
import { IoK8sApiCoreV1EndpointPort } from '../models/IoK8sApiCoreV1EndpointPort';
import { HttpFile } from '../http/http';

/**
* EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:   {    Addresses: [{\"ip\": \"10.10.1.1\"}, {\"ip\": \"10.10.2.2\"}],    Ports:     [{\"name\": \"a\", \"port\": 8675}, {\"name\": \"b\", \"port\": 309}]  }  The resulting set of endpoints can be viewed as:   a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],  b: [ 10.10.1.1:309, 10.10.2.2:309 ]
*/
export class IoK8sApiCoreV1EndpointSubset {
    /**
    * IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
    */
    'addresses'?: Array<IoK8sApiCoreV1EndpointAddress>;
    /**
    * IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
    */
    'notReadyAddresses'?: Array<IoK8sApiCoreV1EndpointAddress>;
    /**
    * Port numbers available on the related IP addresses.
    */
    'ports'?: Array<IoK8sApiCoreV1EndpointPort>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<IoK8sApiCoreV1EndpointAddress>",
            "format": ""
        },
        {
            "name": "notReadyAddresses",
            "baseName": "notReadyAddresses",
            "type": "Array<IoK8sApiCoreV1EndpointAddress>",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<IoK8sApiCoreV1EndpointPort>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1EndpointSubset.attributeTypeMap;
    }

    public constructor() {
    }
}
