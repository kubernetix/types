import { IoK8sApiNetworkingV1Ingress } from "./.gen/models/IoK8sApiNetworkingV1Ingress.ts";

declare var React: any;

declare namespace JSX {
  type IntrinsicElements = {
    /**
     *  The cluster component can be used to configure a target cluster different that the default one. You can define multiple cluster
     *
     * @example
     * Possible children:
     * ```tsx
     * <Namespace />
     *
     * ```
     * @see {@link http://example.com/@internal | the @internal tag}
     */
    chart: {
      /**
       * This is the name of the chart
       */
      name: string;
      /**
       * This is the version of the chart
       */
      version: string;
      /**
       * This is the version of contained app
       */
      appVersion?: string;
      /**
       * This is the version of the k8s cluster
       */
      kubeVersion?: string;
      description?: string;
      type?: string;
      keywords?: string[];
      home?: URL;
      sources?: string[];

      maintainers?: string[];
      icon?: URL;
      deprecated?: boolean;
      annotations?: string[];
      //children: IntrinsicElements["k8s"];
    };
    ingress: typeof IoK8sApiNetworkingV1Ingress
  };
}
