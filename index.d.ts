declare namespace k8x {
  const $env: Record<string, any>;

  type Chart = {
    name: string
    namespace: string
    components: (Ingress|Deployment)[],
  }

// Definition für einen Pod (Kubernetes 1.31, TypeScript 5)
  type Pod = {
    apiVersion: 'v1';
    kind: 'Pod';
    metadata: Metadata;
    spec: PodSpec;
    status?: PodStatus;
  };

  type Metadata = {
    name: string;
    namespace?: string;
    labels?: Record<string, string>;
    annotations?: Record<string, string>;
    uid?: string;
    creationTimestamp?: string;
    ownerReferences?: OwnerReference[];
  };

  type OwnerReference = {
    apiVersion: string;
    kind: string;
    name: string;
    uid: string;
    controller?: boolean;
    blockOwnerDeletion?: boolean;
  };

  type PodSpec = {
    containers: Container[];
    restartPolicy?: 'Always' | 'OnFailure' | 'Never';
    nodeName?: string;
    nodeSelector?: Record<string, string>;
    serviceAccountName?: string;
    automountServiceAccountToken?: boolean;
  };

  type Container = {
    name: string;
    image: string;
    ports?: ContainerPort[];
    resources?: ResourceRequirements;
    env?: EnvVar[];
  };

  type ContainerPort = {
    containerPort: number;
    protocol?: 'TCP' | 'UDP' | 'SCTP';
  };

  type ResourceRequirements = {
    limits?: Record<string, string>;
    requests?: Record<string, string>;
  };

  type EnvVar = {
    name: string;
    value?: string;
    valueFrom?: EnvVarSource;
  };

  type EnvVarSource = {
    fieldRef?: { fieldPath: string };
    resourceFieldRef?: { containerName?: string; resource: string };
  };

  type PodStatus = {
    phase: string;
    conditions?: PodCondition[];
    hostIP?: string;
    podIP?: string;
    startTime?: string;
  };

  type PodCondition = {
    type: string;
    status: string;
    lastProbeTime?: string;
    lastTransitionTime?: string;
  };

// Definition für ein Deployment (Kubernetes 1.31, TypeScript 5)
  type Deployment = {
    apiVersion: 'apps/v1';
    kind: 'Deployment';
    metadata?: Metadata;
    spec?: DeploymentSpec;
    status?: DeploymentStatus;
  };

  type DeploymentSpec = {
    replicas?: number;
    selector: {
      matchLabels: Record<string, string>;
    };
    template: PodTemplate;
    strategy?: DeploymentStrategy;
  };

  type PodTemplate = {
    metadata: Metadata;
    spec: PodSpec;
  };

  type DeploymentStrategy = {
    type: 'Recreate' | 'RollingUpdate';
    rollingUpdate?: RollingUpdateDeployment;
  };

  type RollingUpdateDeployment = {
    maxUnavailable?: number | string;
    maxSurge?: number | string;
  };

  type DeploymentStatus = {
    observedGeneration?: number;
    replicas: number;
    updatedReplicas?: number;
    readyReplicas?: number;
    availableReplicas?: number;
  };

// Definition für einen Service (Kubernetes 1.31, TypeScript 5)
  type Service = {
    apiVersion: 'v1';
    kind: 'Service';
    metadata: Metadata;
    spec: ServiceSpec;
    status?: ServiceStatus;
  };

  type ServiceSpec = {
    type: 'ClusterIP' | 'NodePort' | 'LoadBalancer';
    ports: ServicePort[];
    selector?: Record<string, string>;
    clusterIP?: string;
    externalIPs?: string[];
    sessionAffinity?: 'None' | 'ClientIP';
  };

  type ServicePort = {
    protocol?: 'TCP' | 'UDP' | 'SCTP';
    port: number;
    targetPort?: number | string;
    nodePort?: number;
  };

  type ServiceStatus = {
    loadBalancer?: {
      ingress?: { ip: string; hostname?: string }[];
    };
  };

// Definition für eine ConfigMap (Kubernetes 1.31, TypeScript 5)
  type ConfigMap = {
    apiVersion: 'v1';
    kind: 'ConfigMap';
    metadata: Metadata;
    data: Record<string, string>;
    binaryData?: Record<string, string>;
  };

// Definition für ein Secret (Kubernetes 1.31, TypeScript 5)
  type Secret = {
    apiVersion: 'v1';
    kind: 'Secret';
    metadata: Metadata;
    data: Record<string, string>;
    stringData?: Record<string, string>;
    type: string;
  };

// Definition für einen Ingress (Kubernetes 1.31, TypeScript 5)
  type Ingress = {
    apiVersion: 'networking.k8s.io/v1';
    kind: 'Ingress';
    metadata?: Metadata;
    spec: IngressSpec;
    status?: IngressStatus;
  };

  type IngressSpec = {
    rules: IngressRule[];
    tls?: IngressTLS[];
  };

  type IngressRule = {
    host: string;
    http: {
      paths: IngressPath[];
    };
  };

  type IngressPath = {
    path: string;
    pathType: 'Prefix' | 'Exact' | 'ImplementationSpecific';
    backend: {
      service: {
        name: string;
        port: {
          number: number;
        };
      };
    };
  };

  type IngressTLS = {
    hosts: string[];
    secretName: string;
  };

  type IngressStatus = {
    loadBalancer?: {
      ingress?: { ip: string; hostname?: string }[];
    };
  };

// Definition für ein PersistentVolumeClaim (PVC) (Kubernetes 1.31, TypeScript 5)
  type PersistentVolumeClaim = {
    apiVersion: 'v1';
    kind: 'PersistentVolumeClaim';
    metadata: Metadata;
    spec: PersistentVolumeClaimSpec;
    status?: PersistentVolumeClaimStatus;
  };

  type PersistentVolumeClaimSpec = {
    accessModes: ('ReadWriteOnce' | 'ReadOnlyMany' | 'ReadWriteMany')[];
    resources: {
      requests: {
        storage: string;
      };
    };
    storageClassName?: string;
    volumeMode?: 'Filesystem' | 'Block';
  };

  type PersistentVolumeClaimStatus = {
    phase: string;
    capacity?: Record<string, string>;
    accessModes?: string[];
  };
}