import {
  Cluster,
  RequestType,
  DefaultCpuOptions,
  DefaultMemoryOptions,
  DefaultStorageOptions
} from "./constants.js";

// Create a test env variable that prefix the namespace name with "t"
function message(action, requestedProject) {
  let {
    id, // Use ID from actaul project, not from requested project
    licencePlate,
    name,
    description,
    ministry,
    cluster,
    productionQuota,
    developmentQuota,
    testQuota,
    toolsQuota,
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead
  } = requestedProject;

  const snapshot = {
    name: "snapshot-5",
    snapshotCount: 5
  };

  testQuota = {
    cpu: DefaultCpuOptions[testQuota.cpu],
    memory: DefaultMemoryOptions[testQuota.memory],
    storage: DefaultStorageOptions[testQuota.storage]
  };

  productionQuota = {
    cpu: DefaultCpuOptions[productionQuota.cpu],
    memory: DefaultMemoryOptions[productionQuota.memory],
    storage: DefaultStorageOptions[productionQuota.storage]
  };

  developmentQuota = {
    cpu: DefaultCpuOptions[developmentQuota.cpu],
    memory: DefaultMemoryOptions[developmentQuota.memory],
    storage: DefaultStorageOptions[developmentQuota.storage]
  };

  toolsQuota = {
    cpu: DefaultCpuOptions[toolsQuota.cpu],
    memory: DefaultMemoryOptions[toolsQuota.memory],
    storage: DefaultStorageOptions[toolsQuota.storage]
  };

  let allianceLabel = "";
  switch (ministry.toLocaleLowerCase()) {
    case "ag":
    case "pssg":
    case "embc":
    case "mah":
      allianceLabel = "JAG";
      break;
    default:
      allianceLabel = "none";
      break;
  }

  const projectOwnerContact = {
    email: projectOwner.email,
    role: "owner"
  };

  const primaryTechnicalLeadContact = {
    email: primaryTechnicalLead.email,
    role: "lead"
  };

  const secondaryTechnicalLeadContact = secondaryTechnicalLead
    ? {
        email: secondaryTechnicalLead.email,
        role: "lead"
      }
    : null;

  const namespaces = [
    { quotaName: "tools", quota: toolsQuota },
    { quotaName: "prod", quota: productionQuota },
    { quotaName: "dev", quota: developmentQuota },
    { quotaName: "test", quota: testQuota }
  ].map(({ quotaName, quota }) => ({
    // namespace_id: 21,
    name: `${licencePlate}-${[quotaName]}`,
    quota: {
      cpu: quota.cpu.name,
      memory: quota.memory.name,
      storage: quota.storage.name,
      snapshot: snapshot.name
    },
    quotas: {
      cpu: { requests: quota.cpu.cpuRequests, limits: quota.cpu.cpuLimits },
      memory: {
        requests: quota.memory.memoryRequests,
        limits: quota.memory.memoryLimits
      },
      storage: {
        block: quota.storage.storageBlock,
        file: quota.storage.storageFile,
        backup: quota.storage.storageBackup,
        capacity: quota.storage.storageCapacity,
        pvc_count: quota.storage.storagePvcCount
      },
      snapshot: { count: snapshot.snapshotCount }
    }
  }));

  const request = {
    action: RequestType[action],
    profile_id: id,
    // cluster_id: cluster,
    cluster_name: Cluster[cluster],
    display_name: name,
    description: description,
    ministry_id: ministry,
    merge_type: "auto", // Make this a variable
    alliance: allianceLabel, // "JAG" for Justice Attornies Group, else "none"
    namespaces,
    contacts: [
      projectOwnerContact,
      primaryTechnicalLeadContact,
      secondaryTechnicalLeadContact
    ].filter(Boolean)
  };

  return request;
}

export default message;
