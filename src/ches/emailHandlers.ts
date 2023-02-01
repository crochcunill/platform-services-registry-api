// @ts-nocheck
import chesService from "./index.js";
import swig from "swig";
import { RequestType, RequestDecision } from "../__generated__/resolvers-types.js";
const adminEmails = ['zhanna.kolesnyk@gov.bc.ca'];
const clusterNames = [
  {
    id: 1,
    name: "clab",
    humanFriendlyName: "CLAB Calgary"
  },
  {
    id: 2,
    name: "klab",
    humanFriendlyName: "KLAB Kamloops"
  },
  {
    id: 3,
    name: "silver",
    humanFriendlyName: "Silver Kamloops"
  },
  {
    id: 4,
    name: "gold",
    humanFriendlyName: "Gold Kamloops"
  },
  {
    id: 5,
    name: "golddr",
    humanFriendlyName: "Gold (DR) Calgary"
  },
  {
    id: 6,
    name: "klab2",
    humanFriendlyName: "KLAB2 Kamloops"
  },
  {
    id: 7,
    name: "emerald",
    humanFriendlyName: "Emerald Hosting Tier"
  }
];
export const generateEmailTemplateData = (project, requestedProject, other = {}) => {
  const projectOwner = project.projectOwner;
  const primaryTechnicalLead = project.primaryTechnicalLead;
  const secondaryTechnicalLead = project.secondaryTechnicalLead;
  return {
    consoleURLProdNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-prod`,
    consoleURLDevNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-dev`,
    consoleURLTestNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-test`,
    consoleURLToolNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-tool`,
    isProductionQuotaChanged: requestedProject && project && JSON.stringify(project.productionQuota) !== JSON.stringify(requestedProject.productionQuota),
    productionQuotaCPURequested: requestedProject && project && (requestedProject.productionQuota.cpuRequests !== project.productionQuota.cpuRequests) ? requestedProject.productionQuota.cpuRequests : null,
    productionQuotaMemoryRequested: requestedProject && project && (requestedProject.productionQuota.memoryRequests !== project.productionQuota.memoryRequests) ? requestedProject.productionQuota.memoryRequests : null,
    productionQuotaStorageRequested: requestedProject && project && (requestedProject.productionQuota.storageFile !== project.productionQuota.storageFile) ? requestedProject.productionQuota.storageFile : null,
    isDevelopmentQuotaChanged: requestedProject && project && JSON.stringify(project.developmentQuota) !== JSON.stringify(requestedProject.developmentQuota),
    developmentQuotaCPURequested: requestedProject && project && (requestedProject.developmentQuota.cpuRequests !== project.developmentQuota.cpuRequests) ? requestedProject.developmentQuota.cpuRequests : null,
    developmentQuotaMemoryRequested: requestedProject && project && (requestedProject.developmentQuota.memoryRequests !== project.developmentQuota.memoryRequests) ? requestedProject.developmentQuota.memoryRequests : null,
    developmentQuotaStorageRequested: requestedProject && project && (requestedProject.developmentQuota.storageFile !== project.developmentQuota.storageFile) ? requestedProject.developmentQuota.storageFile : null,
    isTestQuotaChanged: requestedProject && project && JSON.stringify(project.testQuota) !== JSON.stringify(requestedProject.testQuota),
    testQuotaCPURequested: requestedProject && project && (requestedProject.testQuota.cpuRequests !== project.testQuota.cpuRequests) ? requestedProject.testQuota.cpuRequests : null,
    testQuotaMemoryRequested: requestedProject && project && (requestedProject.testQuota.memoryRequests !== project.testQuota.memoryRequests) ? requestedProject.testQuota.memoryRequests : null,
    testQuotaStorageRequested: requestedProject && project && (requestedProject.testQuota.storageFile !== project.testQuota.storageFile) ? requestedProject.testQuota.storageFile : null,
    isToolsQuotaChanged: requestedProject && project && JSON.stringify(project.toolsQuota) !== JSON.stringify(requestedProject.toolsQuota),
    toolsQuotaCPURequested: requestedProject && project && (requestedProject.toolsQuota.cpuRequests !== project.toolsQuota.cpuRequests) ? requestedProject.toolsQuota.cpuRequests : null,
    toolsQuotaMemoryRequested: requestedProject && project && (requestedProject.toolsQuota.memoryRequests !== project.toolsQuota.memoryRequests) ? requestedProject.toolsQuota.memoryRequests : null,
    toolsQuotaStorageRequested: requestedProject && project && (requestedProject.toolsQuota.storageFile !== project.toolsQuota.storageFile) ? requestedProject.toolsQuota.storageFile : null,
    productionQuotaCPUCurrent: project?.productionQuota?.cpuRequests || null,
    productionQuotaMemoryCurrent: project?.productionQuota?.memoryRequests || null,
    productionQuotaStorageCurrent: project?.productionQuota?.storageFile || null,
    developmentQuotaCPUCurrent: project?.developmentQuota?.cpuRequests || null,
    developmentQuotaMemoryCurrent: project?.developmentQuota?.memoryRequests || null,
    developmentQuotaStorageCurrent: project?.developmentQuota?.storageFile || null,
    testQuotaCPUCurrent: project?.testQuota?.cpuRequests || null,
    testQuotaMemoryCurrent: project?.testQuota?.memoryRequests || null,
    testQuotaStorageCurrent: project?.testQuota?.storageFile || null,
    toolsQuotaCPUCurrent: project?.toolsQuota?.cpuRequests || null,
    toolsQuotaMemoryCurrent: project?.toolsQuota?.memoryRequests || null,
    toolsQuotaStorageCurrent: project?.toolsQuota?.storageFile || null,
    licencePlate: requestedProject.licencePlate,
    projectName: requestedProject.name,
    productDescription: requestedProject.description,
    productMinistry: requestedProject.ministry,
    POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
    POEmail: projectOwner.email,
    POGitHubOrIDIR: projectOwner?.POIDIR || projectOwner?.githubId,
    PriTLName: `${primaryTechnicalLead?.firstName} ${primaryTechnicalLead?.lastName}`,
    PriTLEmail: primaryTechnicalLead?.email,
    PriTLGitHubOrIDIR: primaryTechnicalLead?.POIDIR || primaryTechnicalLead?.githubId,
    SecTLName: secondaryTechnicalLead
      ? `${secondaryTechnicalLead?.firstName} ${secondaryTechnicalLead.lastName}`
      : null,
    SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead?.email : null,
    SecTLGitHubOrIDIR: secondaryTechnicalLead ? secondaryTechnicalLead?.POIDIR
      ? secondaryTechnicalLead?.POIDIR
      : secondaryTechnicalLead?.githubId : null,
    setCluster: clusterNames.filter(item => item.name.toLowerCase() === requestedProject?.cluster.toLowerCase())[0]?.humanFriendlyName,
    ...other
  };
};
export const sendEditRequestEmails = async (project, requestedProject) => {
  const quotaChanged = !((JSON.stringify(project.productionQuota) === JSON.stringify(requestedProject.productionQuota)) &&
    (JSON.stringify(project.developmentQuota) === JSON.stringify(requestedProject.developmentQuota)) &&
    (JSON.stringify(project.testQuota) === JSON.stringify(requestedProject.testQuota)) &&
    (JSON.stringify(project.toolsQuota) === JSON.stringify(requestedProject.toolsQuota)));
  const contactChanged = !(requestedProject.projectOwner.email === project.projectOwner.email &&
    requestedProject.primaryTechnicalLead.email ===
    project.primaryTechnicalLead.email &&
    requestedProject.secondaryTechnicalLead?.email ===
    project.secondaryTechnicalLeadId?.email);
  console.log('Quota Changed', quotaChanged, contactChanged)

  try {
    // *** Quota Changed and no Contact changed
    if (quotaChanged && !contactChanged) {
      console.log('Quota Changed and no Contact changed')
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile("./src/ches/new-templates/quota-request-received-email.html", generateEmailTemplateData(project, requestedProject)),
        // For all project contacts. Sent when a new quota edit request is submitted successfully.
        to: [
          project.projectOwner,
          project.primaryTechnicalLead,
          project.secondaryTechnicalLead
        ]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `${requestedProject.name} quota change request received`
      });
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile("./src/ches/new-templates/super-admin-request-email.html", generateEmailTemplateData(project, requestedProject, {
          requestType: "Quota editing",
          isProvisioningRequest: false,
          isQuotaRequest: true
        })),
        //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
        to: adminEmails,
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `New Quota editing request in Registry waiting for your approval`
      });
    }
    // ***
    // *** No Quota changed and Project Contact Change
    if (!quotaChanged && contactChanged) {
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile("./src/ches/new-templates/product-contact-change-confirmation-email.html", generateEmailTemplateData(requestedProject, project)),
        // Sent to all new, current, and prior project contacts when the Provisioner processes the request in Openshift. Contacts who were just removed should also receive this email alerting them to these changes.
        to: [
          project.projectOwner,
          project.primaryTechnicalLead,
          project?.secondaryTechnicalLead,
          requestedProject?.projectOwner,
          requestedProject?.primaryTechnicalLead,
          requestedProject?.secondaryTechnicalLead
        ]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: "Contact information for your product on Private Cloud Openshift platform has changed"
      });
    }
    // *** Quota changed and Project Contact Change
    if (quotaChanged && contactChanged) {
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile("./src/ches/new-templates/super-admin-request-email.html", generateEmailTemplateData(project, requestedProject, {
          requestType: "Quota editing",
          isProvisioningRequest: false,
          isQuotaRequest: true
        })),
        //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
        to: adminEmails,
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `New Quota editing request in Registry waiting for your approval`
      });
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile("./src/ches/new-templates/quota-and-tlpo-changes.html", generateEmailTemplateData(project, requestedProject)),
        // Sent to all new, current, and prior project contacts upon form submit. Contacts who were just removed should also receive this email alerting them to these changes.
        to: [
          project.projectOwner,
          project.primaryTechnicalLead,
          project.secondaryTechnicalLead,
          requestedProject.projectOwner,
          requestedProject.primaryTechnicalLead,
          requestedProject.secondaryTechnicalLead
        ]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `${requestedProject.name} quota and product contact change request received`
      });
    }
  }
  catch (error) {
    console.error(error);
  }
  // *** What about no quota change and no contact change?
};
export const sendCreateRequestEmails = async (requestedProject) => {
  const project = requestedProject; // For consistency with the other functions, even though a create request does not have a project yet.
  try {
    chesService.send({
      bodyType: "html",
      body: swig.renderFile("./src/ches/new-templates/super-admin-request-email.html", generateEmailTemplateData(project, requestedProject, {
        requestType: 'Provisioning',
        isProvisioningRequest: true,
        isQuotaRequest: false,
      })),
      //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
      to: adminEmails,
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `New Provisioning request in Registry waiting for your approval`
    });
    chesService.send({
      bodyType: "html",
      body: swig.renderFile("./src/ches/new-templates/provisioning-request-received-email.html", generateEmailTemplateData(project, requestedProject)),
      // To all project contacts. Sent when a new provisioning request has been submitted successfully.
      to: [
        project.projectOwner,
        project.primaryTechnicalLead,
        project.secondaryTechnicalLead
      ]
        .filter(Boolean)
        .map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `${requestedProject.name} provisioning request received`
    });
  }
  catch (error) {
    console.error(error);
  }
};
export const sendDeleteRequestEmails = async (project) => {
  const requestedProject = project; // For consistency with the other functions, even though a delete request does not have a requestedProject yet.
  try {
    chesService.send({
      bodyType: "html",
      body: swig.renderFile("./src/ches/new-templates/deletion-request-confirmation-email.html", generateEmailTemplateData(project, requestedProject)),
      // For all project contacts. Sent when the project set deletion request is successfully submitted
      to: [
        project.projectOwner,
        project.primaryTechnicalLead,
        project.secondaryTechnicalLead
      ]
        .filter(Boolean)
        .map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `${requestedProject.name} deletion request received`
    });
    chesService.send({
      bodyType: "html",
      body: swig.renderFile("./src/ches/new-templates/super-admin-request-email.html", generateEmailTemplateData(project, requestedProject, {
        requestType: "Delete",
        isProvisioningRequest: false,
        isQuotaRequest: false,
      })),
      //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
      to: adminEmails,
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `New Delete request in Registry waiting for your approval`
    });
  }
  catch (error) {
    console.error(error);
  }
};
export const sendMakeDecisionEmails = async (request) => {
  const { type, decisionStatus, requestedProject, project } = request;
  try {
    if (decisionStatus === RequestDecision.Approved) {
      if (type === RequestType.Create) {
        chesService.send({
          bodyType: "html",
          body: swig.renderFile("./src/ches/new-templates/provisioning-request-completion-email.html", generateEmailTemplateData(requestedProject, requestedProject, {
            consoleURL: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/`,
          })),
          //For all project contacts. Sent when the provisioner application has finished provisioning the new namespaces for a product.
          to: [
            requestedProject.projectOwner,
            requestedProject.primaryTechnicalLead,
            requestedProject.secondaryTechnicalLead
          ]
            .filter(Boolean)
            .map(({ email }) => email),
          from: "Registry <PlatformServicesTeam@gov.bc.ca>",
          subject: "Your provisioning request for Private Cloud OpenShift Platform has been completed"
        });
      }
      if (type === RequestType.Edit) {
        chesService.send({
          bodyType: "html",
          body: swig.renderFile("./src/ches/new-templates/quota-request-completion-email.html", generateEmailTemplateData(requestedProject, project, {
            consoleURL: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/`
          })),
          // For all project contacts.
          to: [
            requestedProject.projectOwner,
            requestedProject.primaryTechnicalLead,
            requestedProject.secondaryTechnicalLead,
            project.projectOwner,
            project.primaryTechnicalLead,
            project.secondaryTechnicalLead
          ]
            .filter(Boolean)
            .map(({ email }) => email),
          from: "Registry <PlatformServicesTeam@gov.bc.ca>",
          subject: "Resource quota for your product in Private Cloud Openshift Platform has changed"
        });
      }
      if (type === RequestType.Delete) {
        chesService.send({
          bodyType: "html",
          body: swig.renderFile("./src/ches/new-templates/deletion-request-completion-email.html", generateEmailTemplateData(project, project)),
          // For all project contacts. Sent when Provisioner processes the project set deletion request in Openshift
          to: [
            project.projectOwner,
            project.primaryTechnicalLead,
            project.secondaryTechnicalLead
          ]
            .filter(Boolean)
            .map(({ email }) => email),
          from: "Registry <PlatformServicesTeam@gov.bc.ca>",
          subject: "Your product deletion request has been completed"
        });
      }
    }
    if (decisionStatus === RequestDecision.Rejected) {
      chesService.send({
        bodyType: "html",
        body: swig.renderFile("./src/ches/new-templates/request-denial-email.html", generateEmailTemplateData(project, requestedProject, {
          requestType: type === RequestType.Create
            ? "Provisioning"
            : type === RequestType.Edit
              ? "Edit"
              : "Deletion",
          humanActionComment: requestedProject.humanActionComment || null,
          isProvisioningRequest: type === RequestType.Create,
          isQuotaRequest: type === RequestType.Edit,
          productDescription: requestedProject.description,
          productMinistry: requestedProject.ministry
        })),
        // to all project contacts when any request (quota, provisioning, or deletion) is denied.
        to: [
          project.projectOwner,
          project.primaryTechnicalLead,
          project.secondaryTechnicalLead
        ]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: ` ${type === RequestType.Create
          ? "Provisioning"
          : type === RequestType.Edit
            ? "Edit"
            : "Deletion"} request has been rejected`
      });
    }
  }
  catch (error) {
    console.error(error);
  }
};
