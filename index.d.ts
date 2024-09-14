declare var React: any;

declare namespace k8x {
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
  type Cluster = {
    config?: string;
  };

  type Namespace = {
    name?: string;
  };

  type Ingress = {};
  type Deployment = {
    "config-path"?: string;
  };
  type MatchLabel = {
    key: string;
  };
  type MatchExpression = {
    key: string;
    operator: "In" | "Out";
    values: string[];
  };
  type Selector = {};
  type Spec = {
    replicas?: number;
  };
  type Template = {};
  type Container = {
    image: string;
    imagePullPolicy: "Always" | "Never";
    name: string;
  };
  type Metadata = {
    name?: string;
  };
  type Annotation = { [key: string]: string };
  type Label = Annotation;
  type Service = {
    kind?: "Service";
    apiVersion?: "v1";
    children?: any;
  };
  type Port = {
    children?: any;
    name?: string;
    protocol: "TCP" | "UDP";
    port: number;
    targetPort: number;
  };
}

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
  };
}
