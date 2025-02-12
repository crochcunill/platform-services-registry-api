const data = [
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The Supreme Court Scheduling System (SCSS) is an application used by the Supreme Court Judiciary (SCJ) for scheduling and tracking court case information. This integration service integrates the SCSS application with the CEIS database.","openshift.io/display-name":"CSB Supreme Court Scheduling Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"24a139","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"24a139","profile_id":"574","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"24a139-dev"}}\n',
      "openshift.io/description":
        "The Supreme Court Scheduling System (SCSS) is an application used by the Supreme Court Judiciary (SCJ) for scheduling and tracking court case information. This integration service integrates the SCSS application with the CEIS database.",
      "openshift.io/display-name":
        "CSB Supreme Court Scheduling Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c32,c24",
      "openshift.io/sa.scc.supplemental-groups": "1001040000/10000",
      "openshift.io/sa.scc.uid-range": "1001040000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:28Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "24a139",
      environment: "dev",
      "kubernetes.io/metadata.name": "24a139-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "24a139",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "574",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "24a139-dev",
    resourceVersion: "1747946252",
    uid: "3561afeb-5a1c-409d-a1a6-b65ab5028b7c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The Supreme Court Scheduling System (SCSS) is an application used by the Supreme Court Judiciary (SCJ) for scheduling and tracking court case information. This integration service integrates the SCSS application with the CEIS database.","openshift.io/display-name":"CSB Supreme Court Scheduling Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"24a139","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"24a139","profile_id":"574","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"24a139-prod"}}\n',
      "openshift.io/description":
        "The Supreme Court Scheduling System (SCSS) is an application used by the Supreme Court Judiciary (SCJ) for scheduling and tracking court case information. This integration service integrates the SCSS application with the CEIS database.",
      "openshift.io/display-name":
        "CSB Supreme Court Scheduling Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c32,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001030000/10000",
      "openshift.io/sa.scc.uid-range": "1001030000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:28Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "24a139",
      environment: "prod",
      "kubernetes.io/metadata.name": "24a139-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "24a139",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "574",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "24a139-prod",
    resourceVersion: "1747946310",
    uid: "c6851d85-2abc-4816-969e-fd8cdffbc376"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The Supreme Court Scheduling System (SCSS) is an application used by the Supreme Court Judiciary (SCJ) for scheduling and tracking court case information. This integration service integrates the SCSS application with the CEIS database.","openshift.io/display-name":"CSB Supreme Court Scheduling Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"24a139","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"24a139","profile_id":"574","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"24a139-test"}}\n',
      "openshift.io/description":
        "The Supreme Court Scheduling System (SCSS) is an application used by the Supreme Court Judiciary (SCJ) for scheduling and tracking court case information. This integration service integrates the SCSS application with the CEIS database.",
      "openshift.io/display-name":
        "CSB Supreme Court Scheduling Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c32,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001050000/10000",
      "openshift.io/sa.scc.uid-range": "1001050000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:28Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "24a139",
      environment: "test",
      "kubernetes.io/metadata.name": "24a139-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "24a139",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "574",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "24a139-test",
    resourceVersion: "1747946348",
    uid: "1bc1a131-a506-4de3-856f-599cfb266d46"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The Supreme Court Scheduling System (SCSS) is an application used by the Supreme Court Judiciary (SCJ) for scheduling and tracking court case information. This integration service integrates the SCSS application with the CEIS database.","openshift.io/display-name":"CSB Supreme Court Scheduling Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"24a139","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"24a139","profile_id":"574","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"24a139-tools"}}\n',
      "openshift.io/description":
        "The Supreme Court Scheduling System (SCSS) is an application used by the Supreme Court Judiciary (SCJ) for scheduling and tracking court case information. This integration service integrates the SCSS application with the CEIS database.",
      "openshift.io/display-name":
        "CSB Supreme Court Scheduling Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c33,c2",
      "openshift.io/sa.scc.supplemental-groups": "1001060000/10000",
      "openshift.io/sa.scc.uid-range": "1001060000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:28Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "24a139",
      environment: "tools",
      "kubernetes.io/metadata.name": "24a139-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "24a139",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "574",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "24a139-tools",
    resourceVersion: "1747946395",
    uid: "48703611-a6e5-4905-a3db-babf126c2160"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Application housing the payment services that are used by the other service BC applications.","openshift.io/display-name":"SBC PAY (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"472039","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"472039","profile_id":"569","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"472039-dev"}}\n',
      "openshift.io/description":
        "Application housing the payment services that are used by the other service BC applications.",
      "openshift.io/display-name": "SBC PAY (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c27",
      "openshift.io/sa.scc.supplemental-groups": "1001460000/10000",
      "openshift.io/sa.scc.uid-range": "1001460000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:56Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "472039",
      environment: "dev",
      "kubernetes.io/metadata.name": "472039-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "472039",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "569",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "472039-dev",
    resourceVersion: "1747946431",
    uid: "f2925faf-e6e9-402f-bc8a-f7f3636de0cf"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Application housing the payment services that are used by the other service BC applications.","openshift.io/display-name":"SBC PAY (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"472039","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"472039","profile_id":"569","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"472039-prod"}}\n',
      "openshift.io/description":
        "Application housing the payment services that are used by the other service BC applications.",
      "openshift.io/display-name": "SBC PAY (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c32",
      "openshift.io/sa.scc.supplemental-groups": "1001470000/10000",
      "openshift.io/sa.scc.uid-range": "1001470000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:56Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "472039",
      environment: "prod",
      "kubernetes.io/metadata.name": "472039-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "472039",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "569",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "472039-prod",
    resourceVersion: "1747946509",
    uid: "659cf3b9-9858-4bab-a137-55ef36a6957f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Application housing the payment services that are used by the other service BC applications.","openshift.io/display-name":"SBC PAY (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"472039","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"472039","profile_id":"569","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"472039-test"}}\n',
      "openshift.io/description":
        "Application housing the payment services that are used by the other service BC applications.",
      "openshift.io/display-name": "SBC PAY (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c22",
      "openshift.io/sa.scc.supplemental-groups": "1001450000/10000",
      "openshift.io/sa.scc.uid-range": "1001450000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:56Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "472039",
      environment: "test",
      "kubernetes.io/metadata.name": "472039-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "472039",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "569",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "472039-test",
    resourceVersion: "1747946567",
    uid: "31cdb20a-656e-4cb0-aca0-4127ba6b2d98"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Application housing the payment services that are used by the other service BC applications.","openshift.io/display-name":"SBC PAY (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"472039","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"472039","profile_id":"569","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"472039-tools"}}\n',
      "openshift.io/description":
        "Application housing the payment services that are used by the other service BC applications.",
      "openshift.io/display-name": "SBC PAY (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c17",
      "openshift.io/sa.scc.supplemental-groups": "1001440000/10000",
      "openshift.io/sa.scc.uid-range": "1001440000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:56Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "472039",
      environment: "tools",
      "kubernetes.io/metadata.name": "472039-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "472039",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "569",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "472039-tools",
    resourceVersion: "1747946585",
    uid: "284dd48a-10a7-43ee-858a-15f25ced012d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "lchung@provincialcourt.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"lchung@provincialcourt.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"PCSS is a web application for Provincial Court staff to that is used as the provincial court schedule system. Managed by Provincial Judiciary except for the web services to the JUSTIN database.","openshift.io/display-name":"Prov Court Scheduling System Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"5416bb","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"5416bb","profile_id":"576","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"5416bb-dev"}}\n',
      "openshift.io/description":
        "PCSS is a web application for Provincial Court staff to that is used as the provincial court schedule system. Managed by Provincial Judiciary except for the web services to the JUSTIN database.",
      "openshift.io/display-name":
        "Prov Court Scheduling System Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c32,c9",
      "openshift.io/sa.scc.supplemental-groups": "1001010000/10000",
      "openshift.io/sa.scc.uid-range": "1001010000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:27Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "5416bb",
      environment: "dev",
      "kubernetes.io/metadata.name": "5416bb-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "5416bb",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "576",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "5416bb-dev",
    resourceVersion: "1747946617",
    uid: "fe5302bb-be25-4d3c-8fa4-83d6a114143c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "lchung@provincialcourt.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"lchung@provincialcourt.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"PCSS is a web application for Provincial Court staff to that is used as the provincial court schedule system. Managed by Provincial Judiciary except for the web services to the JUSTIN database.","openshift.io/display-name":"Prov Court Scheduling System Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"5416bb","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"5416bb","profile_id":"576","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"5416bb-prod"}}\n',
      "openshift.io/description":
        "PCSS is a web application for Provincial Court staff to that is used as the provincial court schedule system. Managed by Provincial Judiciary except for the web services to the JUSTIN database.",
      "openshift.io/display-name":
        "Prov Court Scheduling System Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c30",
      "openshift.io/sa.scc.supplemental-groups": "1000990000/10000",
      "openshift.io/sa.scc.uid-range": "1000990000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:27Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "5416bb",
      environment: "prod",
      "kubernetes.io/metadata.name": "5416bb-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "5416bb",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "576",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "5416bb-prod",
    resourceVersion: "1747946639",
    uid: "327d9e10-827f-45a0-afa3-761e705e0076"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "lchung@provincialcourt.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"lchung@provincialcourt.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"PCSS is a web application for Provincial Court staff to that is used as the provincial court schedule system. Managed by Provincial Judiciary except for the web services to the JUSTIN database.","openshift.io/display-name":"Prov Court Scheduling System Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"5416bb","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"5416bb","profile_id":"576","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"5416bb-test"}}\n',
      "openshift.io/description":
        "PCSS is a web application for Provincial Court staff to that is used as the provincial court schedule system. Managed by Provincial Judiciary except for the web services to the JUSTIN database.",
      "openshift.io/display-name":
        "Prov Court Scheduling System Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c32,c14",
      "openshift.io/sa.scc.supplemental-groups": "1001020000/10000",
      "openshift.io/sa.scc.uid-range": "1001020000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:27Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "5416bb",
      environment: "test",
      "kubernetes.io/metadata.name": "5416bb-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "5416bb",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "576",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "5416bb-test",
    resourceVersion: "1747946662",
    uid: "5867d614-7030-43b7-bcb0-10c96185d1fc"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "lchung@provincialcourt.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"lchung@provincialcourt.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"PCSS is a web application for Provincial Court staff to that is used as the provincial court schedule system. Managed by Provincial Judiciary except for the web services to the JUSTIN database.","openshift.io/display-name":"Prov Court Scheduling System Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"5416bb","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"5416bb","profile_id":"576","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"5416bb-tools"}}\n',
      "openshift.io/description":
        "PCSS is a web application for Provincial Court staff to that is used as the provincial court schedule system. Managed by Provincial Judiciary except for the web services to the JUSTIN database.",
      "openshift.io/display-name":
        "Prov Court Scheduling System Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c32,c4",
      "openshift.io/sa.scc.supplemental-groups": "1001000000/10000",
      "openshift.io/sa.scc.uid-range": "1001000000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:27Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "5416bb",
      environment: "tools",
      "kubernetes.io/metadata.name": "5416bb-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "5416bb",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "576",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "5416bb-tools",
    resourceVersion: "1747946685",
    uid: "40ab1753-708d-4bb0-9bd9-93a2c9b0fb4a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}, {"email": "kyle.murray@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "RFK250"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}, {\\"email\\": \\"kyle.murray@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"RFK250\\"}]","openshift.io/description":"Application used to register leans.","openshift.io/display-name":"Personal Property Registry (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"65c1fd","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"65c1fd","profile_id":"568","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"65c1fd-dev"}}\n',
      "openshift.io/description": "Application used to register leans.",
      "openshift.io/display-name": "Personal Property Registry (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c2",
      "openshift.io/sa.scc.supplemental-groups": "1001410000/10000",
      "openshift.io/sa.scc.uid-range": "1001410000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "65c1fd",
      environment: "dev",
      "kubernetes.io/metadata.name": "65c1fd-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "65c1fd",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "568",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "65c1fd-dev",
    resourceVersion: "1747946712",
    uid: "b77b887d-4436-4a1f-8fff-d1494f0603b0"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}, {"email": "kyle.murray@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "RFK250"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}, {\\"email\\": \\"kyle.murray@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"RFK250\\"}]","openshift.io/description":"Application used to register leans.","openshift.io/display-name":"Personal Property Registry (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"65c1fd","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"65c1fd","profile_id":"568","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"65c1fd-prod"}}\n',
      "openshift.io/description": "Application used to register leans.",
      "openshift.io/display-name": "Personal Property Registry (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c12",
      "openshift.io/sa.scc.supplemental-groups": "1001430000/10000",
      "openshift.io/sa.scc.uid-range": "1001430000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "65c1fd",
      environment: "prod",
      "kubernetes.io/metadata.name": "65c1fd-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "65c1fd",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "568",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "65c1fd-prod",
    resourceVersion: "1747946736",
    uid: "423892ad-1ee2-4e51-a9e9-305e92bac87e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}, {"email": "kyle.murray@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "RFK250"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}, {\\"email\\": \\"kyle.murray@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"RFK250\\"}]","openshift.io/description":"Application used to register leans.","openshift.io/display-name":"Personal Property Registry (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"65c1fd","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"65c1fd","profile_id":"568","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"65c1fd-test"}}\n',
      "openshift.io/description": "Application used to register leans.",
      "openshift.io/display-name": "Personal Property Registry (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c37,c14",
      "openshift.io/sa.scc.supplemental-groups": "1001360000/10000",
      "openshift.io/sa.scc.uid-range": "1001360000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "65c1fd",
      environment: "test",
      "kubernetes.io/metadata.name": "65c1fd-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "65c1fd",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "568",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "65c1fd-test",
    resourceVersion: "1747946771",
    uid: "66b0c359-64c0-45b9-b495-8c77f92a974a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}, {"email": "kyle.murray@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "RFK250"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}, {\\"email\\": \\"kyle.murray@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"RFK250\\"}]","openshift.io/description":"Application used to register leans.","openshift.io/display-name":"Personal Property Registry (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"65c1fd","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"65c1fd","profile_id":"568","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"65c1fd-tools"}}\n',
      "openshift.io/description": "Application used to register leans.",
      "openshift.io/display-name": "Personal Property Registry (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c37,c24",
      "openshift.io/sa.scc.supplemental-groups": "1001380000/10000",
      "openshift.io/sa.scc.uid-range": "1001380000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "65c1fd",
      environment: "tools",
      "kubernetes.io/metadata.name": "65c1fd-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "65c1fd",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "568",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "65c1fd-tools",
    resourceVersion: "1747946828",
    uid: "7079e32b-1ff4-4ba7-8bf8-905338d9fae5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Registry Name Examination for requested business names","openshift.io/display-name":"names examination (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"7e154b","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"7e154b","profile_id":"567","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"7e154b-dev"}}\n',
      "openshift.io/description":
        "Registry Name Examination for requested business names",
      "openshift.io/display-name": "names examination (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c25",
      "openshift.io/sa.scc.supplemental-groups": "1001240000/10000",
      "openshift.io/sa.scc.uid-range": "1001240000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:52Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "7e154b",
      environment: "dev",
      "kubernetes.io/metadata.name": "7e154b-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "7e154b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "567",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "7e154b-dev",
    resourceVersion: "1747946854",
    uid: "7a4b05bf-69dc-4092-91dd-940189a06eec"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Registry Name Examination for requested business names","openshift.io/display-name":"names examination (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"7e154b","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"7e154b","profile_id":"567","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"7e154b-prod"}}\n',
      "openshift.io/description":
        "Registry Name Examination for requested business names",
      "openshift.io/display-name": "names examination (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c30",
      "openshift.io/sa.scc.supplemental-groups": "1001250000/10000",
      "openshift.io/sa.scc.uid-range": "1001250000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:52Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "7e154b",
      environment: "prod",
      "kubernetes.io/metadata.name": "7e154b-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "7e154b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "567",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "7e154b-prod",
    resourceVersion: "1747946873",
    uid: "ed40869c-7c95-48c6-b035-92f1db2ba73b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Registry Name Examination for requested business names","openshift.io/display-name":"names examination (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"7e154b","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"7e154b","profile_id":"567","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"7e154b-test"}}\n',
      "openshift.io/description":
        "Registry Name Examination for requested business names",
      "openshift.io/display-name": "names examination (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c20",
      "openshift.io/sa.scc.supplemental-groups": "1001300000/10000",
      "openshift.io/sa.scc.uid-range": "1001300000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:52Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "7e154b",
      environment: "test",
      "kubernetes.io/metadata.name": "7e154b-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "7e154b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "567",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "7e154b-test",
    resourceVersion: "1747946894",
    uid: "76649af0-d1ce-4ee9-bd56-abbc7919a01a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Registry Name Examination for requested business names","openshift.io/display-name":"names examination (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"7e154b","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"7e154b","profile_id":"567","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"7e154b-tools"}}\n',
      "openshift.io/description":
        "Registry Name Examination for requested business names",
      "openshift.io/display-name": "names examination (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c15",
      "openshift.io/sa.scc.supplemental-groups": "1001290000/10000",
      "openshift.io/sa.scc.uid-range": "1001290000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:52Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "7e154b",
      environment: "tools",
      "kubernetes.io/metadata.name": "7e154b-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "7e154b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "567",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "7e154b-tools",
    resourceVersion: "1747946917",
    uid: "d5cc0fe3-2e7d-4e4d-ba67-696d135d6efc"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "iankwatts"}, {"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"iankwatts\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"The RocketChat application is used to facilitate fast and effective communication among the growing community of teams utilizing the OpenShift Container Platform.","openshift.io/display-name":"RocketChat DR (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"87d478","environment":"dev","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"87d478","profile_id":"511","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"87d478-dev"}}\n',
      "openshift.io/description":
        "The RocketChat application is used to facilitate fast and effective communication among the growing community of teams utilizing the OpenShift Container Platform.",
      "openshift.io/display-name": "RocketChat DR (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c27,c14",
      "openshift.io/sa.scc.supplemental-groups": "1000730000/10000",
      "openshift.io/sa.scc.uid-range": "1000730000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-08-25T16:39:38Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "87d478",
      environment: "dev",
      "kubernetes.io/metadata.name": "87d478-dev",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "87d478",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "511",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "87d478-dev",
    resourceVersion: "1747946936",
    uid: "689bde51-7224-47e8-bbb3-815af9f1f7b8"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "iankwatts"}, {"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"iankwatts\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"The RocketChat application is used to facilitate fast and effective communication among the growing community of teams utilizing the OpenShift Container Platform.","openshift.io/display-name":"RocketChat DR (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-16-limit-32","devops.gov.bc.ca/gitops-app":"87d478","environment":"prod","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"87d478","profile_id":"511","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"87d478-prod"}}\n',
      "openshift.io/description":
        "The RocketChat application is used to facilitate fast and effective communication among the growing community of teams utilizing the OpenShift Container Platform.",
      "openshift.io/display-name": "RocketChat DR (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c28,c22",
      "openshift.io/sa.scc.supplemental-groups": "1000800000/10000",
      "openshift.io/sa.scc.uid-range": "1000800000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-08-25T16:39:38Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-16-limit-32",
      "devops.gov.bc.ca/gitops-app": "87d478",
      environment: "prod",
      "kubernetes.io/metadata.name": "87d478-prod",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "87d478",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "511",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "87d478-prod",
    resourceVersion: "1747946962",
    uid: "262f6e9d-6bb6-4fbd-a506-c4c99f3043d0"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "iankwatts"}, {"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"iankwatts\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"The RocketChat application is used to facilitate fast and effective communication among the growing community of teams utilizing the OpenShift Container Platform.","openshift.io/display-name":"RocketChat DR (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"87d478","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"87d478","profile_id":"511","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"87d478-test"}}\n',
      "openshift.io/description":
        "The RocketChat application is used to facilitate fast and effective communication among the growing community of teams utilizing the OpenShift Container Platform.",
      "openshift.io/display-name": "RocketChat DR (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c30,c5",
      "openshift.io/sa.scc.supplemental-groups": "1000880000/10000",
      "openshift.io/sa.scc.uid-range": "1000880000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-08-25T16:39:38Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "87d478",
      environment: "test",
      "kubernetes.io/metadata.name": "87d478-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "87d478",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "511",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "87d478-test",
    resourceVersion: "1747946984",
    uid: "fec59f43-a16d-4970-bdb2-427e6b204914"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "iankwatts"}, {"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"iankwatts\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"The RocketChat application is used to facilitate fast and effective communication among the growing community of teams utilizing the OpenShift Container Platform.","openshift.io/display-name":"RocketChat DR (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"87d478","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"87d478","profile_id":"511","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"87d478-tools"}}\n',
      "openshift.io/description":
        "The RocketChat application is used to facilitate fast and effective communication among the growing community of teams utilizing the OpenShift Container Platform.",
      "openshift.io/display-name": "RocketChat DR (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c30,c10",
      "openshift.io/sa.scc.supplemental-groups": "1000890000/10000",
      "openshift.io/sa.scc.uid-range": "1000890000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-08-25T16:39:38Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "87d478",
      environment: "tools",
      "kubernetes.io/metadata.name": "87d478-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "87d478",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "511",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "87d478-tools",
    resourceVersion: "1747947009",
    uid: "d9254b22-af8a-478f-8f63-dc91bfa2ab2d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "kevin.batke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"kevin.batke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CDDS is a CSB system consisting of a server operated by ISB and a number of remote devices connected to TV screens located at courthouses around the province. This integration service integrates the CDDS application with CEIS and JUSTIN databases.","openshift.io/display-name":"CSB Court Digital Display Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"8fc8c2","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"8fc8c2","profile_id":"573","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"8fc8c2-dev"}}\n',
      "openshift.io/description":
        "CDDS is a CSB system consisting of a server operated by ISB and a number of remote devices connected to TV screens located at courthouses around the province. This integration service integrates the CDDS application with CEIS and JUSTIN databases.",
      "openshift.io/display-name":
        "CSB Court Digital Display Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c33,c17",
      "openshift.io/sa.scc.supplemental-groups": "1001090000/10000",
      "openshift.io/sa.scc.uid-range": "1001090000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:35Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "8fc8c2",
      environment: "dev",
      "kubernetes.io/metadata.name": "8fc8c2-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "8fc8c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "573",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "8fc8c2-dev",
    resourceVersion: "1747947041",
    uid: "a0e188bd-ef81-4d03-897c-8557db22b529"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "kevin.batke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"kevin.batke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CDDS is a CSB system consisting of a server operated by ISB and a number of remote devices connected to TV screens located at courthouses around the province. This integration service integrates the CDDS application with CEIS and JUSTIN databases.","openshift.io/display-name":"CSB Court Digital Display Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"8fc8c2","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"8fc8c2","profile_id":"573","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"8fc8c2-prod"}}\n',
      "openshift.io/description":
        "CDDS is a CSB system consisting of a server operated by ISB and a number of remote devices connected to TV screens located at courthouses around the province. This integration service integrates the CDDS application with CEIS and JUSTIN databases.",
      "openshift.io/display-name":
        "CSB Court Digital Display Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c33,c12",
      "openshift.io/sa.scc.supplemental-groups": "1001080000/10000",
      "openshift.io/sa.scc.uid-range": "1001080000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:35Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "8fc8c2",
      environment: "prod",
      "kubernetes.io/metadata.name": "8fc8c2-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "8fc8c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "573",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "8fc8c2-prod",
    resourceVersion: "1747947065",
    uid: "a50b78d5-4396-40b6-8050-7d8fcc23cc76"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "kevin.batke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"kevin.batke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CDDS is a CSB system consisting of a server operated by ISB and a number of remote devices connected to TV screens located at courthouses around the province. This integration service integrates the CDDS application with CEIS and JUSTIN databases.","openshift.io/display-name":"CSB Court Digital Display Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"8fc8c2","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"8fc8c2","profile_id":"573","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"8fc8c2-test"}}\n',
      "openshift.io/description":
        "CDDS is a CSB system consisting of a server operated by ISB and a number of remote devices connected to TV screens located at courthouses around the province. This integration service integrates the CDDS application with CEIS and JUSTIN databases.",
      "openshift.io/display-name":
        "CSB Court Digital Display Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c33,c7",
      "openshift.io/sa.scc.supplemental-groups": "1001070000/10000",
      "openshift.io/sa.scc.uid-range": "1001070000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:35Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "8fc8c2",
      environment: "test",
      "kubernetes.io/metadata.name": "8fc8c2-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "8fc8c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "573",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "8fc8c2-test",
    resourceVersion: "1747947094",
    uid: "fb03286d-2273-495c-b8ac-a3f5408c2b39"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "kevin.batke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"kevin.batke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CDDS is a CSB system consisting of a server operated by ISB and a number of remote devices connected to TV screens located at courthouses around the province. This integration service integrates the CDDS application with CEIS and JUSTIN databases.","openshift.io/display-name":"CSB Court Digital Display Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"8fc8c2","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"8fc8c2","profile_id":"573","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"8fc8c2-tools"}}\n',
      "openshift.io/description":
        "CDDS is a CSB system consisting of a server operated by ISB and a number of remote devices connected to TV screens located at courthouses around the province. This integration service integrates the CDDS application with CEIS and JUSTIN databases.",
      "openshift.io/display-name":
        "CSB Court Digital Display Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c33,c22",
      "openshift.io/sa.scc.supplemental-groups": "1001100000/10000",
      "openshift.io/sa.scc.uid-range": "1001100000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:35Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "8fc8c2",
      environment: "tools",
      "kubernetes.io/metadata.name": "8fc8c2-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "8fc8c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "573",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "8fc8c2-tools",
    resourceVersion: "1747947112",
    uid: "6903d955-e617-4c30-9832-3c6025631079"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "darryl.wong@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"darryl.wong@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CCD is used in live court sessions by court clerks to capture an audio recording of court hearings, to create a time stamped hearing log sheet of hearing events, and to pull and push data entries in court case tracking databases. This integration service integrates the CCD application with CEIS and JUSTIN databases.","openshift.io/display-name":"CSB Court Clerk Display Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"970a9e","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"970a9e","profile_id":"575","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"970a9e-dev"}}\n',
      "openshift.io/description":
        "CCD is used in live court sessions by court clerks to capture an audio recording of court hearings, to create a time stamped hearing log sheet of hearing events, and to pull and push data entries in court case tracking databases. This integration service integrates the CCD application with CEIS and JUSTIN databases.",
      "openshift.io/display-name": "CSB Court Clerk Display Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c10",
      "openshift.io/sa.scc.supplemental-groups": "1000950000/10000",
      "openshift.io/sa.scc.uid-range": "1000950000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:27Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "970a9e",
      environment: "dev",
      "kubernetes.io/metadata.name": "970a9e-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "970a9e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "575",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "970a9e-dev",
    resourceVersion: "1747947129",
    uid: "96d75d7c-6729-4d61-8626-962624a8469b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "darryl.wong@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"darryl.wong@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CCD is used in live court sessions by court clerks to capture an audio recording of court hearings, to create a time stamped hearing log sheet of hearing events, and to pull and push data entries in court case tracking databases. This integration service integrates the CCD application with CEIS and JUSTIN databases.","openshift.io/display-name":"CSB Court Clerk Display Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"970a9e","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"970a9e","profile_id":"575","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"970a9e-prod"}}\n',
      "openshift.io/description":
        "CCD is used in live court sessions by court clerks to capture an audio recording of court hearings, to create a time stamped hearing log sheet of hearing events, and to pull and push data entries in court case tracking databases. This integration service integrates the CCD application with CEIS and JUSTIN databases.",
      "openshift.io/display-name": "CSB Court Clerk Display Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c20",
      "openshift.io/sa.scc.supplemental-groups": "1000970000/10000",
      "openshift.io/sa.scc.uid-range": "1000970000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:27Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "970a9e",
      environment: "prod",
      "kubernetes.io/metadata.name": "970a9e-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "970a9e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "575",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "970a9e-prod",
    resourceVersion: "1747947150",
    uid: "f136457b-feab-4168-ab97-0c33acf953c3"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "darryl.wong@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"darryl.wong@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CCD is used in live court sessions by court clerks to capture an audio recording of court hearings, to create a time stamped hearing log sheet of hearing events, and to pull and push data entries in court case tracking databases. This integration service integrates the CCD application with CEIS and JUSTIN databases.","openshift.io/display-name":"CSB Court Clerk Display Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"970a9e","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"970a9e","profile_id":"575","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"970a9e-test"}}\n',
      "openshift.io/description":
        "CCD is used in live court sessions by court clerks to capture an audio recording of court hearings, to create a time stamped hearing log sheet of hearing events, and to pull and push data entries in court case tracking databases. This integration service integrates the CCD application with CEIS and JUSTIN databases.",
      "openshift.io/display-name": "CSB Court Clerk Display Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c25",
      "openshift.io/sa.scc.supplemental-groups": "1000980000/10000",
      "openshift.io/sa.scc.uid-range": "1000980000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:27Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "970a9e",
      environment: "test",
      "kubernetes.io/metadata.name": "970a9e-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "970a9e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "575",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "970a9e-test",
    resourceVersion: "1747947172",
    uid: "e0e5fbc7-f266-476c-816d-72c4ba220926"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "darryl.wong@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"darryl.wong@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CCD is used in live court sessions by court clerks to capture an audio recording of court hearings, to create a time stamped hearing log sheet of hearing events, and to pull and push data entries in court case tracking databases. This integration service integrates the CCD application with CEIS and JUSTIN databases.","openshift.io/display-name":"CSB Court Clerk Display Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"970a9e","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"970a9e","profile_id":"575","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"970a9e-tools"}}\n',
      "openshift.io/description":
        "CCD is used in live court sessions by court clerks to capture an audio recording of court hearings, to create a time stamped hearing log sheet of hearing events, and to pull and push data entries in court case tracking databases. This integration service integrates the CCD application with CEIS and JUSTIN databases.",
      "openshift.io/display-name":
        "CSB Court Clerk Display Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c15",
      "openshift.io/sa.scc.supplemental-groups": "1000960000/10000",
      "openshift.io/sa.scc.uid-range": "1000960000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:08:27Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "970a9e",
      environment: "tools",
      "kubernetes.io/metadata.name": "970a9e-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "970a9e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "575",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "970a9e-tools",
    resourceVersion: "1747947187",
    uid: "3fc26280-f712-4b44-9b17-9d5de446ad07"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Portal to Registry Business Applications","openshift.io/display-name":"Create a new Business (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"9b862f","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"9b862f","profile_id":"565","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"9b862f-dev"}}\n',
      "openshift.io/description": "Portal to Registry Business Applications",
      "openshift.io/display-name": "Create a new Business (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c37",
      "openshift.io/sa.scc.supplemental-groups": "1001480000/10000",
      "openshift.io/sa.scc.uid-range": "1001480000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:57Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "9b862f",
      environment: "dev",
      "kubernetes.io/metadata.name": "9b862f-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "9b862f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "565",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "9b862f-dev",
    resourceVersion: "1747947208",
    uid: "83fa0383-0c4f-4a54-9a1b-c3ab6ca9dd66"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Portal to Registry Business Applications","openshift.io/display-name":"Create a new Business (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"9b862f","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"9b862f","profile_id":"565","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"9b862f-prod"}}\n',
      "openshift.io/description": "Portal to Registry Business Applications",
      "openshift.io/display-name": "Create a new Business (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c4",
      "openshift.io/sa.scc.supplemental-groups": "1001490000/10000",
      "openshift.io/sa.scc.uid-range": "1001490000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:57Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "9b862f",
      environment: "prod",
      "kubernetes.io/metadata.name": "9b862f-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "9b862f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "565",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "9b862f-prod",
    resourceVersion: "1747947229",
    uid: "b2571d11-7027-40b6-a609-39e5777a3e03"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Portal to Registry Business Applications","openshift.io/display-name":"Create a new Business (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"9b862f","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"9b862f","profile_id":"565","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"9b862f-test"}}\n',
      "openshift.io/description": "Portal to Registry Business Applications",
      "openshift.io/display-name": "Create a new Business (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c24",
      "openshift.io/sa.scc.supplemental-groups": "1001530000/10000",
      "openshift.io/sa.scc.uid-range": "1001530000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:57Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "9b862f",
      environment: "test",
      "kubernetes.io/metadata.name": "9b862f-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "9b862f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "565",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "9b862f-test",
    resourceVersion: "1747947248",
    uid: "e4b284b8-cfe7-43e9-8e22-b314500996ce"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Portal to Registry Business Applications","openshift.io/display-name":"Create a new Business (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"9b862f","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"9b862f","profile_id":"565","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"9b862f-tools"}}\n',
      "openshift.io/description": "Portal to Registry Business Applications",
      "openshift.io/display-name": "Create a new Business (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001520000/10000",
      "openshift.io/sa.scc.uid-range": "1001520000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:57Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "9b862f",
      environment: "tools",
      "kubernetes.io/metadata.name": "9b862f-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "9b862f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "565",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "9b862f-tools",
    resourceVersion: "1747947268",
    uid: "ad3fcfb6-3abe-41a6-b6d0-c321365610ba"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Authentication and other services used by Service BC applications","openshift.io/display-name":"Sbc Auth (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"9f3c0d","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"9f3c0d","profile_id":"564","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"9f3c0d-dev"}}\n',
      "openshift.io/description":
        "Authentication and other services used by Service BC applications",
      "openshift.io/display-name": "Sbc Auth (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c7",
      "openshift.io/sa.scc.supplemental-groups": "1001420000/10000",
      "openshift.io/sa.scc.uid-range": "1001420000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "9f3c0d",
      environment: "dev",
      "kubernetes.io/metadata.name": "9f3c0d-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "9f3c0d",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "564",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "9f3c0d-dev",
    resourceVersion: "1747947291",
    uid: "d1639cc6-bc1f-4e8f-8312-08651a8e6896"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Authentication and other services used by Service BC applications","openshift.io/display-name":"Sbc Auth (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"9f3c0d","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"9f3c0d","profile_id":"564","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"9f3c0d-prod"}}\n',
      "openshift.io/description":
        "Authentication and other services used by Service BC applications",
      "openshift.io/display-name": "Sbc Auth (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c37,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001370000/10000",
      "openshift.io/sa.scc.uid-range": "1001370000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "9f3c0d",
      environment: "prod",
      "kubernetes.io/metadata.name": "9f3c0d-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "9f3c0d",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "564",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "9f3c0d-prod",
    resourceVersion: "1747947309",
    uid: "e7f98a75-e687-47a6-b56b-d6a75630a90e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Authentication and other services used by Service BC applications","openshift.io/display-name":"Sbc Auth (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"9f3c0d","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"9f3c0d","profile_id":"564","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"9f3c0d-test"}}\n',
      "openshift.io/description":
        "Authentication and other services used by Service BC applications",
      "openshift.io/display-name": "Sbc Auth (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c37,c34",
      "openshift.io/sa.scc.supplemental-groups": "1001400000/10000",
      "openshift.io/sa.scc.uid-range": "1001400000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "9f3c0d",
      environment: "test",
      "kubernetes.io/metadata.name": "9f3c0d-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "9f3c0d",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "564",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "9f3c0d-test",
    resourceVersion: "1747947331",
    uid: "671c4981-ff91-4239-af22-b2c208dcd65d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Authentication and other services used by Service BC applications","openshift.io/display-name":"Sbc Auth (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"9f3c0d","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"9f3c0d","profile_id":"564","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"9f3c0d-tools"}}\n',
      "openshift.io/description":
        "Authentication and other services used by Service BC applications",
      "openshift.io/display-name": "Sbc Auth (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c37,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001390000/10000",
      "openshift.io/sa.scc.uid-range": "1001390000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "9f3c0d",
      environment: "tools",
      "kubernetes.io/metadata.name": "9f3c0d-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "9f3c0d",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "564",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "9f3c0d-tools",
    resourceVersion: "1747947362",
    uid: "f5e3c63c-951b-4c3c-9746-c728fa2aa17d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "kaine.sparks@gov.bc.ca", "role": "owner"}, {"email": "richard.armitage@gov.bc.ca", "role": "lead"}, {"email": "patrick.wei@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Data and backup storage  for  BCROS applications","openshift.io/display-name":"BCROS MINIO (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"a269dc","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"a269dc","profile_id":"641e4318b066fcf4f3e77678","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"a269dc-dev"}}\n',
      "openshift.io/description":
        "Data and backup storage  for  BCROS applications",
      "openshift.io/display-name": "BCROS MINIO (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c10",
      "openshift.io/sa.scc.supplemental-groups": "1001210000/10000",
      "openshift.io/sa.scc.uid-range": "1001210000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-21T18:14:47Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "a269dc",
      environment: "dev",
      "kubernetes.io/metadata.name": "a269dc-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "a269dc",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e4318b066fcf4f3e77678",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "a269dc-dev",
    resourceVersion: "1747947386",
    uid: "bb9bcbf0-f3d3-4ea2-8195-04b52773f1ae"
  },
  {
    annotations: {
      contacts:
        '[{"email": "kaine.sparks@gov.bc.ca", "role": "owner"}, {"email": "richard.armitage@gov.bc.ca", "role": "lead"}, {"email": "patrick.wei@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Data and backup storage  for  BCROS applications","openshift.io/display-name":"BCROS MINIO (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"a269dc","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"a269dc","profile_id":"641e4318b066fcf4f3e77678","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"a269dc-prod"}}\n',
      "openshift.io/description":
        "Data and backup storage  for  BCROS applications",
      "openshift.io/display-name": "BCROS MINIO (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c5",
      "openshift.io/sa.scc.supplemental-groups": "1001200000/10000",
      "openshift.io/sa.scc.uid-range": "1001200000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-21T18:14:47Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "a269dc",
      environment: "prod",
      "kubernetes.io/metadata.name": "a269dc-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "a269dc",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e4318b066fcf4f3e77678",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "a269dc-prod",
    resourceVersion: "1747947405",
    uid: "1735b356-2653-4b84-b476-1182cea8cb00"
  },
  {
    annotations: {
      contacts:
        '[{"email": "kaine.sparks@gov.bc.ca", "role": "owner"}, {"email": "richard.armitage@gov.bc.ca", "role": "lead"}, {"email": "patrick.wei@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Data and backup storage  for  BCROS applications","openshift.io/display-name":"BCROS MINIO (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"a269dc","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"a269dc","profile_id":"641e4318b066fcf4f3e77678","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"a269dc-test"}}\n',
      "openshift.io/description":
        "Data and backup storage  for  BCROS applications",
      "openshift.io/display-name": "BCROS MINIO (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c20",
      "openshift.io/sa.scc.supplemental-groups": "1001230000/10000",
      "openshift.io/sa.scc.uid-range": "1001230000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-21T18:14:47Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "a269dc",
      environment: "test",
      "kubernetes.io/metadata.name": "a269dc-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "a269dc",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e4318b066fcf4f3e77678",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "a269dc-test",
    resourceVersion: "1747947431",
    uid: "2351448a-5434-423f-b63f-9ac3db819070"
  },
  {
    annotations: {
      contacts:
        '[{"email": "kaine.sparks@gov.bc.ca", "role": "owner"}, {"email": "richard.armitage@gov.bc.ca", "role": "lead"}, {"email": "patrick.wei@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Data and backup storage  for  BCROS applications","openshift.io/display-name":"BCROS MINIO (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"a269dc","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"a269dc","profile_id":"641e4318b066fcf4f3e77678","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"a269dc-tools"}}\n',
      "openshift.io/description":
        "Data and backup storage  for  BCROS applications",
      "openshift.io/display-name": "BCROS MINIO (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c15",
      "openshift.io/sa.scc.supplemental-groups": "1001220000/10000",
      "openshift.io/sa.scc.uid-range": "1001220000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-21T18:14:47Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "a269dc",
      environment: "tools",
      "kubernetes.io/metadata.name": "a269dc-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "a269dc",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e4318b066fcf4f3e77678",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "a269dc-tools",
    resourceVersion: "1747947448",
    uid: "462ad506-49e9-4777-baa2-0fecbf4c0d13"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "blair.spencer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"blair.spencer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Corrections Community Corrections Case Management System will host portals, apis, local keycloak realm, workflow engine and other supporting services to enable an open source case management platform.","openshift.io/display-name":"BC Corrections Community Corrections CMS (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"abb712","environment":"dev","memory_quota":"memory-request-8-limit-16","ministry_id":"PSSG","name":"abb712","profile_id":"712","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"abb712-dev"}}\n',
      "openshift.io/description":
        "The BC Corrections Community Corrections Case Management System will host portals, apis, local keycloak realm, workflow engine and other supporting services to enable an open source case management platform.",
      "openshift.io/display-name":
        "BC Corrections Community Corrections CMS (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c15",
      "openshift.io/sa.scc.supplemental-groups": "1002010000/10000",
      "openshift.io/sa.scc.uid-range": "1002010000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-08T16:37:42Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "abb712",
      environment: "dev",
      "kubernetes.io/metadata.name": "abb712-dev",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "PSSG",
      name: "abb712",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "712",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "abb712-dev",
    resourceVersion: "1747947467",
    uid: "f2a189cf-a011-4c3a-af29-9241f04ec0bd"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "blair.spencer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"blair.spencer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Corrections Community Corrections Case Management System will host portals, apis, local keycloak realm, workflow engine and other supporting services to enable an open source case management platform.","openshift.io/display-name":"BC Corrections Community Corrections CMS (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"abb712","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"abb712","profile_id":"712","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"abb712-prod"}}\n',
      "openshift.io/description":
        "The BC Corrections Community Corrections Case Management System will host portals, apis, local keycloak realm, workflow engine and other supporting services to enable an open source case management platform.",
      "openshift.io/display-name":
        "BC Corrections Community Corrections CMS (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c25",
      "openshift.io/sa.scc.supplemental-groups": "1002030000/10000",
      "openshift.io/sa.scc.uid-range": "1002030000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-08T16:37:42Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "abb712",
      environment: "prod",
      "kubernetes.io/metadata.name": "abb712-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "abb712",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "712",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "abb712-prod",
    resourceVersion: "1747947502",
    uid: "3aa3fa55-693b-49fe-a3db-6f97c2cf561d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "blair.spencer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"blair.spencer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Corrections Community Corrections Case Management System will host portals, apis, local keycloak realm, workflow engine and other supporting services to enable an open source case management platform.","openshift.io/display-name":"BC Corrections Community Corrections CMS (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"abb712","environment":"test","memory_quota":"memory-request-4-limit-8","ministry_id":"PSSG","name":"abb712","profile_id":"712","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"abb712-test"}}\n',
      "openshift.io/description":
        "The BC Corrections Community Corrections Case Management System will host portals, apis, local keycloak realm, workflow engine and other supporting services to enable an open source case management platform.",
      "openshift.io/display-name":
        "BC Corrections Community Corrections CMS (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c20",
      "openshift.io/sa.scc.supplemental-groups": "1002020000/10000",
      "openshift.io/sa.scc.uid-range": "1002020000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-08T16:37:42Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "abb712",
      environment: "test",
      "kubernetes.io/metadata.name": "abb712-test",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "PSSG",
      name: "abb712",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "712",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "abb712-test",
    resourceVersion: "1747947526",
    uid: "238e91cb-b651-486f-b388-d6082d4e0ee6"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "blair.spencer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"blair.spencer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Corrections Community Corrections Case Management System will host portals, apis, local keycloak realm, workflow engine and other supporting services to enable an open source case management platform.","openshift.io/display-name":"BC Corrections Community Corrections CMS (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"abb712","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"abb712","profile_id":"712","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"abb712-tools"}}\n',
      "openshift.io/description":
        "The BC Corrections Community Corrections Case Management System will host portals, apis, local keycloak realm, workflow engine and other supporting services to enable an open source case management platform.",
      "openshift.io/display-name":
        "BC Corrections Community Corrections CMS (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c30",
      "openshift.io/sa.scc.supplemental-groups": "1002040000/10000",
      "openshift.io/sa.scc.uid-range": "1002040000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-08T16:37:42Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "abb712",
      environment: "tools",
      "kubernetes.io/metadata.name": "abb712-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "abb712",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "712",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "abb712-tools",
    resourceVersion: "1747947547",
    uid: "ee88857d-0bde-4b70-807b-7c8d688adbf6"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "jennifer.dowd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}, {"email": "kyle.flood@nttdata.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "kfloodbcgov"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}, {\\"email\\": \\"kyle.flood@nttdata.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"kfloodbcgov\\"}]","openshift.io/description":"The BC Corrections ICON2 (Integrated Corrections Operational Network) Integration provides an interface to database resources to support the ICON portal interface via the implementation of a number of APIs.","openshift.io/display-name":"BC Corrections ICON2 Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"af9914","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"af9914","profile_id":"725","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"af9914-dev"}}\n',
      "openshift.io/description":
        "The BC Corrections ICON2 (Integrated Corrections Operational Network) Integration provides an interface to database resources to support the ICON portal interface via the implementation of a number of APIs.",
      "openshift.io/display-name": "BC Corrections ICON2 Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c35",
      "openshift.io/sa.scc.supplemental-groups": "1002140000/10000",
      "openshift.io/sa.scc.uid-range": "1002140000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-04T16:32:31Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "af9914",
      environment: "dev",
      "kubernetes.io/metadata.name": "af9914-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "af9914",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "725",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "af9914-dev",
    resourceVersion: "1747947572",
    uid: "85ac1ea0-7fee-4135-ad38-96cb74aa09ef"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "jennifer.dowd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}, {"email": "kyle.flood@nttdata.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "kfloodbcgov"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}, {\\"email\\": \\"kyle.flood@nttdata.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"kfloodbcgov\\"}]","openshift.io/description":"The BC Corrections ICON2 (Integrated Corrections Operational Network) Integration provides an interface to database resources to support the ICON portal interface via the implementation of a number of APIs.","openshift.io/display-name":"BC Corrections ICON2 Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-1-limit-2","devops.gov.bc.ca/gitops-app":"af9914","environment":"prod","memory_quota":"memory-request-4-limit-8","ministry_id":"PSSG","name":"af9914","profile_id":"725","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-2"},"name":"af9914-prod"}}\n',
      "openshift.io/description":
        "The BC Corrections ICON2 (Integrated Corrections Operational Network) Integration provides an interface to database resources to support the ICON portal interface via the implementation of a number of APIs.",
      "openshift.io/display-name": "BC Corrections ICON2 Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c30",
      "openshift.io/sa.scc.supplemental-groups": "1002130000/10000",
      "openshift.io/sa.scc.uid-range": "1002130000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-04T16:32:31Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-1-limit-2",
      "devops.gov.bc.ca/gitops-app": "af9914",
      environment: "prod",
      "kubernetes.io/metadata.name": "af9914-prod",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "PSSG",
      name: "af9914",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "725",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-2"
    },
    name: "af9914-prod",
    resourceVersion: "1747947594",
    uid: "916290f9-2526-426e-bcfc-84b7f558b5c9"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "jennifer.dowd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}, {"email": "kyle.flood@nttdata.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "kfloodbcgov"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}, {\\"email\\": \\"kyle.flood@nttdata.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"kfloodbcgov\\"}]","openshift.io/description":"The BC Corrections ICON2 (Integrated Corrections Operational Network) Integration provides an interface to database resources to support the ICON portal interface via the implementation of a number of APIs.","openshift.io/display-name":"BC Corrections ICON2 Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"af9914","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"af9914","profile_id":"725","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"af9914-test"}}\n',
      "openshift.io/description":
        "The BC Corrections ICON2 (Integrated Corrections Operational Network) Integration provides an interface to database resources to support the ICON portal interface via the implementation of a number of APIs.",
      "openshift.io/display-name": "BC Corrections ICON2 Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c45",
      "openshift.io/sa.scc.supplemental-groups": "1002160000/10000",
      "openshift.io/sa.scc.uid-range": "1002160000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-04T16:32:31Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "af9914",
      environment: "test",
      "kubernetes.io/metadata.name": "af9914-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "af9914",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "725",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "af9914-test",
    resourceVersion: "1747947616",
    uid: "e60f1224-beaf-43fe-a366-358edb55991b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "jennifer.dowd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}, {"email": "kyle.flood@nttdata.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "kfloodbcgov"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}, {\\"email\\": \\"kyle.flood@nttdata.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"kfloodbcgov\\"}]","openshift.io/description":"The BC Corrections ICON2 (Integrated Corrections Operational Network) Integration provides an interface to database resources to support the ICON portal interface via the implementation of a number of APIs.","openshift.io/display-name":"BC Corrections ICON2 Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"af9914","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"af9914","profile_id":"725","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"af9914-tools"}}\n',
      "openshift.io/description":
        "The BC Corrections ICON2 (Integrated Corrections Operational Network) Integration provides an interface to database resources to support the ICON portal interface via the implementation of a number of APIs.",
      "openshift.io/display-name": "BC Corrections ICON2 Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c40",
      "openshift.io/sa.scc.supplemental-groups": "1002150000/10000",
      "openshift.io/sa.scc.uid-range": "1002150000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-04T16:32:31Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "af9914",
      environment: "tools",
      "kubernetes.io/metadata.name": "af9914-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "af9914",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "725",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "af9914-tools",
    resourceVersion: "1747947636",
    uid: "e1dd3093-154f-4bb9-9078-ab3ec17ed772"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"An application which empowers citizens to manage their health care by providing access to their own health information.","openshift.io/display-name":"Health Gateway Demo Maintain (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"afb846","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"afb846","profile_id":"642c966403c86fa32af60bf5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"afb846-dev"}}\n',
      "openshift.io/description":
        "An application which empowers citizens to manage their health care by providing access to their own health information.",
      "openshift.io/display-name": "Health Gateway Demo Maintain (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c19",
      "openshift.io/sa.scc.supplemental-groups": "1002690000/10000",
      "openshift.io/sa.scc.uid-range": "1002690000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-04-04T21:44:22Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "afb846",
      environment: "dev",
      "kubernetes.io/metadata.name": "afb846-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "afb846",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "642c966403c86fa32af60bf5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "afb846-dev",
    resourceVersion: "1747947656",
    uid: "fcaa0e28-b2e9-4aa6-b33c-258488918d0b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"An application which empowers citizens to manage their health care by providing access to their own health information.","openshift.io/display-name":"Health Gateway Demo Maintain (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"afb846","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"afb846","profile_id":"642c966403c86fa32af60bf5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"afb846-prod"}}\n',
      "openshift.io/description":
        "An application which empowers citizens to manage their health care by providing access to their own health information.",
      "openshift.io/display-name": "Health Gateway Demo Maintain (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c4",
      "openshift.io/sa.scc.supplemental-groups": "1002660000/10000",
      "openshift.io/sa.scc.uid-range": "1002660000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-04-04T21:44:22Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "afb846",
      environment: "prod",
      "kubernetes.io/metadata.name": "afb846-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "afb846",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "642c966403c86fa32af60bf5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "afb846-prod",
    resourceVersion: "1747947669",
    uid: "9ad9f52f-32a6-44fc-bedd-f0676d34bb6b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"An application which empowers citizens to manage their health care by providing access to their own health information.","openshift.io/display-name":"Health Gateway Demo Maintain (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"afb846","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"afb846","profile_id":"642c966403c86fa32af60bf5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"afb846-test"}}\n',
      "openshift.io/description":
        "An application which empowers citizens to manage their health care by providing access to their own health information.",
      "openshift.io/display-name": "Health Gateway Demo Maintain (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c14",
      "openshift.io/sa.scc.supplemental-groups": "1002680000/10000",
      "openshift.io/sa.scc.uid-range": "1002680000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-04-04T21:44:22Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "afb846",
      environment: "test",
      "kubernetes.io/metadata.name": "afb846-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "afb846",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "642c966403c86fa32af60bf5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "afb846-test",
    resourceVersion: "1747947691",
    uid: "8fb1f9c9-cf63-45ab-9593-ee64eb41bc51"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"An application which empowers citizens to manage their health care by providing access to their own health information.","openshift.io/display-name":"Health Gateway Demo Maintain (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"afb846","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"afb846","profile_id":"642c966403c86fa32af60bf5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"afb846-tools"}}\n',
      "openshift.io/description":
        "An application which empowers citizens to manage their health care by providing access to their own health information.",
      "openshift.io/display-name": "Health Gateway Demo Maintain (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c9",
      "openshift.io/sa.scc.supplemental-groups": "1002670000/10000",
      "openshift.io/sa.scc.uid-range": "1002670000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-04-04T21:44:22Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "afb846",
      environment: "tools",
      "kubernetes.io/metadata.name": "afb846-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "afb846",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "642c966403c86fa32af60bf5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "afb846-tools",
    resourceVersion: "1747947724",
    uid: "5bedd367-0e84-4af6-8078-40c52ae3efc4"
  },
  {
    annotations: {
      contacts:
        '[{"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "cailey.jones@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "caggles"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"cailey.jones@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"caggles\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b4d659","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"b4d659","profile_id":"772","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b4d659-dev"}}\n',
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c39",
      "openshift.io/sa.scc.supplemental-groups": "1002240000/10000",
      "openshift.io/sa.scc.uid-range": "1002240000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-06-14T20:43:28Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b4d659",
      environment: "dev",
      "kubernetes.io/metadata.name": "b4d659-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "b4d659",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "772",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b4d659-dev",
    resourceVersion: "1747947779",
    uid: "d62239d0-a0d6-4ea6-94f3-c045e01a1c6b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "cailey.jones@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "caggles"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"cailey.jones@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"caggles\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b4d659","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"b4d659","profile_id":"772","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b4d659-prod"}}\n',
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c2",
      "openshift.io/sa.scc.supplemental-groups": "1002260000/10000",
      "openshift.io/sa.scc.uid-range": "1002260000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-06-14T20:43:28Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b4d659",
      environment: "prod",
      "kubernetes.io/metadata.name": "b4d659-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "b4d659",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "772",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b4d659-prod",
    resourceVersion: "1747947800",
    uid: "8d368eba-a29b-45e5-b212-5cc7944b698d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "cailey.jones@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "caggles"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"cailey.jones@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"caggles\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b4d659","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"b4d659","profile_id":"772","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b4d659-test"}}\n',
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c44",
      "openshift.io/sa.scc.supplemental-groups": "1002250000/10000",
      "openshift.io/sa.scc.uid-range": "1002250000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-06-14T20:43:28Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b4d659",
      environment: "test",
      "kubernetes.io/metadata.name": "b4d659-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "b4d659",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "772",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b4d659-test",
    resourceVersion: "1747947826",
    uid: "fcfdb300-3a5f-4714-a550-da2078f390d2"
  },
  {
    annotations: {
      contacts:
        '[{"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "cailey.jones@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "caggles"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"cailey.jones@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"caggles\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b4d659","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"b4d659","profile_id":"772","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b4d659-tools"}}\n',
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c34",
      "openshift.io/sa.scc.supplemental-groups": "1002230000/10000",
      "openshift.io/sa.scc.uid-range": "1002230000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-06-14T20:43:28Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b4d659",
      environment: "tools",
      "kubernetes.io/metadata.name": "b4d659-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "b4d659",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "772",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b4d659-tools",
    resourceVersion: "1747947850",
    uid: "024bf3db-5fc0-4c72-837a-506cf7b5880c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "jennifer.dowd@gov.bc.ca", "role": "owner"}, {"email": "ryan.loiselle@gov.bc.ca", "role": "lead"}, {"email": "kyle.flood@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"kyle.flood@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"The BC Corrections eInformation integration serves as the interface between police, BC Corrections for accessing PDF files. ","openshift.io/display-name":"BC Corrections eInformation Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b59d8b","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"b59d8b","profile_id":"6417f0eb292046769e498c7a","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b59d8b-dev"}}\n',
      "openshift.io/description":
        "The BC Corrections eInformation integration serves as the interface between police, BC Corrections for accessing PDF files. ",
      "openshift.io/display-name":
        "BC Corrections eInformation Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c35",
      "openshift.io/sa.scc.supplemental-groups": "1002620000/10000",
      "openshift.io/sa.scc.uid-range": "1002620000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-21T16:32:17Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b59d8b",
      environment: "dev",
      "kubernetes.io/metadata.name": "b59d8b-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "b59d8b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6417f0eb292046769e498c7a",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b59d8b-dev",
    resourceVersion: "1747947872",
    uid: "c88a00e0-0d15-4cac-aa4a-e475754938af"
  },
  {
    annotations: {
      contacts:
        '[{"email": "jennifer.dowd@gov.bc.ca", "role": "owner"}, {"email": "ryan.loiselle@gov.bc.ca", "role": "lead"}, {"email": "kyle.flood@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"kyle.flood@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"The BC Corrections eInformation integration serves as the interface between police, BC Corrections for accessing PDF files. ","openshift.io/display-name":"BC Corrections eInformation Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b59d8b","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"b59d8b","profile_id":"6417f0eb292046769e498c7a","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b59d8b-prod"}}\n',
      "openshift.io/description":
        "The BC Corrections eInformation integration serves as the interface between police, BC Corrections for accessing PDF files. ",
      "openshift.io/display-name":
        "BC Corrections eInformation Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c20",
      "openshift.io/sa.scc.supplemental-groups": "1002590000/10000",
      "openshift.io/sa.scc.uid-range": "1002590000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-21T16:32:17Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b59d8b",
      environment: "prod",
      "kubernetes.io/metadata.name": "b59d8b-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "b59d8b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6417f0eb292046769e498c7a",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b59d8b-prod",
    resourceVersion: "1747947891",
    uid: "3d26ecd4-1081-434a-94b2-4fd511f4a4ef"
  },
  {
    annotations: {
      contacts:
        '[{"email": "jennifer.dowd@gov.bc.ca", "role": "owner"}, {"email": "ryan.loiselle@gov.bc.ca", "role": "lead"}, {"email": "kyle.flood@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"kyle.flood@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"The BC Corrections eInformation integration serves as the interface between police, BC Corrections for accessing PDF files. ","openshift.io/display-name":"BC Corrections eInformation Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b59d8b","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"b59d8b","profile_id":"6417f0eb292046769e498c7a","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b59d8b-test"}}\n',
      "openshift.io/description":
        "The BC Corrections eInformation integration serves as the interface between police, BC Corrections for accessing PDF files. ",
      "openshift.io/display-name":
        "BC Corrections eInformation Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c30",
      "openshift.io/sa.scc.supplemental-groups": "1002610000/10000",
      "openshift.io/sa.scc.uid-range": "1002610000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-21T16:32:17Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b59d8b",
      environment: "test",
      "kubernetes.io/metadata.name": "b59d8b-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "b59d8b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6417f0eb292046769e498c7a",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b59d8b-test",
    resourceVersion: "1747947909",
    uid: "a432253d-02f5-4642-9ea7-d1a1ef712136"
  },
  {
    annotations: {
      contacts:
        '[{"email": "jennifer.dowd@gov.bc.ca", "role": "owner"}, {"email": "ryan.loiselle@gov.bc.ca", "role": "lead"}, {"email": "kyle.flood@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"kyle.flood@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"The BC Corrections eInformation integration serves as the interface between police, BC Corrections for accessing PDF files. ","openshift.io/display-name":"BC Corrections eInformation Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b59d8b","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"b59d8b","profile_id":"6417f0eb292046769e498c7a","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b59d8b-tools"}}\n',
      "openshift.io/description":
        "The BC Corrections eInformation integration serves as the interface between police, BC Corrections for accessing PDF files. ",
      "openshift.io/display-name":
        "BC Corrections eInformation Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c5",
      "openshift.io/sa.scc.supplemental-groups": "1002560000/10000",
      "openshift.io/sa.scc.uid-range": "1002560000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-21T16:32:17Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b59d8b",
      environment: "tools",
      "kubernetes.io/metadata.name": "b59d8b-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "b59d8b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6417f0eb292046769e498c7a",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b59d8b-tools",
    resourceVersion: "1747947937",
    uid: "e7a4003f-6cc5-4cd8-95d7-2a277633312d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "aidan.cope@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ikethecoder"}, {"email": "justin.tendeck@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "jTendeck"}, {"email": "greg.lawrance@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "gjlawran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"aidan.cope@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ikethecoder\\"}, {\\"email\\": \\"justin.tendeck@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"jTendeck\\"}, {\\"email\\": \\"greg.lawrance@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"gjlawran\\"}]","openshift.io/description":"Enterprise API gateway solution that supports client teams with easily publishing, discovering, mediating, governing and managing access to their APIs to improve utilization, security and control over access to digital services and data through APIs. Based on Kong Community Edition API management solution.","openshift.io/display-name":"API Management Service (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"b8840c","environment":"dev","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"b8840c","profile_id":"580","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-128"},"name":"b8840c-dev"}}\n',
      "openshift.io/description":
        "Enterprise API gateway solution that supports client teams with easily publishing, discovering, mediating, governing and managing access to their APIs to improve utilization, security and control over access to digital services and data through APIs. Based on Kong Community Edition API management solution.",
      "openshift.io/display-name": "API Management Service (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c25",
      "openshift.io/sa.scc.supplemental-groups": "1001610000/10000",
      "openshift.io/sa.scc.uid-range": "1001610000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T20:29:42Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "b8840c",
      environment: "dev",
      "kubernetes.io/metadata.name": "b8840c-dev",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "b8840c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "580",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-128"
    },
    name: "b8840c-dev",
    resourceVersion: "1747947981",
    uid: "77b85927-ef36-4674-9749-d552204e2863"
  },
  {
    annotations: {
      contacts:
        '[{"email": "aidan.cope@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ikethecoder"}, {"email": "justin.tendeck@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "jTendeck"}, {"email": "greg.lawrance@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "gjlawran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"aidan.cope@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ikethecoder\\"}, {\\"email\\": \\"justin.tendeck@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"jTendeck\\"}, {\\"email\\": \\"greg.lawrance@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"gjlawran\\"}]","openshift.io/description":"Enterprise API gateway solution that supports client teams with easily publishing, discovering, mediating, governing and managing access to their APIs to improve utilization, security and control over access to digital services and data through APIs. Based on Kong Community Edition API management solution.","openshift.io/display-name":"API Management Service (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"b8840c","environment":"prod","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"b8840c","profile_id":"580","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-128"},"name":"b8840c-prod"}}\n',
      "openshift.io/description":
        "Enterprise API gateway solution that supports client teams with easily publishing, discovering, mediating, governing and managing access to their APIs to improve utilization, security and control over access to digital services and data through APIs. Based on Kong Community Edition API management solution.",
      "openshift.io/display-name": "API Management Service (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c35",
      "openshift.io/sa.scc.supplemental-groups": "1001630000/10000",
      "openshift.io/sa.scc.uid-range": "1001630000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T20:29:42Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "b8840c",
      environment: "prod",
      "kubernetes.io/metadata.name": "b8840c-prod",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "b8840c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "580",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-128"
    },
    name: "b8840c-prod",
    resourceVersion: "1747948007",
    uid: "ea23def0-bf95-4ff3-aaec-ddfe43e8c013"
  },
  {
    annotations: {
      contacts:
        '[{"email": "aidan.cope@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ikethecoder"}, {"email": "justin.tendeck@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "jTendeck"}, {"email": "greg.lawrance@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "gjlawran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"aidan.cope@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ikethecoder\\"}, {\\"email\\": \\"justin.tendeck@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"jTendeck\\"}, {\\"email\\": \\"greg.lawrance@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"gjlawran\\"}]","openshift.io/description":"Enterprise API gateway solution that supports client teams with easily publishing, discovering, mediating, governing and managing access to their APIs to improve utilization, security and control over access to digital services and data through APIs. Based on Kong Community Edition API management solution.","openshift.io/display-name":"API Management Service (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"b8840c","environment":"test","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"b8840c","profile_id":"580","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-128"},"name":"b8840c-test"}}\n',
      "openshift.io/description":
        "Enterprise API gateway solution that supports client teams with easily publishing, discovering, mediating, governing and managing access to their APIs to improve utilization, security and control over access to digital services and data through APIs. Based on Kong Community Edition API management solution.",
      "openshift.io/display-name": "API Management Service (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c20",
      "openshift.io/sa.scc.supplemental-groups": "1001600000/10000",
      "openshift.io/sa.scc.uid-range": "1001600000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T20:29:42Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "b8840c",
      environment: "test",
      "kubernetes.io/metadata.name": "b8840c-test",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "b8840c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "580",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-128"
    },
    name: "b8840c-test",
    resourceVersion: "1747948039",
    uid: "cb70c111-793e-4911-b99c-7c92e4c5f86c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "aidan.cope@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ikethecoder"}, {"email": "justin.tendeck@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "jTendeck"}, {"email": "greg.lawrance@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "gjlawran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"aidan.cope@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ikethecoder\\"}, {\\"email\\": \\"justin.tendeck@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"jTendeck\\"}, {\\"email\\": \\"greg.lawrance@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"gjlawran\\"}]","openshift.io/description":"Enterprise API gateway solution that supports client teams with easily publishing, discovering, mediating, governing and managing access to their APIs to improve utilization, security and control over access to digital services and data through APIs. Based on Kong Community Edition API management solution.","openshift.io/display-name":"API Management Service (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"b8840c","environment":"tools","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"b8840c","profile_id":"580","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-128"},"name":"b8840c-tools"}}\n',
      "openshift.io/description":
        "Enterprise API gateway solution that supports client teams with easily publishing, discovering, mediating, governing and managing access to their APIs to improve utilization, security and control over access to digital services and data through APIs. Based on Kong Community Edition API management solution.",
      "openshift.io/display-name": "API Management Service (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c30",
      "openshift.io/sa.scc.supplemental-groups": "1001620000/10000",
      "openshift.io/sa.scc.uid-range": "1001620000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T20:29:42Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "b8840c",
      environment: "tools",
      "kubernetes.io/metadata.name": "b8840c-tools",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "b8840c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "580",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-128"
    },
    name: "b8840c-tools",
    resourceVersion: "1747948066",
    uid: "1e47029a-622f-4d54-8f15-f4eb41fa2380"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Namespace to provide analytics from our cloud platform apps.","openshift.io/display-name":"BCROS ANALYTICS (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"bb7717","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"bb7717","profile_id":"571","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"bb7717-dev"}}\n',
      "openshift.io/description":
        "Namespace to provide analytics from our cloud platform apps.",
      "openshift.io/display-name": "BCROS ANALYTICS (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c9",
      "openshift.io/sa.scc.supplemental-groups": "1001500000/10000",
      "openshift.io/sa.scc.uid-range": "1001500000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:57Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "bb7717",
      environment: "dev",
      "kubernetes.io/metadata.name": "bb7717-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "bb7717",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "571",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "bb7717-dev",
    resourceVersion: "1747948088",
    uid: "f4b52d3f-9d94-4996-ac20-33d60c511f95"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Namespace to provide analytics from our cloud platform apps.","openshift.io/display-name":"BCROS ANALYTICS (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"bb7717","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"bb7717","profile_id":"571","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"bb7717-prod"}}\n',
      "openshift.io/description":
        "Namespace to provide analytics from our cloud platform apps.",
      "openshift.io/display-name": "BCROS ANALYTICS (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c14",
      "openshift.io/sa.scc.supplemental-groups": "1001510000/10000",
      "openshift.io/sa.scc.uid-range": "1001510000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:57Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "bb7717",
      environment: "prod",
      "kubernetes.io/metadata.name": "bb7717-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "bb7717",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "571",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "bb7717-prod",
    resourceVersion: "1747948102",
    uid: "0785ce95-a455-4866-9351-e8441d758e13"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Namespace to provide analytics from our cloud platform apps.","openshift.io/display-name":"BCROS ANALYTICS (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"bb7717","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"bb7717","profile_id":"571","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"bb7717-test"}}\n',
      "openshift.io/description":
        "Namespace to provide analytics from our cloud platform apps.",
      "openshift.io/display-name": "BCROS ANALYTICS (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001540000/10000",
      "openshift.io/sa.scc.uid-range": "1001540000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:57Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "bb7717",
      environment: "test",
      "kubernetes.io/metadata.name": "bb7717-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "bb7717",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "571",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "bb7717-test",
    resourceVersion: "1747948122",
    uid: "7db74ab6-47fb-43b1-b5db-d32e587580b4"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Namespace to provide analytics from our cloud platform apps.","openshift.io/display-name":"BCROS ANALYTICS (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"bb7717","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"bb7717","profile_id":"571","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"bb7717-tools"}}\n',
      "openshift.io/description":
        "Namespace to provide analytics from our cloud platform apps.",
      "openshift.io/display-name": "BCROS ANALYTICS (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c34",
      "openshift.io/sa.scc.supplemental-groups": "1001550000/10000",
      "openshift.io/sa.scc.uid-range": "1001550000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:57Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "bb7717",
      environment: "tools",
      "kubernetes.io/metadata.name": "bb7717-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "bb7717",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "571",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "bb7717-tools",
    resourceVersion: "1747948135",
    uid: "d4cdc85a-05e1-44e6-9fca-9ad631600202"
  },
  {
    annotations: {
      contacts:
        '[{"email": "faisal.hamood@gov.bc.ca", "role": "owner"}, {"email": "roland.stens@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"faisal.hamood@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"roland.stens@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55 ","openshift.io/display-name":"Post Update Testing (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"bf5ef6","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"bf5ef6","profile_id":"6418ca459254d3c105f362a5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"bf5ef6-dev"}}\n',
      "openshift.io/description":
        "A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55 ",
      "openshift.io/display-name": "Post Update Testing (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c15",
      "openshift.io/sa.scc.supplemental-groups": "1002480000/10000",
      "openshift.io/sa.scc.uid-range": "1002480000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-20T19:40:08Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "bf5ef6",
      environment: "dev",
      "kubernetes.io/metadata.name": "bf5ef6-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "bf5ef6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6418ca459254d3c105f362a5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "bf5ef6-dev",
    resourceVersion: "1747948183",
    uid: "05281a7f-1526-4ef2-9af7-9370392caead"
  },
  {
    annotations: {
      contacts:
        '[{"email": "faisal.hamood@gov.bc.ca", "role": "owner"}, {"email": "roland.stens@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"faisal.hamood@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"roland.stens@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55 ","openshift.io/display-name":"Post Update Testing (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"bf5ef6","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"bf5ef6","profile_id":"6418ca459254d3c105f362a5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"bf5ef6-prod"}}\n',
      "openshift.io/description":
        "A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55 ",
      "openshift.io/display-name": "Post Update Testing (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c25",
      "openshift.io/sa.scc.supplemental-groups": "1002500000/10000",
      "openshift.io/sa.scc.uid-range": "1002500000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-20T19:40:08Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "bf5ef6",
      environment: "prod",
      "kubernetes.io/metadata.name": "bf5ef6-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "bf5ef6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6418ca459254d3c105f362a5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "bf5ef6-prod",
    resourceVersion: "1747948201",
    uid: "0ef7f2f7-0b47-4dfc-965f-5800f34f4097"
  },
  {
    annotations: {
      contacts:
        '[{"email": "faisal.hamood@gov.bc.ca", "role": "owner"}, {"email": "roland.stens@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"faisal.hamood@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"roland.stens@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55 ","openshift.io/display-name":"Post Update Testing (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"bf5ef6","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"bf5ef6","profile_id":"6418ca459254d3c105f362a5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"bf5ef6-test"}}\n',
      "openshift.io/description":
        "A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55 ",
      "openshift.io/display-name": "Post Update Testing (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c20",
      "openshift.io/sa.scc.supplemental-groups": "1002490000/10000",
      "openshift.io/sa.scc.uid-range": "1002490000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-20T19:40:08Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "bf5ef6",
      environment: "test",
      "kubernetes.io/metadata.name": "bf5ef6-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "bf5ef6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6418ca459254d3c105f362a5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "bf5ef6-test",
    resourceVersion: "1747948223",
    uid: "7e0156d0-eb1e-43d7-ad8e-61fc38f1f5f5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "faisal.hamood@gov.bc.ca", "role": "owner"}, {"email": "roland.stens@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"faisal.hamood@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"roland.stens@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55 ","openshift.io/display-name":"Post Update Testing (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"bf5ef6","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"bf5ef6","profile_id":"6418ca459254d3c105f362a5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"bf5ef6-tools"}}\n',
      "openshift.io/description":
        "A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55 ",
      "openshift.io/display-name": "Post Update Testing (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c10",
      "openshift.io/sa.scc.supplemental-groups": "1002470000/10000",
      "openshift.io/sa.scc.uid-range": "1002470000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-20T19:40:08Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "bf5ef6",
      environment: "tools",
      "kubernetes.io/metadata.name": "bf5ef6-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "bf5ef6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6418ca459254d3c105f362a5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "bf5ef6-tools",
    resourceVersion: "1747948239",
    uid: "83c423cf-57bc-4997-a6cb-6ac03e218450"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CSB Court of Appeal Integration serves as the interface between the Court of Appeal and the Justice Common Object Repository.  It handles the storing and retrieval of documents related to filing an appeal.","openshift.io/display-name":"CSB Court of Appeal Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"bf8ee6","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"bf8ee6","profile_id":"608","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"bf8ee6-dev"}}\n',
      "openshift.io/description":
        "CSB Court of Appeal Integration serves as the interface between the Court of Appeal and the Justice Common Object Repository.  It handles the storing and retrieval of documents related to filing an appeal.",
      "openshift.io/display-name": "CSB Court of Appeal Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c2",
      "openshift.io/sa.scc.supplemental-groups": "1001810000/10000",
      "openshift.io/sa.scc.uid-range": "1001810000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T17:08:41Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "bf8ee6",
      environment: "dev",
      "kubernetes.io/metadata.name": "bf8ee6-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "bf8ee6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "608",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "bf8ee6-dev",
    resourceVersion: "1747948263",
    uid: "3de3158e-21a4-477c-81e2-3cdb14abd670"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CSB Court of Appeal Integration serves as the interface between the Court of Appeal and the Justice Common Object Repository.  It handles the storing and retrieval of documents related to filing an appeal.","openshift.io/display-name":"CSB Court of Appeal Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"bf8ee6","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"bf8ee6","profile_id":"608","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"bf8ee6-prod"}}\n',
      "openshift.io/description":
        "CSB Court of Appeal Integration serves as the interface between the Court of Appeal and the Justice Common Object Repository.  It handles the storing and retrieval of documents related to filing an appeal.",
      "openshift.io/display-name": "CSB Court of Appeal Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c42,c39",
      "openshift.io/sa.scc.supplemental-groups": "1001800000/10000",
      "openshift.io/sa.scc.uid-range": "1001800000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T17:08:41Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "bf8ee6",
      environment: "prod",
      "kubernetes.io/metadata.name": "bf8ee6-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "bf8ee6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "608",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "bf8ee6-prod",
    resourceVersion: "1747948278",
    uid: "5f6541a0-eb0a-4a10-a0b9-a03aa6ef558c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CSB Court of Appeal Integration serves as the interface between the Court of Appeal and the Justice Common Object Repository.  It handles the storing and retrieval of documents related to filing an appeal.","openshift.io/display-name":"CSB Court of Appeal Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"bf8ee6","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"bf8ee6","profile_id":"608","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"bf8ee6-test"}}\n',
      "openshift.io/description":
        "CSB Court of Appeal Integration serves as the interface between the Court of Appeal and the Justice Common Object Repository.  It handles the storing and retrieval of documents related to filing an appeal.",
      "openshift.io/display-name": "CSB Court of Appeal Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c7",
      "openshift.io/sa.scc.supplemental-groups": "1001820000/10000",
      "openshift.io/sa.scc.uid-range": "1001820000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T17:08:41Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "bf8ee6",
      environment: "test",
      "kubernetes.io/metadata.name": "bf8ee6-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "bf8ee6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "608",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "bf8ee6-test",
    resourceVersion: "1747948296",
    uid: "5967c78f-af66-43f8-8d41-08e62d7946c3"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CSB Court of Appeal Integration serves as the interface between the Court of Appeal and the Justice Common Object Repository.  It handles the storing and retrieval of documents related to filing an appeal.","openshift.io/display-name":"CSB Court of Appeal Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"bf8ee6","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"bf8ee6","profile_id":"608","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"bf8ee6-tools"}}\n',
      "openshift.io/description":
        "CSB Court of Appeal Integration serves as the interface between the Court of Appeal and the Justice Common Object Repository.  It handles the storing and retrieval of documents related to filing an appeal.",
      "openshift.io/display-name": "CSB Court of Appeal Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c12",
      "openshift.io/sa.scc.supplemental-groups": "1001830000/10000",
      "openshift.io/sa.scc.uid-range": "1001830000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T17:08:41Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "bf8ee6",
      environment: "tools",
      "kubernetes.io/metadata.name": "bf8ee6-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "bf8ee6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "608",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "bf8ee6-tools",
    resourceVersion: "1747948319",
    uid: "049591d0-8790-4dee-b8c9-d83dd467be8f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Mobile home registration site","openshift.io/display-name":"BCROS MHR (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c11d8b","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"c11d8b","profile_id":"572","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c11d8b-dev"}}\n',
      "openshift.io/description": "Mobile home registration site",
      "openshift.io/display-name": "BCROS MHR (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c35",
      "openshift.io/sa.scc.supplemental-groups": "1001330000/10000",
      "openshift.io/sa.scc.uid-range": "1001330000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c11d8b",
      environment: "dev",
      "kubernetes.io/metadata.name": "c11d8b-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "c11d8b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "572",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c11d8b-dev",
    resourceVersion: "1747948334",
    uid: "009454ba-a354-4a6c-baaa-6dd9e51147c5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Mobile home registration site","openshift.io/display-name":"BCROS MHR (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c11d8b","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"c11d8b","profile_id":"572","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c11d8b-prod"}}\n',
      "openshift.io/description": "Mobile home registration site",
      "openshift.io/display-name": "BCROS MHR (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c37,c9",
      "openshift.io/sa.scc.supplemental-groups": "1001350000/10000",
      "openshift.io/sa.scc.uid-range": "1001350000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c11d8b",
      environment: "prod",
      "kubernetes.io/metadata.name": "c11d8b-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "c11d8b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "572",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c11d8b-prod",
    resourceVersion: "1747948353",
    uid: "35bfb12a-5b95-4050-8356-d5e0cb805350"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Mobile home registration site","openshift.io/display-name":"BCROS MHR (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c11d8b","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"c11d8b","profile_id":"572","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c11d8b-test"}}\n',
      "openshift.io/description": "Mobile home registration site",
      "openshift.io/display-name": "BCROS MHR (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c30",
      "openshift.io/sa.scc.supplemental-groups": "1001320000/10000",
      "openshift.io/sa.scc.uid-range": "1001320000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c11d8b",
      environment: "test",
      "kubernetes.io/metadata.name": "c11d8b-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "c11d8b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "572",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c11d8b-test",
    resourceVersion: "1747948380",
    uid: "b33fc843-dbb9-47b7-b34a-0bd5b1149247"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Mobile home registration site","openshift.io/display-name":"BCROS MHR (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c11d8b","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"c11d8b","profile_id":"572","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c11d8b-tools"}}\n',
      "openshift.io/description": "Mobile home registration site",
      "openshift.io/display-name": "BCROS MHR (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c37,c4",
      "openshift.io/sa.scc.supplemental-groups": "1001340000/10000",
      "openshift.io/sa.scc.uid-range": "1001340000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:53Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c11d8b",
      environment: "tools",
      "kubernetes.io/metadata.name": "c11d8b-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "c11d8b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "572",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c11d8b-tools",
    resourceVersion: "1747948410",
    uid: "83cfa45c-165b-42a9-b2b2-d891d5e1b8e2"
  },
  {
    annotations: {
      contacts:
        '[{"email": "james.w.payer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "jamespayer"}, {"email": "doug.bilinski@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "dougbilinski"}, {"email": "james.w.payer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "jamespayer"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"james.w.payer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"jamespayer\\"}, {\\"email\\": \\"doug.bilinski@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"dougbilinski\\"}, {\\"email\\": \\"james.w.payer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"jamespayer\\"}]","openshift.io/description":"A permitting system that allows for automated commercial and overheight/overweight private vehicle travel permits to be issued.","openshift.io/display-name":"onRouteBC (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c3141c","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"TRAN","name":"c3141c","profile_id":"900","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c3141c-dev"}}\n',
      "openshift.io/description":
        "A permitting system that allows for automated commercial and overheight/overweight private vehicle travel permits to be issued.",
      "openshift.io/display-name": "onRouteBC (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c19",
      "openshift.io/sa.scc.supplemental-groups": "1002390000/10000",
      "openshift.io/sa.scc.uid-range": "1002390000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-27T23:26:33Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c3141c",
      environment: "dev",
      "kubernetes.io/metadata.name": "c3141c-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TRAN",
      name: "c3141c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "900",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c3141c-dev",
    resourceVersion: "1747948434",
    uid: "68ffabc1-e9ad-4aac-b256-791cb6c9e96d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "james.w.payer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "jamespayer"}, {"email": "doug.bilinski@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "dougbilinski"}, {"email": "james.w.payer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "jamespayer"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"james.w.payer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"jamespayer\\"}, {\\"email\\": \\"doug.bilinski@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"dougbilinski\\"}, {\\"email\\": \\"james.w.payer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"jamespayer\\"}]","openshift.io/description":"A permitting system that allows for automated commercial and overheight/overweight private vehicle travel permits to be issued.","openshift.io/display-name":"onRouteBC (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c3141c","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"TRAN","name":"c3141c","profile_id":"900","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c3141c-prod"}}\n',
      "openshift.io/description":
        "A permitting system that allows for automated commercial and overheight/overweight private vehicle travel permits to be issued.",
      "openshift.io/display-name": "onRouteBC (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c14",
      "openshift.io/sa.scc.supplemental-groups": "1002380000/10000",
      "openshift.io/sa.scc.uid-range": "1002380000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-27T23:26:33Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c3141c",
      environment: "prod",
      "kubernetes.io/metadata.name": "c3141c-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TRAN",
      name: "c3141c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "900",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c3141c-prod",
    resourceVersion: "1747948449",
    uid: "ff2e37a3-46ca-4270-9670-122f40be0c16"
  },
  {
    annotations: {
      contacts:
        '[{"email": "james.w.payer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "jamespayer"}, {"email": "doug.bilinski@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "dougbilinski"}, {"email": "james.w.payer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "jamespayer"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"james.w.payer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"jamespayer\\"}, {\\"email\\": \\"doug.bilinski@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"dougbilinski\\"}, {\\"email\\": \\"james.w.payer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"jamespayer\\"}]","openshift.io/description":"A permitting system that allows for automated commercial and overheight/overweight private vehicle travel permits to be issued.","openshift.io/display-name":"onRouteBC (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c3141c","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"TRAN","name":"c3141c","profile_id":"900","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c3141c-test"}}\n',
      "openshift.io/description":
        "A permitting system that allows for automated commercial and overheight/overweight private vehicle travel permits to be issued.",
      "openshift.io/display-name": "onRouteBC (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c9",
      "openshift.io/sa.scc.supplemental-groups": "1002370000/10000",
      "openshift.io/sa.scc.uid-range": "1002370000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-27T23:26:33Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c3141c",
      environment: "test",
      "kubernetes.io/metadata.name": "c3141c-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TRAN",
      name: "c3141c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "900",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c3141c-test",
    resourceVersion: "1747948471",
    uid: "a0795a85-6175-42b8-a09d-8fc323541b26"
  },
  {
    annotations: {
      contacts:
        '[{"email": "james.w.payer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "jamespayer"}, {"email": "doug.bilinski@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "dougbilinski"}, {"email": "james.w.payer@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "jamespayer"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"james.w.payer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"jamespayer\\"}, {\\"email\\": \\"doug.bilinski@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"dougbilinski\\"}, {\\"email\\": \\"james.w.payer@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"jamespayer\\"}]","openshift.io/description":"A permitting system that allows for automated commercial and overheight/overweight private vehicle travel permits to be issued.","openshift.io/display-name":"onRouteBC (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c3141c","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"TRAN","name":"c3141c","profile_id":"900","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c3141c-tools"}}\n',
      "openshift.io/description":
        "A permitting system that allows for automated commercial and overheight/overweight private vehicle travel permits to be issued.",
      "openshift.io/display-name": "onRouteBC (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c4",
      "openshift.io/sa.scc.supplemental-groups": "1002360000/10000",
      "openshift.io/sa.scc.uid-range": "1002360000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-27T23:26:33Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c3141c",
      environment: "tools",
      "kubernetes.io/metadata.name": "c3141c-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TRAN",
      name: "c3141c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "900",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c3141c-tools",
    resourceVersion: "1747948493",
    uid: "8a00527b-bc19-410f-add9-278f3d9285df"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Project provides services for Registries business applications","openshift.io/display-name":"LEAR (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c574fe","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"c574fe","profile_id":"566","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c574fe-dev"}}\n',
      "openshift.io/description":
        "Project provides services for Registries business applications",
      "openshift.io/display-name": "LEAR (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c0",
      "openshift.io/sa.scc.supplemental-groups": "1001260000/10000",
      "openshift.io/sa.scc.uid-range": "1001260000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:52Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c574fe",
      environment: "dev",
      "kubernetes.io/metadata.name": "c574fe-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "c574fe",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "566",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c574fe-dev",
    resourceVersion: "1747948511",
    uid: "55fe14c4-21b2-420e-bf77-433124866a49"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Project provides services for Registries business applications","openshift.io/display-name":"LEAR (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c574fe","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"c574fe","profile_id":"566","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c574fe-prod"}}\n',
      "openshift.io/description":
        "Project provides services for Registries business applications",
      "openshift.io/display-name": "LEAR (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c5",
      "openshift.io/sa.scc.supplemental-groups": "1001270000/10000",
      "openshift.io/sa.scc.uid-range": "1001270000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:52Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c574fe",
      environment: "prod",
      "kubernetes.io/metadata.name": "c574fe-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "c574fe",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "566",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c574fe-prod",
    resourceVersion: "1747948542",
    uid: "18cb7284-76f3-4c9f-bd76-e77e203fd127"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Project provides services for Registries business applications","openshift.io/display-name":"LEAR (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c574fe","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"c574fe","profile_id":"566","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c574fe-test"}}\n',
      "openshift.io/description":
        "Project provides services for Registries business applications",
      "openshift.io/display-name": "LEAR (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c25",
      "openshift.io/sa.scc.supplemental-groups": "1001310000/10000",
      "openshift.io/sa.scc.uid-range": "1001310000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:52Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c574fe",
      environment: "test",
      "kubernetes.io/metadata.name": "c574fe-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "c574fe",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "566",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c574fe-test",
    resourceVersion: "1747948571",
    uid: "18c2505e-29aa-40f3-83c0-3955ddff7fcb"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Project provides services for Registries business applications","openshift.io/display-name":"LEAR (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c574fe","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"c574fe","profile_id":"566","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c574fe-tools"}}\n',
      "openshift.io/description":
        "Project provides services for Registries business applications",
      "openshift.io/display-name": "LEAR (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c10",
      "openshift.io/sa.scc.supplemental-groups": "1001280000/10000",
      "openshift.io/sa.scc.uid-range": "1001280000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:17:52Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c574fe",
      environment: "tools",
      "kubernetes.io/metadata.name": "c574fe-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "c574fe",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "566",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c574fe-tools",
    resourceVersion: "1747948601",
    uid: "3c955fac-6352-4fb0-945b-90a83a90b797"
  },
  {
    annotations: {
      contacts:
        '[{"email": "jeff.collopy@gov.bc.ca", "role": "owner"}, {"email": "ian.hallas@gov.bc.ca", "role": "lead"}, {"email": "adam.ell@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"jeff.collopy@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.hallas@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"adam.ell@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Hosting of public and internal websites managed through CMF ","openshift.io/display-name":"Content Management Framework (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-16-limit-32","devops.gov.bc.ca/gitops-app":"c57b11","environment":"dev","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"c57b11","profile_id":"641e42eef4709bc9e99c88c9","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-4"},"name":"c57b11-dev"}}\n',
      "openshift.io/description":
        "Hosting of public and internal websites managed through CMF ",
      "openshift.io/display-name": "Content Management Framework (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c10",
      "openshift.io/sa.scc.supplemental-groups": "1002000000/10000",
      "openshift.io/sa.scc.uid-range": "1002000000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-06T18:55:51Z",
    labels: {
      cpu_quota: "cpu-request-16-limit-32",
      "devops.gov.bc.ca/gitops-app": "c57b11",
      environment: "dev",
      "kubernetes.io/metadata.name": "c57b11-dev",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "c57b11",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42eef4709bc9e99c88c9",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-4"
    },
    name: "c57b11-dev",
    resourceVersion: "1747948623",
    uid: "70693e00-36fc-42d5-8e0f-25bce9a278f9"
  },
  {
    annotations: {
      contacts:
        '[{"email": "jeff.collopy@gov.bc.ca", "role": "owner"}, {"email": "ian.hallas@gov.bc.ca", "role": "lead"}, {"email": "adam.ell@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"jeff.collopy@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.hallas@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"adam.ell@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Hosting of public and internal websites managed through CMF ","openshift.io/display-name":"Content Management Framework (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"custom","devops.gov.bc.ca/gitops-app":"c57b11","environment":"prod","memory_quota":"custom","ministry_id":"CITZ","name":"c57b11","profile_id":"641e42eef4709bc9e99c88c9","project_type":"user","provisioned-by":"argocd","snapshot_quota":"custom","storage_quota":"custom"},"name":"c57b11-prod"}}\n',
      "openshift.io/description":
        "Hosting of public and internal websites managed through CMF ",
      "openshift.io/display-name": "Content Management Framework (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c5",
      "openshift.io/sa.scc.supplemental-groups": "1001990000/10000",
      "openshift.io/sa.scc.uid-range": "1001990000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-06T18:55:51Z",
    labels: {
      cpu_quota: "custom",
      "devops.gov.bc.ca/gitops-app": "c57b11",
      environment: "prod",
      "kubernetes.io/metadata.name": "c57b11-prod",
      memory_quota: "custom",
      ministry_id: "CITZ",
      name: "c57b11",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42eef4709bc9e99c88c9",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "custom",
      storage_quota: "custom"
    },
    name: "c57b11-prod",
    resourceVersion: "1747948653",
    uid: "ba175872-abfe-4a1a-9c0b-e821162212f7"
  },
  {
    annotations: {
      contacts:
        '[{"email": "jeff.collopy@gov.bc.ca", "role": "owner"}, {"email": "ian.hallas@gov.bc.ca", "role": "lead"}, {"email": "adam.ell@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"jeff.collopy@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.hallas@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"adam.ell@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Hosting of public and internal websites managed through CMF ","openshift.io/display-name":"Content Management Framework (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"custom","devops.gov.bc.ca/gitops-app":"c57b11","environment":"test","memory_quota":"custom","ministry_id":"CITZ","name":"c57b11","profile_id":"641e42eef4709bc9e99c88c9","project_type":"user","provisioned-by":"argocd","snapshot_quota":"custom","storage_quota":"custom"},"name":"c57b11-test"}}\n',
      "openshift.io/description":
        "Hosting of public and internal websites managed through CMF ",
      "openshift.io/display-name": "Content Management Framework (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c25,c10",
      "openshift.io/sa.scc.supplemental-groups": "1000620000/10000",
      "openshift.io/sa.scc.uid-range": "1000620000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-06T18:55:51Z",
    labels: {
      cpu_quota: "custom",
      "devops.gov.bc.ca/gitops-app": "c57b11",
      environment: "test",
      "kubernetes.io/metadata.name": "c57b11-test",
      memory_quota: "custom",
      ministry_id: "CITZ",
      name: "c57b11",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42eef4709bc9e99c88c9",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "custom",
      storage_quota: "custom"
    },
    name: "c57b11-test",
    resourceVersion: "1747948674",
    uid: "52ac66c4-e240-437d-86f1-c6c034f400cd"
  },
  {
    annotations: {
      contacts:
        '[{"email": "jeff.collopy@gov.bc.ca", "role": "owner"}, {"email": "ian.hallas@gov.bc.ca", "role": "lead"}, {"email": "adam.ell@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"jeff.collopy@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.hallas@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"adam.ell@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Hosting of public and internal websites managed through CMF ","openshift.io/display-name":"Content Management Framework (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"c57b11","environment":"tools","memory_quota":"memory-request-8-limit-16","ministry_id":"CITZ","name":"c57b11","profile_id":"641e42eef4709bc9e99c88c9","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c57b11-tools"}}\n',
      "openshift.io/description":
        "Hosting of public and internal websites managed through CMF ",
      "openshift.io/display-name": "Content Management Framework (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c0",
      "openshift.io/sa.scc.supplemental-groups": "1001980000/10000",
      "openshift.io/sa.scc.uid-range": "1001980000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-06T18:55:51Z",
    labels: {
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "c57b11",
      environment: "tools",
      "kubernetes.io/metadata.name": "c57b11-tools",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "CITZ",
      name: "c57b11",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42eef4709bc9e99c88c9",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c57b11-tools",
    resourceVersion: "1747948693",
    uid: "e0f06988-8434-42e5-a00b-2a858f225b2d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "nathan.buckham@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"nathan.buckham@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Corrections StaffNet application allows BC Corrections to maintain employee roles with the CORNET application, print ID cards, and is being extended to allow enrolment of staff biometrics into the on premise Electronic Security and Control System which provides surveillance, communication, and door control to secure the custody centres.  This integration provides access to data sources to support this application via the implementation of several APIs.","openshift.io/display-name":"BC Corrections StaffNet Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c5fb6c","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"c5fb6c","profile_id":"726","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c5fb6c-dev"}}\n',
      "openshift.io/description":
        "The BC Corrections StaffNet application allows BC Corrections to maintain employee roles with the CORNET application, print ID cards, and is being extended to allow enrolment of staff biometrics into the on premise Electronic Security and Control System which provides surveillance, communication, and door control to secure the custody centres.  This integration provides access to data sources to support this application via the implementation of several APIs.",
      "openshift.io/display-name": "BC Corrections StaffNet Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c25",
      "openshift.io/sa.scc.supplemental-groups": "1002120000/10000",
      "openshift.io/sa.scc.uid-range": "1002120000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-04T16:32:31Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c5fb6c",
      environment: "dev",
      "kubernetes.io/metadata.name": "c5fb6c-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "c5fb6c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "726",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c5fb6c-dev",
    resourceVersion: "1747948724",
    uid: "3e06db34-7b01-46e3-8f8d-218eb3575f57"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "nathan.buckham@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"nathan.buckham@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Corrections StaffNet application allows BC Corrections to maintain employee roles with the CORNET application, print ID cards, and is being extended to allow enrolment of staff biometrics into the on premise Electronic Security and Control System which provides surveillance, communication, and door control to secure the custody centres.  This integration provides access to data sources to support this application via the implementation of several APIs.","openshift.io/display-name":"BC Corrections StaffNet Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c5fb6c","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"c5fb6c","profile_id":"726","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c5fb6c-prod"}}\n',
      "openshift.io/description":
        "The BC Corrections StaffNet application allows BC Corrections to maintain employee roles with the CORNET application, print ID cards, and is being extended to allow enrolment of staff biometrics into the on premise Electronic Security and Control System which provides surveillance, communication, and door control to secure the custody centres.  This integration provides access to data sources to support this application via the implementation of several APIs.",
      "openshift.io/display-name": "BC Corrections StaffNet Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c10",
      "openshift.io/sa.scc.supplemental-groups": "1002090000/10000",
      "openshift.io/sa.scc.uid-range": "1002090000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-04T16:32:31Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c5fb6c",
      environment: "prod",
      "kubernetes.io/metadata.name": "c5fb6c-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "c5fb6c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "726",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c5fb6c-prod",
    resourceVersion: "1747948753",
    uid: "8c26ff1f-decd-4a36-8b61-7c39dc534097"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "nathan.buckham@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"nathan.buckham@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Corrections StaffNet application allows BC Corrections to maintain employee roles with the CORNET application, print ID cards, and is being extended to allow enrolment of staff biometrics into the on premise Electronic Security and Control System which provides surveillance, communication, and door control to secure the custody centres.  This integration provides access to data sources to support this application via the implementation of several APIs.","openshift.io/display-name":"BC Corrections StaffNet Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c5fb6c","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"c5fb6c","profile_id":"726","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c5fb6c-test"}}\n',
      "openshift.io/description":
        "The BC Corrections StaffNet application allows BC Corrections to maintain employee roles with the CORNET application, print ID cards, and is being extended to allow enrolment of staff biometrics into the on premise Electronic Security and Control System which provides surveillance, communication, and door control to secure the custody centres.  This integration provides access to data sources to support this application via the implementation of several APIs.",
      "openshift.io/display-name": "BC Corrections StaffNet Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c20",
      "openshift.io/sa.scc.supplemental-groups": "1002110000/10000",
      "openshift.io/sa.scc.uid-range": "1002110000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-04T16:32:31Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c5fb6c",
      environment: "test",
      "kubernetes.io/metadata.name": "c5fb6c-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "c5fb6c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "726",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c5fb6c-test",
    resourceVersion: "1747948770",
    uid: "b78d77e6-7968-4fd8-9e6a-eb7f51ce5ef7"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "nathan.buckham@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"nathan.buckham@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Corrections StaffNet application allows BC Corrections to maintain employee roles with the CORNET application, print ID cards, and is being extended to allow enrolment of staff biometrics into the on premise Electronic Security and Control System which provides surveillance, communication, and door control to secure the custody centres.  This integration provides access to data sources to support this application via the implementation of several APIs.","openshift.io/display-name":"BC Corrections StaffNet Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c5fb6c","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"c5fb6c","profile_id":"726","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c5fb6c-tools"}}\n',
      "openshift.io/description":
        "The BC Corrections StaffNet application allows BC Corrections to maintain employee roles with the CORNET application, print ID cards, and is being extended to allow enrolment of staff biometrics into the on premise Electronic Security and Control System which provides surveillance, communication, and door control to secure the custody centres.  This integration provides access to data sources to support this application via the implementation of several APIs.",
      "openshift.io/display-name":
        "BC Corrections StaffNet Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c15",
      "openshift.io/sa.scc.supplemental-groups": "1002100000/10000",
      "openshift.io/sa.scc.uid-range": "1002100000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-04T16:32:31Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c5fb6c",
      environment: "tools",
      "kubernetes.io/metadata.name": "c5fb6c-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "c5fb6c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "726",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c5fb6c-tools",
    resourceVersion: "1747948795",
    uid: "e578498a-9baf-40d5-93ad-ec8a9db70da7"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zorin.samji@gov.bc.ca", "role": "owner"}, {"email": "jonathan.sharman@gov.bc.ca", "role": "lead"}, {"email": "nithinshekar.kuruba@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is for the Pathfinder SSO DEV Keycloak instance on GOLD","openshift.io/display-name":"OIDCDEVSSO (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"c6af30","environment":"dev","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"c6af30","profile_id":"641e426789e7f899074ae425","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c6af30-dev"}}\n',
      "openshift.io/description":
        "This is for the Pathfinder SSO DEV Keycloak instance on GOLD",
      "openshift.io/display-name": "OIDCDEVSSO (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c37",
      "openshift.io/sa.scc.supplemental-groups": "1001880000/10000",
      "openshift.io/sa.scc.uid-range": "1001880000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T22:47:41Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "c6af30",
      environment: "dev",
      "kubernetes.io/metadata.name": "c6af30-dev",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "c6af30",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e426789e7f899074ae425",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c6af30-dev",
    resourceVersion: "1747948812",
    uid: "9a2cff55-0d8d-473d-9a7f-a7426eb7eb5d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zorin.samji@gov.bc.ca", "role": "owner"}, {"email": "jonathan.sharman@gov.bc.ca", "role": "lead"}, {"email": "nithinshekar.kuruba@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is for the Pathfinder SSO DEV Keycloak instance on GOLD","openshift.io/display-name":"OIDCDEVSSO (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c6af30","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"c6af30","profile_id":"641e426789e7f899074ae425","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"c6af30-prod"}}\n',
      "openshift.io/description":
        "This is for the Pathfinder SSO DEV Keycloak instance on GOLD",
      "openshift.io/display-name": "OIDCDEVSSO (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c9",
      "openshift.io/sa.scc.supplemental-groups": "1001910000/10000",
      "openshift.io/sa.scc.uid-range": "1001910000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T22:47:41Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c6af30",
      environment: "prod",
      "kubernetes.io/metadata.name": "c6af30-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "c6af30",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e426789e7f899074ae425",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "c6af30-prod",
    resourceVersion: "1747948832",
    uid: "8bdc6add-974b-4cb1-bc6d-92adc2833c22"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zorin.samji@gov.bc.ca", "role": "owner"}, {"email": "jonathan.sharman@gov.bc.ca", "role": "lead"}, {"email": "nithinshekar.kuruba@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is for the Pathfinder SSO DEV Keycloak instance on GOLD","openshift.io/display-name":"OIDCDEVSSO (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"c6af30","environment":"test","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"c6af30","profile_id":"641e426789e7f899074ae425","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c6af30-test"}}\n',
      "openshift.io/description":
        "This is for the Pathfinder SSO DEV Keycloak instance on GOLD",
      "openshift.io/display-name": "OIDCDEVSSO (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c42",
      "openshift.io/sa.scc.supplemental-groups": "1001890000/10000",
      "openshift.io/sa.scc.uid-range": "1001890000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T22:47:41Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "c6af30",
      environment: "test",
      "kubernetes.io/metadata.name": "c6af30-test",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "c6af30",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e426789e7f899074ae425",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c6af30-test",
    resourceVersion: "1747948857",
    uid: "9976d4c9-d282-49b1-81ab-ae1e03120785"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zorin.samji@gov.bc.ca", "role": "owner"}, {"email": "jonathan.sharman@gov.bc.ca", "role": "lead"}, {"email": "nithinshekar.kuruba@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is for the Pathfinder SSO DEV Keycloak instance on GOLD","openshift.io/display-name":"OIDCDEVSSO (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"c6af30","environment":"tools","memory_quota":"memory-request-8-limit-16","ministry_id":"CITZ","name":"c6af30","profile_id":"641e426789e7f899074ae425","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"c6af30-tools"}}\n',
      "openshift.io/description":
        "This is for the Pathfinder SSO DEV Keycloak instance on GOLD",
      "openshift.io/display-name": "OIDCDEVSSO (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c4",
      "openshift.io/sa.scc.supplemental-groups": "1001900000/10000",
      "openshift.io/sa.scc.uid-range": "1001900000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T22:47:41Z",
    labels: {
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "c6af30",
      environment: "tools",
      "kubernetes.io/metadata.name": "c6af30-tools",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "CITZ",
      name: "c6af30",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e426789e7f899074ae425",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "c6af30-tools",
    resourceVersion: "1747948884",
    uid: "e3064585-0516-411f-8dfa-ac93c37fad92"
  },
  {
    annotations: {
      contacts:
        '[{"email": "stephen.s.laws@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sslaws"}, {"email": "nino.samson@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ninosamson"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"stephen.s.laws@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sslaws\\"}, {\\"email\\": \\"nino.samson@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ninosamson\\"}]","openshift.io/description":"An application which empowers citizens to manage their health care by providing access to their own health information.","openshift.io/display-name":"Health Gateway (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c8055e","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"HLTH","name":"c8055e","profile_id":"605","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c8055e-dev"}}\n',
      "openshift.io/description":
        "An application which empowers citizens to manage their health care by providing access to their own health information.",
      "openshift.io/display-name": "Health Gateway (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c42,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001780000/10000",
      "openshift.io/sa.scc.uid-range": "1001780000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-12-03T16:44:41Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c8055e",
      environment: "dev",
      "kubernetes.io/metadata.name": "c8055e-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "HLTH",
      name: "c8055e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "605",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c8055e-dev",
    resourceVersion: "1747948902",
    uid: "d6565dbe-84fb-40fd-baab-6655c5e86130"
  },
  {
    annotations: {
      contacts:
        '[{"email": "stephen.s.laws@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sslaws"}, {"email": "nino.samson@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ninosamson"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"stephen.s.laws@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sslaws\\"}, {\\"email\\": \\"nino.samson@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ninosamson\\"}]","openshift.io/description":"An application which empowers citizens to manage their health care by providing access to their own health information.","openshift.io/display-name":"Health Gateway (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c8055e","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"HLTH","name":"c8055e","profile_id":"605","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-512"},"name":"c8055e-prod"}}\n',
      "openshift.io/description":
        "An application which empowers citizens to manage their health care by providing access to their own health information.",
      "openshift.io/display-name": "Health Gateway (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c26,c15",
      "openshift.io/sa.scc.supplemental-groups": "1000680000/10000",
      "openshift.io/sa.scc.uid-range": "1000680000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-12-03T16:44:41Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c8055e",
      environment: "prod",
      "kubernetes.io/metadata.name": "c8055e-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "HLTH",
      name: "c8055e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "605",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-512"
    },
    name: "c8055e-prod",
    resourceVersion: "1747948926",
    uid: "daa36faa-95de-47f7-8371-b6979b15bc3c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "stephen.s.laws@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sslaws"}, {"email": "nino.samson@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ninosamson"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"stephen.s.laws@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sslaws\\"}, {\\"email\\": \\"nino.samson@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ninosamson\\"}]","openshift.io/description":"An application which empowers citizens to manage their health care by providing access to their own health information.","openshift.io/display-name":"Health Gateway (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c8055e","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"HLTH","name":"c8055e","profile_id":"605","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c8055e-test"}}\n',
      "openshift.io/description":
        "An application which empowers citizens to manage their health care by providing access to their own health information.",
      "openshift.io/display-name": "Health Gateway (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c42,c24",
      "openshift.io/sa.scc.supplemental-groups": "1001770000/10000",
      "openshift.io/sa.scc.uid-range": "1001770000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-12-03T16:44:41Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c8055e",
      environment: "test",
      "kubernetes.io/metadata.name": "c8055e-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "HLTH",
      name: "c8055e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "605",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c8055e-test",
    resourceVersion: "1747948948",
    uid: "4f80f0f9-2634-4bef-b450-266a50dc1a13"
  },
  {
    annotations: {
      contacts:
        '[{"email": "stephen.s.laws@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sslaws"}, {"email": "nino.samson@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ninosamson"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"stephen.s.laws@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sslaws\\"}, {\\"email\\": \\"nino.samson@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ninosamson\\"}]","openshift.io/description":"An application which empowers citizens to manage their health care by providing access to their own health information.","openshift.io/display-name":"Health Gateway (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"c8055e","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"HLTH","name":"c8055e","profile_id":"605","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"c8055e-tools"}}\n',
      "openshift.io/description":
        "An application which empowers citizens to manage their health care by providing access to their own health information.",
      "openshift.io/display-name": "Health Gateway (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c42,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001760000/10000",
      "openshift.io/sa.scc.uid-range": "1001760000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-12-03T16:44:41Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "c8055e",
      environment: "tools",
      "kubernetes.io/metadata.name": "c8055e-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "HLTH",
      name: "c8055e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "605",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "c8055e-tools",
    resourceVersion: "1747948967",
    uid: "373b0318-9896-4607-a467-517455a431f5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tony.stehle@gov.bc.ca", "role": "owner"}, {"email": "david.barrett@gov.bc.ca", "role": "lead"}, {"email": "pankaj.kathuria@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tony.stehle@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"david.barrett@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"pankaj.kathuria@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Modernizing 20 years old software, middleware and infrastructure to support applications connecting to Ministry of Health systems. We had been using silver cluster for all our applications. We need to migrate to Gold cluster for our applications to use the GoldDR features for HA applications. ","openshift.io/display-name":"HNI Modernization Project (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c8d6f2","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"c8d6f2","profile_id":"643f019b6de422b06f69cb6d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c8d6f2-dev"}}\n',
      "openshift.io/description":
        "Modernizing 20 years old software, middleware and infrastructure to support applications connecting to Ministry of Health systems. We had been using silver cluster for all our applications. We need to migrate to Gold cluster for our applications to use the GoldDR features for HA applications. ",
      "openshift.io/display-name": "HNI Modernization Project (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c30,c15",
      "openshift.io/sa.scc.supplemental-groups": "1000900000/10000",
      "openshift.io/sa.scc.uid-range": "1000900000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-08-08T20:56:32Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c8d6f2",
      environment: "dev",
      "kubernetes.io/metadata.name": "c8d6f2-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "c8d6f2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "643f019b6de422b06f69cb6d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c8d6f2-dev",
    resourceVersion: "1747948985",
    uid: "2f7c1117-f89a-42a5-988b-f3a4ca9f91cf"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tony.stehle@gov.bc.ca", "role": "owner"}, {"email": "david.barrett@gov.bc.ca", "role": "lead"}, {"email": "pankaj.kathuria@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tony.stehle@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"david.barrett@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"pankaj.kathuria@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Modernizing 20 years old software, middleware and infrastructure to support applications connecting to Ministry of Health systems. We had been using silver cluster for all our applications. We need to migrate to Gold cluster for our applications to use the GoldDR features for HA applications. ","openshift.io/display-name":"HNI Modernization Project (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"c8d6f2","environment":"prod","memory_quota":"memory-request-4-limit-8","ministry_id":"HLTH","name":"c8d6f2","profile_id":"643f019b6de422b06f69cb6d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"c8d6f2-prod"}}\n',
      "openshift.io/description":
        "Modernizing 20 years old software, middleware and infrastructure to support applications connecting to Ministry of Health systems. We had been using silver cluster for all our applications. We need to migrate to Gold cluster for our applications to use the GoldDR features for HA applications. ",
      "openshift.io/display-name": "HNI Modernization Project (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c30,c20",
      "openshift.io/sa.scc.supplemental-groups": "1000910000/10000",
      "openshift.io/sa.scc.uid-range": "1000910000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-08-08T20:56:32Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "c8d6f2",
      environment: "prod",
      "kubernetes.io/metadata.name": "c8d6f2-prod",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "HLTH",
      name: "c8d6f2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "643f019b6de422b06f69cb6d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "c8d6f2-prod",
    resourceVersion: "1747949000",
    uid: "951516ab-d3e1-4caf-b863-35eaab1d4c49"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tony.stehle@gov.bc.ca", "role": "owner"}, {"email": "david.barrett@gov.bc.ca", "role": "lead"}, {"email": "pankaj.kathuria@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tony.stehle@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"david.barrett@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"pankaj.kathuria@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Modernizing 20 years old software, middleware and infrastructure to support applications connecting to Ministry of Health systems. We had been using silver cluster for all our applications. We need to migrate to Gold cluster for our applications to use the GoldDR features for HA applications. ","openshift.io/display-name":"HNI Modernization Project (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"c8d6f2","environment":"test","memory_quota":"memory-request-4-limit-8","ministry_id":"HLTH","name":"c8d6f2","profile_id":"643f019b6de422b06f69cb6d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"c8d6f2-test"}}\n',
      "openshift.io/description":
        "Modernizing 20 years old software, middleware and infrastructure to support applications connecting to Ministry of Health systems. We had been using silver cluster for all our applications. We need to migrate to Gold cluster for our applications to use the GoldDR features for HA applications. ",
      "openshift.io/display-name": "HNI Modernization Project (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c0",
      "openshift.io/sa.scc.supplemental-groups": "1000930000/10000",
      "openshift.io/sa.scc.uid-range": "1000930000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-08-08T20:56:32Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "c8d6f2",
      environment: "test",
      "kubernetes.io/metadata.name": "c8d6f2-test",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "HLTH",
      name: "c8d6f2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "643f019b6de422b06f69cb6d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "c8d6f2-test",
    resourceVersion: "1747949017",
    uid: "bce495cd-6737-4800-aee8-741b6c844adc"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tony.stehle@gov.bc.ca", "role": "owner"}, {"email": "david.barrett@gov.bc.ca", "role": "lead"}, {"email": "pankaj.kathuria@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tony.stehle@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"david.barrett@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"pankaj.kathuria@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Modernizing 20 years old software, middleware and infrastructure to support applications connecting to Ministry of Health systems. We had been using silver cluster for all our applications. We need to migrate to Gold cluster for our applications to use the GoldDR features for HA applications. ","openshift.io/display-name":"HNI Modernization Project (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c8d6f2","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"c8d6f2","profile_id":"643f019b6de422b06f69cb6d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c8d6f2-tools"}}\n',
      "openshift.io/description":
        "Modernizing 20 years old software, middleware and infrastructure to support applications connecting to Ministry of Health systems. We had been using silver cluster for all our applications. We need to migrate to Gold cluster for our applications to use the GoldDR features for HA applications. ",
      "openshift.io/display-name": "HNI Modernization Project (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c30,c25",
      "openshift.io/sa.scc.supplemental-groups": "1000920000/10000",
      "openshift.io/sa.scc.uid-range": "1000920000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-08-08T20:56:32Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c8d6f2",
      environment: "tools",
      "kubernetes.io/metadata.name": "c8d6f2-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "c8d6f2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "643f019b6de422b06f69cb6d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c8d6f2-tools",
    resourceVersion: "1747949037",
    uid: "d47502a8-3ed8-4ec9-9d4b-1c2037130320"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Namespace required from operational tools to support our cloud platform apps","openshift.io/display-name":"BCROS OPS (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"cbaab0","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"cbaab0","profile_id":"570","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"cbaab0-dev"}}\n',
      "openshift.io/description":
        "Namespace required from operational tools to support our cloud platform apps",
      "openshift.io/display-name": "BCROS OPS (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c5",
      "openshift.io/sa.scc.supplemental-groups": "1001570000/10000",
      "openshift.io/sa.scc.uid-range": "1001570000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:18:10Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "cbaab0",
      environment: "dev",
      "kubernetes.io/metadata.name": "cbaab0-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "cbaab0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "570",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "cbaab0-dev",
    resourceVersion: "1747949073",
    uid: "70d67f38-bd3f-4e5f-ad20-aad6fc226e92"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Namespace required from operational tools to support our cloud platform apps","openshift.io/display-name":"BCROS OPS (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"cbaab0","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"cbaab0","profile_id":"570","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"cbaab0-prod"}}\n',
      "openshift.io/description":
        "Namespace required from operational tools to support our cloud platform apps",
      "openshift.io/display-name": "BCROS OPS (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c10",
      "openshift.io/sa.scc.supplemental-groups": "1001580000/10000",
      "openshift.io/sa.scc.uid-range": "1001580000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:18:10Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "cbaab0",
      environment: "prod",
      "kubernetes.io/metadata.name": "cbaab0-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "cbaab0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "570",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "cbaab0-prod",
    resourceVersion: "1747949129",
    uid: "333df9f9-52a9-4fd1-87e3-3fdb356e3241"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Namespace required from operational tools to support our cloud platform apps","openshift.io/display-name":"BCROS OPS (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"cbaab0","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"cbaab0","profile_id":"570","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"cbaab0-test"}}\n',
      "openshift.io/description":
        "Namespace required from operational tools to support our cloud platform apps",
      "openshift.io/display-name": "BCROS OPS (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c15",
      "openshift.io/sa.scc.supplemental-groups": "1001590000/10000",
      "openshift.io/sa.scc.uid-range": "1001590000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:18:10Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "cbaab0",
      environment: "test",
      "kubernetes.io/metadata.name": "cbaab0-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "cbaab0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "570",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "cbaab0-test",
    resourceVersion: "1747949155",
    uid: "0833daa4-26d7-4b8e-a597-9a22c038a35d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patrick.wei@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "pwei1018"}, {"email": "kaine.sparks@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kaineatthelab"}, {"email": "richard.armitage@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rarmitag"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"pwei1018\\"}, {\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kaineatthelab\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rarmitag\\"}]","openshift.io/description":"Namespace required from operational tools to support our cloud platform apps","openshift.io/display-name":"BCROS OPS (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"cbaab0","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"cbaab0","profile_id":"570","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"cbaab0-tools"}}\n',
      "openshift.io/description":
        "Namespace required from operational tools to support our cloud platform apps",
      "openshift.io/display-name": "BCROS OPS (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c0",
      "openshift.io/sa.scc.supplemental-groups": "1001560000/10000",
      "openshift.io/sa.scc.uid-range": "1001560000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-22T17:18:10Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "cbaab0",
      environment: "tools",
      "kubernetes.io/metadata.name": "cbaab0-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "cbaab0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "570",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "cbaab0-tools",
    resourceVersion: "1747949183",
    uid: "6d6e2270-d1e0-427a-ab49-bb7b18e75c18"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tony.stehle@gov.bc.ca", "role": "owner"}, {"email": "pankaj.kathuria@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tony.stehle@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"pankaj.kathuria@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Electronic prescription management capabilities in British Columbia using HTTPS transport and modern OAuth2 authentication and authorization standards.","openshift.io/display-name":"Provincial Prescription Management (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"d027a8","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"HLTH","name":"d027a8","profile_id":"643f08344e483367e61679eb","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d027a8-dev"}}\n',
      "openshift.io/description":
        "Electronic prescription management capabilities in British Columbia using HTTPS transport and modern OAuth2 authentication and authorization standards.",
      "openshift.io/display-name": "Provincial Prescription Management (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c32",
      "openshift.io/sa.scc.supplemental-groups": "1002320000/10000",
      "openshift.io/sa.scc.uid-range": "1002320000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-12T23:11:21Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "d027a8",
      environment: "dev",
      "kubernetes.io/metadata.name": "d027a8-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "HLTH",
      name: "d027a8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "643f08344e483367e61679eb",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d027a8-dev",
    resourceVersion: "1747949233",
    uid: "e608fee6-b048-4a7f-81e0-53d5f235ae66"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tony.stehle@gov.bc.ca", "role": "owner"}, {"email": "pankaj.kathuria@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tony.stehle@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"pankaj.kathuria@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Electronic prescription management capabilities in British Columbia using HTTPS transport and modern OAuth2 authentication and authorization standards.","openshift.io/display-name":"Provincial Prescription Management (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d027a8","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"d027a8","profile_id":"643f08344e483367e61679eb","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d027a8-prod"}}\n',
      "openshift.io/description":
        "Electronic prescription management capabilities in British Columbia using HTTPS transport and modern OAuth2 authentication and authorization standards.",
      "openshift.io/display-name": "Provincial Prescription Management (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c42",
      "openshift.io/sa.scc.supplemental-groups": "1002340000/10000",
      "openshift.io/sa.scc.uid-range": "1002340000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-12T23:11:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d027a8",
      environment: "prod",
      "kubernetes.io/metadata.name": "d027a8-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "d027a8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "643f08344e483367e61679eb",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d027a8-prod",
    resourceVersion: "1747949254",
    uid: "d829faae-cbd0-4d2a-903e-6afe697491d3"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tony.stehle@gov.bc.ca", "role": "owner"}, {"email": "pankaj.kathuria@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tony.stehle@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"pankaj.kathuria@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Electronic prescription management capabilities in British Columbia using HTTPS transport and modern OAuth2 authentication and authorization standards.","openshift.io/display-name":"Provincial Prescription Management (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d027a8","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"d027a8","profile_id":"643f08344e483367e61679eb","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d027a8-test"}}\n',
      "openshift.io/description":
        "Electronic prescription management capabilities in British Columbia using HTTPS transport and modern OAuth2 authentication and authorization standards.",
      "openshift.io/display-name": "Provincial Prescription Management (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c47",
      "openshift.io/sa.scc.supplemental-groups": "1002350000/10000",
      "openshift.io/sa.scc.uid-range": "1002350000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-12T23:11:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d027a8",
      environment: "test",
      "kubernetes.io/metadata.name": "d027a8-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "d027a8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "643f08344e483367e61679eb",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d027a8-test",
    resourceVersion: "1747949280",
    uid: "7cceb2a5-116c-4506-b70c-465b14b68cfb"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tony.stehle@gov.bc.ca", "role": "owner"}, {"email": "pankaj.kathuria@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tony.stehle@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"pankaj.kathuria@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Electronic prescription management capabilities in British Columbia using HTTPS transport and modern OAuth2 authentication and authorization standards.","openshift.io/display-name":"Provincial Prescription Management (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d027a8","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"d027a8","profile_id":"643f08344e483367e61679eb","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d027a8-tools"}}\n',
      "openshift.io/description":
        "Electronic prescription management capabilities in British Columbia using HTTPS transport and modern OAuth2 authentication and authorization standards.",
      "openshift.io/display-name": "Provincial Prescription Management (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c37",
      "openshift.io/sa.scc.supplemental-groups": "1002330000/10000",
      "openshift.io/sa.scc.uid-range": "1002330000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-12T23:11:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d027a8",
      environment: "tools",
      "kubernetes.io/metadata.name": "d027a8-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "d027a8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "643f08344e483367e61679eb",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d027a8-tools",
    resourceVersion: "1747949308",
    uid: "08bd7edc-1cbb-4026-b335-8e87ba97cff0"
  },
  {
    annotations: {
      contacts:
        '[{"email": "kaine.sparks@gov.bc.ca", "role": "owner"}, {"email": "richard.armitage@gov.bc.ca", "role": "lead"}, {"email": "patrick.wei@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A new platform to enable citizens to start and maintain a business as well as manage multiple accounts and business. Access Personal Property Registry, Manufactured Home Registry and other applications.","openshift.io/display-name":"BCROS EDB (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"d2b3d8","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"d2b3d8","profile_id":"641e42f8b066fcf4f3e77676","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"d2b3d8-dev"}}\n',
      "openshift.io/description":
        "A new platform to enable citizens to start and maintain a business as well as manage multiple accounts and business. Access Personal Property Registry, Manufactured Home Registry and other applications.",
      "openshift.io/display-name": "BCROS EDB (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c0",
      "openshift.io/sa.scc.supplemental-groups": "1001190000/10000",
      "openshift.io/sa.scc.uid-range": "1001190000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-21T18:14:39Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "d2b3d8",
      environment: "dev",
      "kubernetes.io/metadata.name": "d2b3d8-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "d2b3d8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42f8b066fcf4f3e77676",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "d2b3d8-dev",
    resourceVersion: "1747949338",
    uid: "9d1192bf-9679-4e23-a4a6-ba557ea57820"
  },
  {
    annotations: {
      contacts:
        '[{"email": "kaine.sparks@gov.bc.ca", "role": "owner"}, {"email": "richard.armitage@gov.bc.ca", "role": "lead"}, {"email": "patrick.wei@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A new platform to enable citizens to start and maintain a business as well as manage multiple accounts and business. Access Personal Property Registry, Manufactured Home Registry and other applications.","openshift.io/display-name":"BCROS EDB (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"d2b3d8","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"d2b3d8","profile_id":"641e42f8b066fcf4f3e77676","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"d2b3d8-prod"}}\n',
      "openshift.io/description":
        "A new platform to enable citizens to start and maintain a business as well as manage multiple accounts and business. Access Personal Property Registry, Manufactured Home Registry and other applications.",
      "openshift.io/display-name": "BCROS EDB (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c24",
      "openshift.io/sa.scc.supplemental-groups": "1001170000/10000",
      "openshift.io/sa.scc.uid-range": "1001170000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-21T18:14:39Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "d2b3d8",
      environment: "prod",
      "kubernetes.io/metadata.name": "d2b3d8-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "d2b3d8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42f8b066fcf4f3e77676",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "d2b3d8-prod",
    resourceVersion: "1747949362",
    uid: "0cfe9f57-7b08-404b-bc83-8f43d23d6218"
  },
  {
    annotations: {
      contacts:
        '[{"email": "kaine.sparks@gov.bc.ca", "role": "owner"}, {"email": "richard.armitage@gov.bc.ca", "role": "lead"}, {"email": "patrick.wei@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A new platform to enable citizens to start and maintain a business as well as manage multiple accounts and business. Access Personal Property Registry, Manufactured Home Registry and other applications.","openshift.io/display-name":"BCROS EDB (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"d2b3d8","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"d2b3d8","profile_id":"641e42f8b066fcf4f3e77676","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"d2b3d8-test"}}\n',
      "openshift.io/description":
        "A new platform to enable citizens to start and maintain a business as well as manage multiple accounts and business. Access Personal Property Registry, Manufactured Home Registry and other applications.",
      "openshift.io/display-name": "BCROS EDB (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001160000/10000",
      "openshift.io/sa.scc.uid-range": "1001160000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-21T18:14:39Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "d2b3d8",
      environment: "test",
      "kubernetes.io/metadata.name": "d2b3d8-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "d2b3d8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42f8b066fcf4f3e77676",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "d2b3d8-test",
    resourceVersion: "1747949385",
    uid: "be8a2647-8631-4801-a85e-808b049130e1"
  },
  {
    annotations: {
      contacts:
        '[{"email": "kaine.sparks@gov.bc.ca", "role": "owner"}, {"email": "richard.armitage@gov.bc.ca", "role": "lead"}, {"email": "patrick.wei@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"kaine.sparks@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"richard.armitage@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"patrick.wei@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A new platform to enable citizens to start and maintain a business as well as manage multiple accounts and business. Access Personal Property Registry, Manufactured Home Registry and other applications.","openshift.io/display-name":"BCROS EDB (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"d2b3d8","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"d2b3d8","profile_id":"641e42f8b066fcf4f3e77676","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"d2b3d8-tools"}}\n',
      "openshift.io/description":
        "A new platform to enable citizens to start and maintain a business as well as manage multiple accounts and business. Access Personal Property Registry, Manufactured Home Registry and other applications.",
      "openshift.io/display-name": "BCROS EDB (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001180000/10000",
      "openshift.io/sa.scc.uid-range": "1001180000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-21T18:14:39Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "d2b3d8",
      environment: "tools",
      "kubernetes.io/metadata.name": "d2b3d8-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "d2b3d8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42f8b066fcf4f3e77676",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "d2b3d8-tools",
    resourceVersion: "1747949412",
    uid: "2f93757c-1501-4991-85fb-b2fd673822ba"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The business goal of the CEIS-CRDP integration is to enable BC-registered divorces to be certified Federally. The general solution approach is enable the CEIS application to publish BC-registered divorces to the CRDP application. The technical approach is to exchange files between CEIS (JAG) and CRDP (DOJ) via the Managed Secure File Transfer (MSFT) service operated by SharedServices Canada (SSC).","openshift.io/display-name":"CSB CEIS CRDP Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"da81c0","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"da81c0","profile_id":"972","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"da81c0-dev"}}\n',
      "openshift.io/description":
        "The business goal of the CEIS-CRDP integration is to enable BC-registered divorces to be certified Federally. The general solution approach is enable the CEIS application to publish BC-registered divorces to the CRDP application. The technical approach is to exchange files between CEIS (JAG) and CRDP (DOJ) via the Managed Secure File Transfer (MSFT) service operated by SharedServices Canada (SSC).",
      "openshift.io/display-name": "CSB CEIS CRDP Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c22",
      "openshift.io/sa.scc.supplemental-groups": "1002300000/10000",
      "openshift.io/sa.scc.uid-range": "1002300000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-20T18:20:17Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "da81c0",
      environment: "dev",
      "kubernetes.io/metadata.name": "da81c0-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "da81c0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "972",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "da81c0-dev",
    resourceVersion: "1747949443",
    uid: "1ffc25dd-3708-4052-a499-983bf9aea51e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The business goal of the CEIS-CRDP integration is to enable BC-registered divorces to be certified Federally. The general solution approach is enable the CEIS application to publish BC-registered divorces to the CRDP application. The technical approach is to exchange files between CEIS (JAG) and CRDP (DOJ) via the Managed Secure File Transfer (MSFT) service operated by SharedServices Canada (SSC).","openshift.io/display-name":"CSB CEIS CRDP Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"da81c0","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"da81c0","profile_id":"972","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"da81c0-prod"}}\n',
      "openshift.io/description":
        "The business goal of the CEIS-CRDP integration is to enable BC-registered divorces to be certified Federally. The general solution approach is enable the CEIS application to publish BC-registered divorces to the CRDP application. The technical approach is to exchange files between CEIS (JAG) and CRDP (DOJ) via the Managed Secure File Transfer (MSFT) service operated by SharedServices Canada (SSC).",
      "openshift.io/display-name": "CSB CEIS CRDP Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c17",
      "openshift.io/sa.scc.supplemental-groups": "1002290000/10000",
      "openshift.io/sa.scc.uid-range": "1002290000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-20T18:20:17Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "da81c0",
      environment: "prod",
      "kubernetes.io/metadata.name": "da81c0-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "da81c0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "972",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "da81c0-prod",
    resourceVersion: "1747949467",
    uid: "6f453038-5302-4acb-b372-acff50267855"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The business goal of the CEIS-CRDP integration is to enable BC-registered divorces to be certified Federally. The general solution approach is enable the CEIS application to publish BC-registered divorces to the CRDP application. The technical approach is to exchange files between CEIS (JAG) and CRDP (DOJ) via the Managed Secure File Transfer (MSFT) service operated by SharedServices Canada (SSC).","openshift.io/display-name":"CSB CEIS CRDP Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"da81c0","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"da81c0","profile_id":"972","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"da81c0-test"}}\n',
      "openshift.io/description":
        "The business goal of the CEIS-CRDP integration is to enable BC-registered divorces to be certified Federally. The general solution approach is enable the CEIS application to publish BC-registered divorces to the CRDP application. The technical approach is to exchange files between CEIS (JAG) and CRDP (DOJ) via the Managed Secure File Transfer (MSFT) service operated by SharedServices Canada (SSC).",
      "openshift.io/display-name": "CSB CEIS CRDP Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c12",
      "openshift.io/sa.scc.supplemental-groups": "1002280000/10000",
      "openshift.io/sa.scc.uid-range": "1002280000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-20T18:20:17Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "da81c0",
      environment: "test",
      "kubernetes.io/metadata.name": "da81c0-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "da81c0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "972",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "da81c0-test",
    resourceVersion: "1747949496",
    uid: "7e428edb-c808-4d23-b3ff-c4ce5204e7c2"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The business goal of the CEIS-CRDP integration is to enable BC-registered divorces to be certified Federally. The general solution approach is enable the CEIS application to publish BC-registered divorces to the CRDP application. The technical approach is to exchange files between CEIS (JAG) and CRDP (DOJ) via the Managed Secure File Transfer (MSFT) service operated by SharedServices Canada (SSC).","openshift.io/display-name":"CSB CEIS CRDP Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"da81c0","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"da81c0","profile_id":"972","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"da81c0-tools"}}\n',
      "openshift.io/description":
        "The business goal of the CEIS-CRDP integration is to enable BC-registered divorces to be certified Federally. The general solution approach is enable the CEIS application to publish BC-registered divorces to the CRDP application. The technical approach is to exchange files between CEIS (JAG) and CRDP (DOJ) via the Managed Secure File Transfer (MSFT) service operated by SharedServices Canada (SSC).",
      "openshift.io/display-name": "CSB CEIS CRDP Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c41,c35",
      "openshift.io/sa.scc.supplemental-groups": "1001710000/10000",
      "openshift.io/sa.scc.uid-range": "1001710000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-20T18:20:17Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "da81c0",
      environment: "tools",
      "kubernetes.io/metadata.name": "da81c0-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "da81c0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "972",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "da81c0-tools",
    resourceVersion: "1747949518",
    uid: "e1756c4f-26cb-4b11-9621-1308400291a1"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patricia.m.white@gov.bc.ca", "role": "owner"}, {"email": "ryan.loiselle@gov.bc.ca", "role": "lead"}, {"email": "stanley.okeke@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"The BC Corrections CMSINT-PAC Integration serves to keep correction\'s client information up to date and consistent between CORNET and the PHSA.","openshift.io/display-name":"BC Corrections CMSINT PAC Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e1a6d6","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"e1a6d6","profile_id":"641e42e3b066fcf4f3e77674","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e1a6d6-dev"}}\n',
      "openshift.io/description":
        "The BC Corrections CMSINT-PAC Integration serves to keep correction's client information up to date and consistent between CORNET and the PHSA.",
      "openshift.io/display-name":
        "BC Corrections CMSINT PAC Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c44",
      "openshift.io/sa.scc.supplemental-groups": "1002440000/10000",
      "openshift.io/sa.scc.uid-range": "1002440000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-11-30T01:23:08Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e1a6d6",
      environment: "dev",
      "kubernetes.io/metadata.name": "e1a6d6-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "e1a6d6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42e3b066fcf4f3e77674",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e1a6d6-dev",
    resourceVersion: "1747949678",
    uid: "7d33f144-91d9-4a28-851b-e5f23127ba40"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patricia.m.white@gov.bc.ca", "role": "owner"}, {"email": "ryan.loiselle@gov.bc.ca", "role": "lead"}, {"email": "stanley.okeke@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"The BC Corrections CMSINT-PAC Integration serves to keep correction\'s client information up to date and consistent between CORNET and the PHSA.","openshift.io/display-name":"BC Corrections CMSINT PAC Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e1a6d6","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"e1a6d6","profile_id":"641e42e3b066fcf4f3e77674","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e1a6d6-prod"}}\n',
      "openshift.io/description":
        "The BC Corrections CMSINT-PAC Integration serves to keep correction's client information up to date and consistent between CORNET and the PHSA.",
      "openshift.io/display-name":
        "BC Corrections CMSINT PAC Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c34",
      "openshift.io/sa.scc.supplemental-groups": "1002420000/10000",
      "openshift.io/sa.scc.uid-range": "1002420000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-11-30T01:23:08Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e1a6d6",
      environment: "prod",
      "kubernetes.io/metadata.name": "e1a6d6-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "e1a6d6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42e3b066fcf4f3e77674",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e1a6d6-prod",
    resourceVersion: "1747949701",
    uid: "27a74715-733e-44ef-a9d5-46cc3792396f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patricia.m.white@gov.bc.ca", "role": "owner"}, {"email": "ryan.loiselle@gov.bc.ca", "role": "lead"}, {"email": "stanley.okeke@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"The BC Corrections CMSINT-PAC Integration serves to keep correction\'s client information up to date and consistent between CORNET and the PHSA.","openshift.io/display-name":"BC Corrections CMSINT PAC Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e1a6d6","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"e1a6d6","profile_id":"641e42e3b066fcf4f3e77674","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e1a6d6-test"}}\n',
      "openshift.io/description":
        "The BC Corrections CMSINT-PAC Integration serves to keep correction's client information up to date and consistent between CORNET and the PHSA.",
      "openshift.io/display-name":
        "BC Corrections CMSINT PAC Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c39",
      "openshift.io/sa.scc.supplemental-groups": "1002430000/10000",
      "openshift.io/sa.scc.uid-range": "1002430000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-11-30T01:23:08Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e1a6d6",
      environment: "test",
      "kubernetes.io/metadata.name": "e1a6d6-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "e1a6d6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42e3b066fcf4f3e77674",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e1a6d6-test",
    resourceVersion: "1747949740",
    uid: "f924be61-7ea1-429d-9793-9e47a421295f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "patricia.m.white@gov.bc.ca", "role": "owner"}, {"email": "ryan.loiselle@gov.bc.ca", "role": "lead"}, {"email": "stanley.okeke@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"The BC Corrections CMSINT-PAC Integration serves to keep correction\'s client information up to date and consistent between CORNET and the PHSA.","openshift.io/display-name":"BC Corrections CMSINT PAC Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e1a6d6","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"e1a6d6","profile_id":"641e42e3b066fcf4f3e77674","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e1a6d6-tools"}}\n',
      "openshift.io/description":
        "The BC Corrections CMSINT-PAC Integration serves to keep correction's client information up to date and consistent between CORNET and the PHSA.",
      "openshift.io/display-name":
        "BC Corrections CMSINT PAC Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c29",
      "openshift.io/sa.scc.supplemental-groups": "1002410000/10000",
      "openshift.io/sa.scc.uid-range": "1002410000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-11-30T01:23:08Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e1a6d6",
      environment: "tools",
      "kubernetes.io/metadata.name": "e1a6d6-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "e1a6d6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e42e3b066fcf4f3e77674",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e1a6d6-tools",
    resourceVersion: "1747949766",
    uid: "b10ce047-351e-444c-a49c-b07e5193763d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Prosecution Services (BCPS) Digital Evidence Management System (DEMS) is a set of products within the broader DEMS ecosystem. In particular this set of namespaces will host Identity and Access Management related solutions.","openshift.io/display-name":"BCPS DEMS (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e27db1","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"e27db1","profile_id":"733","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-32"},"name":"e27db1-dev"}}\n',
      "openshift.io/description":
        "The BC Prosecution Services (BCPS) Digital Evidence Management System (DEMS) is a set of products within the broader DEMS ecosystem. In particular this set of namespaces will host Identity and Access Management related solutions.",
      "openshift.io/display-name": "BCPS DEMS (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c14",
      "openshift.io/sa.scc.supplemental-groups": "1002190000/10000",
      "openshift.io/sa.scc.uid-range": "1002190000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-19T18:31:12Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e27db1",
      environment: "dev",
      "kubernetes.io/metadata.name": "e27db1-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "e27db1",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "733",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-32"
    },
    name: "e27db1-dev",
    resourceVersion: "1747949790",
    uid: "eb73413b-eb43-475c-a701-974d0227c950"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Prosecution Services (BCPS) Digital Evidence Management System (DEMS) is a set of products within the broader DEMS ecosystem. In particular this set of namespaces will host Identity and Access Management related solutions.","openshift.io/display-name":"BCPS DEMS (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"e27db1","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"e27db1","profile_id":"733","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e27db1-prod"}}\n',
      "openshift.io/description":
        "The BC Prosecution Services (BCPS) Digital Evidence Management System (DEMS) is a set of products within the broader DEMS ecosystem. In particular this set of namespaces will host Identity and Access Management related solutions.",
      "openshift.io/display-name": "BCPS DEMS (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c29",
      "openshift.io/sa.scc.supplemental-groups": "1002220000/10000",
      "openshift.io/sa.scc.uid-range": "1002220000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-19T18:31:12Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "e27db1",
      environment: "prod",
      "kubernetes.io/metadata.name": "e27db1-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "e27db1",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "733",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e27db1-prod",
    resourceVersion: "1747949822",
    uid: "2f5a4a1e-e89a-4002-93fb-04c55266cb85"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Prosecution Services (BCPS) Digital Evidence Management System (DEMS) is a set of products within the broader DEMS ecosystem. In particular this set of namespaces will host Identity and Access Management related solutions.","openshift.io/display-name":"BCPS DEMS (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e27db1","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"e27db1","profile_id":"733","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e27db1-test"}}\n',
      "openshift.io/description":
        "The BC Prosecution Services (BCPS) Digital Evidence Management System (DEMS) is a set of products within the broader DEMS ecosystem. In particular this set of namespaces will host Identity and Access Management related solutions.",
      "openshift.io/display-name": "BCPS DEMS (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c19",
      "openshift.io/sa.scc.supplemental-groups": "1002200000/10000",
      "openshift.io/sa.scc.uid-range": "1002200000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-19T18:31:12Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e27db1",
      environment: "test",
      "kubernetes.io/metadata.name": "e27db1-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "e27db1",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "733",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e27db1-test",
    resourceVersion: "1747949842",
    uid: "ad69b571-ae6b-4ae6-a986-b47f9cb4d4bf"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The BC Prosecution Services (BCPS) Digital Evidence Management System (DEMS) is a set of products within the broader DEMS ecosystem. In particular this set of namespaces will host Identity and Access Management related solutions.","openshift.io/display-name":"BCPS DEMS (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"e27db1","environment":"tools","memory_quota":"memory-request-4-limit-8","ministry_id":"AG","name":"e27db1","profile_id":"733","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-32"},"name":"e27db1-tools"}}\n',
      "openshift.io/description":
        "The BC Prosecution Services (BCPS) Digital Evidence Management System (DEMS) is a set of products within the broader DEMS ecosystem. In particular this set of namespaces will host Identity and Access Management related solutions.",
      "openshift.io/display-name": "BCPS DEMS (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c24",
      "openshift.io/sa.scc.supplemental-groups": "1002210000/10000",
      "openshift.io/sa.scc.uid-range": "1002210000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-05-19T18:31:12Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "e27db1",
      environment: "tools",
      "kubernetes.io/metadata.name": "e27db1-tools",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "AG",
      name: "e27db1",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "733",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-32"
    },
    name: "e27db1-tools",
    resourceVersion: "1747949874",
    uid: "b8b1584f-bb20-453c-850e-41d2f1a751df"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zorin.samji@gov.bc.ca", "role": "owner"}, {"email": "nithinshekar.kuruba@gov.bc.ca", "role": "lead"}, {"email": "jonathan.sharman@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"need an environment where we can link our CSS App TEST in a sandbox","openshift.io/display-name":"SSO CSS App SANDBOX (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"e4ca1d","environment":"dev","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"e4ca1d","profile_id":"641e2b76859947734a609c86","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e4ca1d-dev"}}\n',
      "openshift.io/description":
        "need an environment where we can link our CSS App TEST in a sandbox",
      "openshift.io/display-name": "SSO CSS App SANDBOX (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c0",
      "openshift.io/sa.scc.supplemental-groups": "1002450000/10000",
      "openshift.io/sa.scc.uid-range": "1002450000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-30T18:54:53Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "e4ca1d",
      environment: "dev",
      "kubernetes.io/metadata.name": "e4ca1d-dev",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "e4ca1d",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e2b76859947734a609c86",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e4ca1d-dev",
    resourceVersion: "1747949901",
    uid: "14b7eeba-fbcb-43cc-adba-54d827602f80"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zorin.samji@gov.bc.ca", "role": "owner"}, {"email": "nithinshekar.kuruba@gov.bc.ca", "role": "lead"}, {"email": "jonathan.sharman@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"need an environment where we can link our CSS App TEST in a sandbox","openshift.io/display-name":"SSO CSS App SANDBOX (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"e4ca1d","environment":"prod","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"e4ca1d","profile_id":"641e2b76859947734a609c86","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e4ca1d-prod"}}\n',
      "openshift.io/description":
        "need an environment where we can link our CSS App TEST in a sandbox",
      "openshift.io/display-name": "SSO CSS App SANDBOX (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c40",
      "openshift.io/sa.scc.supplemental-groups": "1002530000/10000",
      "openshift.io/sa.scc.uid-range": "1002530000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-30T18:54:53Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "e4ca1d",
      environment: "prod",
      "kubernetes.io/metadata.name": "e4ca1d-prod",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "e4ca1d",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e2b76859947734a609c86",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e4ca1d-prod",
    resourceVersion: "1747949946",
    uid: "40d50700-1f7e-4c32-8336-c64e76d88474"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zorin.samji@gov.bc.ca", "role": "owner"}, {"email": "nithinshekar.kuruba@gov.bc.ca", "role": "lead"}, {"email": "jonathan.sharman@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"need an environment where we can link our CSS App TEST in a sandbox","openshift.io/display-name":"SSO CSS App SANDBOX (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"e4ca1d","environment":"test","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"e4ca1d","profile_id":"641e2b76859947734a609c86","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e4ca1d-test"}}\n',
      "openshift.io/description":
        "need an environment where we can link our CSS App TEST in a sandbox",
      "openshift.io/display-name": "SSO CSS App SANDBOX (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c35",
      "openshift.io/sa.scc.supplemental-groups": "1002520000/10000",
      "openshift.io/sa.scc.uid-range": "1002520000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-30T18:54:53Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "e4ca1d",
      environment: "test",
      "kubernetes.io/metadata.name": "e4ca1d-test",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "e4ca1d",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e2b76859947734a609c86",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e4ca1d-test",
    resourceVersion: "1747949970",
    uid: "07c348c2-4db8-4455-9ef2-f8a10c6cd3c1"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zorin.samji@gov.bc.ca", "role": "owner"}, {"email": "nithinshekar.kuruba@gov.bc.ca", "role": "lead"}, {"email": "jonathan.sharman@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"need an environment where we can link our CSS App TEST in a sandbox","openshift.io/display-name":"SSO CSS App SANDBOX (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"e4ca1d","environment":"tools","memory_quota":"memory-request-8-limit-16","ministry_id":"CITZ","name":"e4ca1d","profile_id":"641e2b76859947734a609c86","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"e4ca1d-tools"}}\n',
      "openshift.io/description":
        "need an environment where we can link our CSS App TEST in a sandbox",
      "openshift.io/display-name": "SSO CSS App SANDBOX (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c5",
      "openshift.io/sa.scc.supplemental-groups": "1002460000/10000",
      "openshift.io/sa.scc.uid-range": "1002460000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-30T18:54:53Z",
    labels: {
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "e4ca1d",
      environment: "tools",
      "kubernetes.io/metadata.name": "e4ca1d-tools",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "CITZ",
      name: "e4ca1d",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "641e2b76859947734a609c86",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "e4ca1d-tools",
    resourceVersion: "1747949992",
    uid: "979474cc-c0a5-41ad-9c0c-9cc4df7df6a9"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "glenn.mahoney@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"glenn.mahoney@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The AG PSSG ISB DevOps LAB GOLD is a set of namespace for the sector to use to complete testing, demos, RnD, POC, experiment and discover in an environment that does not contain citizen facing applications or PI data using the OCP Gold cluster. As this is a LAB space for the sector we will potentially connect or consume a variety of services over time.","openshift.io/display-name":"AG PSSG ISB DevOps LAB GOLD (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e84410","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"e84410","profile_id":"577","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e84410-dev"}}\n',
      "openshift.io/description":
        "The AG PSSG ISB DevOps LAB GOLD is a set of namespace for the sector to use to complete testing, demos, RnD, POC, experiment and discover in an environment that does not contain citizen facing applications or PI data using the OCP Gold cluster. As this is a LAB space for the sector we will potentially connect or consume a variety of services over time.",
      "openshift.io/display-name": "AG PSSG ISB DevOps LAB GOLD (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c33,c27",
      "openshift.io/sa.scc.supplemental-groups": "1001110000/10000",
      "openshift.io/sa.scc.uid-range": "1001110000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:14:23Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e84410",
      environment: "dev",
      "kubernetes.io/metadata.name": "e84410-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "e84410",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "577",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e84410-dev",
    resourceVersion: "1747950016",
    uid: "bf98db00-074b-4fea-a72b-fff8abe1f514"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "glenn.mahoney@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"glenn.mahoney@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The AG PSSG ISB DevOps LAB GOLD is a set of namespace for the sector to use to complete testing, demos, RnD, POC, experiment and discover in an environment that does not contain citizen facing applications or PI data using the OCP Gold cluster. As this is a LAB space for the sector we will potentially connect or consume a variety of services over time.","openshift.io/display-name":"AG PSSG ISB DevOps LAB GOLD (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e84410","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"e84410","profile_id":"577","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e84410-prod"}}\n',
      "openshift.io/description":
        "The AG PSSG ISB DevOps LAB GOLD is a set of namespace for the sector to use to complete testing, demos, RnD, POC, experiment and discover in an environment that does not contain citizen facing applications or PI data using the OCP Gold cluster. As this is a LAB space for the sector we will potentially connect or consume a variety of services over time.",
      "openshift.io/display-name": "AG PSSG ISB DevOps LAB GOLD (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c9",
      "openshift.io/sa.scc.supplemental-groups": "1001140000/10000",
      "openshift.io/sa.scc.uid-range": "1001140000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:14:23Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e84410",
      environment: "prod",
      "kubernetes.io/metadata.name": "e84410-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "e84410",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "577",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e84410-prod",
    resourceVersion: "1747950040",
    uid: "f9df2184-d44c-4730-a5ae-2073cd8aeb16"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "glenn.mahoney@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"glenn.mahoney@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The AG PSSG ISB DevOps LAB GOLD is a set of namespace for the sector to use to complete testing, demos, RnD, POC, experiment and discover in an environment that does not contain citizen facing applications or PI data using the OCP Gold cluster. As this is a LAB space for the sector we will potentially connect or consume a variety of services over time.","openshift.io/display-name":"AG PSSG ISB DevOps LAB GOLD (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e84410","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"e84410","profile_id":"577","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e84410-test"}}\n',
      "openshift.io/description":
        "The AG PSSG ISB DevOps LAB GOLD is a set of namespace for the sector to use to complete testing, demos, RnD, POC, experiment and discover in an environment that does not contain citizen facing applications or PI data using the OCP Gold cluster. As this is a LAB space for the sector we will potentially connect or consume a variety of services over time.",
      "openshift.io/display-name": "AG PSSG ISB DevOps LAB GOLD (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c33,c32",
      "openshift.io/sa.scc.supplemental-groups": "1001120000/10000",
      "openshift.io/sa.scc.uid-range": "1001120000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:14:23Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e84410",
      environment: "test",
      "kubernetes.io/metadata.name": "e84410-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "e84410",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "577",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e84410-test",
    resourceVersion: "1747950068",
    uid: "086465a4-9d84-41a5-8db4-4134017a32fb"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "stanley.okeke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "sookeke"}, {"email": "glenn.mahoney@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"stanley.okeke@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"sookeke\\"}, {\\"email\\": \\"glenn.mahoney@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"The AG PSSG ISB DevOps LAB GOLD is a set of namespace for the sector to use to complete testing, demos, RnD, POC, experiment and discover in an environment that does not contain citizen facing applications or PI data using the OCP Gold cluster. As this is a LAB space for the sector we will potentially connect or consume a variety of services over time.","openshift.io/display-name":"AG PSSG ISB DevOps LAB GOLD (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e84410","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"e84410","profile_id":"577","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e84410-tools"}}\n',
      "openshift.io/description":
        "The AG PSSG ISB DevOps LAB GOLD is a set of namespace for the sector to use to complete testing, demos, RnD, POC, experiment and discover in an environment that does not contain citizen facing applications or PI data using the OCP Gold cluster. As this is a LAB space for the sector we will potentially connect or consume a variety of services over time.",
      "openshift.io/display-name": "AG PSSG ISB DevOps LAB GOLD (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c4",
      "openshift.io/sa.scc.supplemental-groups": "1001130000/10000",
      "openshift.io/sa.scc.uid-range": "1001130000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-18T22:14:23Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e84410",
      environment: "tools",
      "kubernetes.io/metadata.name": "e84410-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "e84410",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "577",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e84410-tools",
    resourceVersion: "1747950093",
    uid: "847ab509-5d9e-4111-b13f-e10714f07a61"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steve.m.howard@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "stevemhoward"}, {"email": "sid.tobias@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "sidtobias"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steve.m.howard@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"stevemhoward\\"}, {\\"email\\": \\"sid.tobias@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"sidtobias\\"}]","openshift.io/description":"A common component for public engagement starting with EAO, EMLI and GDX.","openshift.io/display-name":"Modern Engagement Tools (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"e903c2","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"EAO","name":"e903c2","profile_id":"708","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"e903c2-dev"}}\n',
      "openshift.io/description":
        "A common component for public engagement starting with EAO, EMLI and GDX.",
      "openshift.io/display-name": "Modern Engagement Tools (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c5",
      "openshift.io/sa.scc.supplemental-groups": "1002080000/10000",
      "openshift.io/sa.scc.uid-range": "1002080000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-13T19:19:44Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "e903c2",
      environment: "dev",
      "kubernetes.io/metadata.name": "e903c2-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "EAO",
      name: "e903c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "708",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "e903c2-dev",
    resourceVersion: "1747950119",
    uid: "4d4fd105-19d9-42f7-ad84-a93d013ed8e8"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steve.m.howard@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "stevemhoward"}, {"email": "sid.tobias@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "sidtobias"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steve.m.howard@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"stevemhoward\\"}, {\\"email\\": \\"sid.tobias@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"sidtobias\\"}]","openshift.io/description":"A common component for public engagement starting with EAO, EMLI and GDX.","openshift.io/display-name":"Modern Engagement Tools (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"e903c2","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"EAO","name":"e903c2","profile_id":"708","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"e903c2-prod"}}\n',
      "openshift.io/description":
        "A common component for public engagement starting with EAO, EMLI and GDX.",
      "openshift.io/display-name": "Modern Engagement Tools (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c40",
      "openshift.io/sa.scc.supplemental-groups": "1002060000/10000",
      "openshift.io/sa.scc.uid-range": "1002060000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-13T19:19:44Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "e903c2",
      environment: "prod",
      "kubernetes.io/metadata.name": "e903c2-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "EAO",
      name: "e903c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "708",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "e903c2-prod",
    resourceVersion: "1747950141",
    uid: "e76781e8-8668-4082-91cc-bfeb0eb3a811"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steve.m.howard@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "stevemhoward"}, {"email": "sid.tobias@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "sidtobias"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steve.m.howard@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"stevemhoward\\"}, {\\"email\\": \\"sid.tobias@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"sidtobias\\"}]","openshift.io/description":"A common component for public engagement starting with EAO, EMLI and GDX.","openshift.io/display-name":"Modern Engagement Tools (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"e903c2","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"EAO","name":"e903c2","profile_id":"708","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"e903c2-test"}}\n',
      "openshift.io/description":
        "A common component for public engagement starting with EAO, EMLI and GDX.",
      "openshift.io/display-name": "Modern Engagement Tools (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c0",
      "openshift.io/sa.scc.supplemental-groups": "1002070000/10000",
      "openshift.io/sa.scc.uid-range": "1002070000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-13T19:19:44Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "e903c2",
      environment: "test",
      "kubernetes.io/metadata.name": "e903c2-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "EAO",
      name: "e903c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "708",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "e903c2-test",
    resourceVersion: "1747950173",
    uid: "f261cb1f-89f8-4e10-a1f5-04520a50d70c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steve.m.howard@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "stevemhoward"}, {"email": "sid.tobias@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "sidtobias"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steve.m.howard@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"stevemhoward\\"}, {\\"email\\": \\"sid.tobias@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"sidtobias\\"}]","openshift.io/description":"A common component for public engagement starting with EAO, EMLI and GDX.","openshift.io/display-name":"Modern Engagement Tools (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"e903c2","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"EAO","name":"e903c2","profile_id":"708","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"e903c2-tools"}}\n',
      "openshift.io/description":
        "A common component for public engagement starting with EAO, EMLI and GDX.",
      "openshift.io/display-name": "Modern Engagement Tools (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c35",
      "openshift.io/sa.scc.supplemental-groups": "1002050000/10000",
      "openshift.io/sa.scc.uid-range": "1002050000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-13T19:19:44Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "e903c2",
      environment: "tools",
      "kubernetes.io/metadata.name": "e903c2-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "EAO",
      name: "e903c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "708",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "e903c2-tools",
    resourceVersion: "1747950206",
    uid: "c0516c16-fb9c-44a5-81e9-240111b650ba"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CSB Role Registry Integration is part of Court Services Online serving as an integration point to access what roles applications and individuals are permitted.","openshift.io/display-name":"CSB Role Registry Integration (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e97df9","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"e97df9","profile_id":"609","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e97df9-dev"}}\n',
      "openshift.io/description":
        "CSB Role Registry Integration is part of Court Services Online serving as an integration point to access what roles applications and individuals are permitted.",
      "openshift.io/display-name": "CSB Role Registry Integration (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c17",
      "openshift.io/sa.scc.supplemental-groups": "1001840000/10000",
      "openshift.io/sa.scc.uid-range": "1001840000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T17:08:42Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e97df9",
      environment: "dev",
      "kubernetes.io/metadata.name": "e97df9-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "e97df9",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "609",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e97df9-dev",
    resourceVersion: "1747950235",
    uid: "6f64fe83-d0f4-4fa8-9541-3d1e339b30e8"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CSB Role Registry Integration is part of Court Services Online serving as an integration point to access what roles applications and individuals are permitted.","openshift.io/display-name":"CSB Role Registry Integration (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e97df9","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"e97df9","profile_id":"609","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e97df9-prod"}}\n',
      "openshift.io/description":
        "CSB Role Registry Integration is part of Court Services Online serving as an integration point to access what roles applications and individuals are permitted.",
      "openshift.io/display-name": "CSB Role Registry Integration (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c27",
      "openshift.io/sa.scc.supplemental-groups": "1001860000/10000",
      "openshift.io/sa.scc.uid-range": "1001860000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T17:08:42Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e97df9",
      environment: "prod",
      "kubernetes.io/metadata.name": "e97df9-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "e97df9",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "609",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e97df9-prod",
    resourceVersion: "1747950258",
    uid: "cf87f3d3-cee2-4663-bddb-016f6a26c931"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CSB Role Registry Integration is part of Court Services Online serving as an integration point to access what roles applications and individuals are permitted.","openshift.io/display-name":"CSB Role Registry Integration (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e97df9","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"e97df9","profile_id":"609","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e97df9-test"}}\n',
      "openshift.io/description":
        "CSB Role Registry Integration is part of Court Services Online serving as an integration point to access what roles applications and individuals are permitted.",
      "openshift.io/display-name": "CSB Role Registry Integration (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c22",
      "openshift.io/sa.scc.supplemental-groups": "1001850000/10000",
      "openshift.io/sa.scc.uid-range": "1001850000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T17:08:42Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e97df9",
      environment: "test",
      "kubernetes.io/metadata.name": "e97df9-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "e97df9",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "609",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e97df9-test",
    resourceVersion: "1747950283",
    uid: "47dfd780-73ae-49db-bf35-c84162bc69c0"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "patricia.m.white@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"patricia.m.white@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"CSB Role Registry Integration is part of Court Services Online serving as an integration point to access what roles applications and individuals are permitted.","openshift.io/display-name":"CSB Role Registry Integration (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e97df9","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"e97df9","profile_id":"609","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e97df9-tools"}}\n',
      "openshift.io/description":
        "CSB Role Registry Integration is part of Court Services Online serving as an integration point to access what roles applications and individuals are permitted.",
      "openshift.io/display-name": "CSB Role Registry Integration (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c32",
      "openshift.io/sa.scc.supplemental-groups": "1001870000/10000",
      "openshift.io/sa.scc.uid-range": "1001870000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T17:08:42Z",
    labels: {
      alliance: "JAG",
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e97df9",
      environment: "tools",
      "kubernetes.io/metadata.name": "e97df9-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "e97df9",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "609",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e97df9-tools",
    resourceVersion: "1747950307",
    uid: "16d0de8c-39ea-4faf-94cb-548f25e78366"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nithinshekar.kuruba@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "NithinKuruba"}, {"email": "jonathan.sharman@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "thegentlemanphysicist"}, {"email": "zorin.samji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "zsamji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"NithinKuruba\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"thegentlemanphysicist\\"}, {\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"zsamji\\"}]","openshift.io/description":"This is for the Pathfinder SSO Keycloak instance on GOLD","openshift.io/display-name":"OIDCSSO (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"eb75ad","environment":"dev","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"eb75ad","profile_id":"613","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"eb75ad-dev"}}\n',
      "openshift.io/description":
        "This is for the Pathfinder SSO Keycloak instance on GOLD",
      "openshift.io/display-name": "OIDCSSO (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c24",
      "openshift.io/sa.scc.supplemental-groups": "1001940000/10000",
      "openshift.io/sa.scc.uid-range": "1001940000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T22:47:43Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "eb75ad",
      environment: "dev",
      "kubernetes.io/metadata.name": "eb75ad-dev",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "eb75ad",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "613",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "eb75ad-dev",
    resourceVersion: "1747950335",
    uid: "44eff169-d591-4b9a-a3d9-e599d82e8476"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nithinshekar.kuruba@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "NithinKuruba"}, {"email": "jonathan.sharman@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "thegentlemanphysicist"}, {"email": "zorin.samji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "zsamji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"NithinKuruba\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"thegentlemanphysicist\\"}, {\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"zsamji\\"}]","openshift.io/description":"This is for the Pathfinder SSO Keycloak instance on GOLD","openshift.io/display-name":"OIDCSSO (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-16-limit-32","devops.gov.bc.ca/gitops-app":"eb75ad","environment":"prod","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"eb75ad","profile_id":"613","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-256"},"name":"eb75ad-prod"}}\n',
      "openshift.io/description":
        "This is for the Pathfinder SSO Keycloak instance on GOLD",
      "openshift.io/display-name": "OIDCSSO (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c14",
      "openshift.io/sa.scc.supplemental-groups": "1001920000/10000",
      "openshift.io/sa.scc.uid-range": "1001920000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T22:47:43Z",
    labels: {
      cpu_quota: "cpu-request-16-limit-32",
      "devops.gov.bc.ca/gitops-app": "eb75ad",
      environment: "prod",
      "kubernetes.io/metadata.name": "eb75ad-prod",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "eb75ad",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "613",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-256"
    },
    name: "eb75ad-prod",
    resourceVersion: "1747950355",
    uid: "36089ef3-0d42-48bd-b809-ac3b9aa9cb3b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nithinshekar.kuruba@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "NithinKuruba"}, {"email": "jonathan.sharman@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "thegentlemanphysicist"}, {"email": "zorin.samji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "zsamji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"NithinKuruba\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"thegentlemanphysicist\\"}, {\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"zsamji\\"}]","openshift.io/description":"This is for the Pathfinder SSO Keycloak instance on GOLD","openshift.io/display-name":"OIDCSSO (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"eb75ad","environment":"test","memory_quota":"memory-request-32-limit-64","ministry_id":"CITZ","name":"eb75ad","profile_id":"613","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"eb75ad-test"}}\n',
      "openshift.io/description":
        "This is for the Pathfinder SSO Keycloak instance on GOLD",
      "openshift.io/display-name": "OIDCSSO (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001950000/10000",
      "openshift.io/sa.scc.uid-range": "1001950000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T22:47:43Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "eb75ad",
      environment: "test",
      "kubernetes.io/metadata.name": "eb75ad-test",
      memory_quota: "memory-request-32-limit-64",
      ministry_id: "CITZ",
      name: "eb75ad",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "613",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "eb75ad-test",
    resourceVersion: "1747950381",
    uid: "6cac4ff3-3b83-4971-8570-e1b6938a288c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nithinshekar.kuruba@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "NithinKuruba"}, {"email": "jonathan.sharman@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "thegentlemanphysicist"}, {"email": "zorin.samji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "zsamji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nithinshekar.kuruba@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"NithinKuruba\\"}, {\\"email\\": \\"jonathan.sharman@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"thegentlemanphysicist\\"}, {\\"email\\": \\"zorin.samji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"zsamji\\"}]","openshift.io/description":"This is for the Pathfinder SSO Keycloak instance on GOLD","openshift.io/display-name":"OIDCSSO (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-1-limit-2","devops.gov.bc.ca/gitops-app":"eb75ad","environment":"tools","memory_quota":"memory-request-8-limit-16","ministry_id":"CITZ","name":"eb75ad","profile_id":"613","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-32"},"name":"eb75ad-tools"}}\n',
      "openshift.io/description":
        "This is for the Pathfinder SSO Keycloak instance on GOLD",
      "openshift.io/display-name": "OIDCSSO (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001930000/10000",
      "openshift.io/sa.scc.uid-range": "1001930000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-01-05T22:47:43Z",
    labels: {
      cpu_quota: "cpu-request-1-limit-2",
      "devops.gov.bc.ca/gitops-app": "eb75ad",
      environment: "tools",
      "kubernetes.io/metadata.name": "eb75ad-tools",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "CITZ",
      name: "eb75ad",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.10.0",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "613",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-32"
    },
    name: "eb75ad-tools",
    resourceVersion: "1747950398",
    uid: "566607c9-4682-422d-9bfd-42d9c59c3b82"
  }
];

module.exports = {
  data
};
