# Omnia Cli

Omnia Cli is a dotnet tool that manages everything from Development to Production in Omnia Cloud. It helps you build new extensions and has item templates that covers different aspects of the Omnia Platform. It also helps you deploy extensions to tenants and support different management operations on tenants in the Omnia Cloud. If you have any feature requests or you found a bug please submit an issue on the issues section on this Github repo.

# Installation
[How to install Omnia Cli](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/prerequisites#omnia-cli)

---

<!-- TOC -->

- [Omnia Cli](#omnia-cli)
- [Installation](#installation)
- [Versioning Reference](#versioning-reference)
- [Omnia Dev Commands](#omnia-dev-commands)
  - [omnia dev new](#omnia-dev-new)
        - [Example Install Templates](#example-install-templates)
        - [Required Parameters](#required-parameters)
        - [Optional Parameters](#optional-parameters)
        - [Example List Templates](#example-list-templates)
        - [Required Parameters](#required-parameters-1)
        - [Optional Parameters](#optional-parameters-1)
        - [Example Create Using Template](#example-create-using-template)
        - [Required Parameters](#required-parameters-2)
        - [Optional Parameters](#optional-parameters-2)
  - [omnia dev publish](#omnia-dev-publish)
        - [Example](#example)
        - [Required Parameters](#required-parameters-3)
        - [Optional Parameters](#optional-parameters-3)
  - [omnia dev restore](#omnia-dev-restore)
        - [Example](#example-1)
        - [Required Parameters](#required-parameters-4)
        - [Optional Parameters](#optional-parameters-4)
  - [omnia dev pack](#omnia-dev-pack)
        - [Example](#example-2)
        - [Required Parameters](#required-parameters-5)
        - [Optional Parameters](#optional-parameters-5)
  - [omnia dev add](#omnia-dev-add)
        - [Example Adding new Omnia Fx](#example-adding-new-omnia-fx)
        - [Required Parameters](#required-parameters-6)
        - [Optional Parameters](#optional-parameters-6)
        - [Other Examples](#other-examples)
  - [omnia dev update](#omnia-dev-update)
        - [Example Updating to new official version](#example-updating-to-new-official-version)
        - [Required Parameters](#required-parameters-7)
        - [Optional Parameters](#optional-parameters-7)
        - [Example Updating to locally created nuget package version](#example-updating-to-locally-created-nuget-package-version)
        - [Required Parameters](#required-parameters-8)
        - [Optional Parameters](#optional-parameters-8)
  - [omnia dev appsettings get](#omnia-dev-appsettings-get)
        - [Example](#example-3)
        - [Required Parameters](#required-parameters-9)
        - [Optional Parameters](#optional-parameters-9)
- [Omnia Dev Dependencies Commands](#omnia-dev-dependencies-commands)
  - [omnia dev dependencies list](#omnia-dev-dependencies-list)
        - [Example](#example-4)
        - [Required Parameters](#required-parameters-10)
        - [Optional Parameters](#optional-parameters-10)
  - [omnia dev dependencies add](#omnia-dev-dependencies-add)
        - [Example](#example-5)
        - [Required Parameters](#required-parameters-11)
        - [Optional Parameters](#optional-parameters-11)
  - [omnia dev dependencies update](#omnia-dev-dependencies-update)
        - [Example](#example-6)
        - [Required Parameters](#required-parameters-12)
        - [Optional Parameters](#optional-parameters-12)
  - [omnia dev dependencies remove](#omnia-dev-dependencies-remove)
        - [Example](#example-7)
        - [Required Parameters](#required-parameters-13)
        - [Optional Parameters](#optional-parameters-13)
- [Omnia Dev TemplateInfos Commands](#omnia-dev-templateinfos-commands)
  - [omnia dev templateinfos list](#omnia-dev-templateinfos-list)
        - [Example](#example-8)
        - [Required Parameters](#required-parameters-14)
        - [Optional Parameters](#optional-parameters-14)
  - [omnia dev templateinfos add](#omnia-dev-templateinfos-add)
        - [Example](#example-9)
        - [Required Parameters](#required-parameters-15)
        - [Optional Parameters](#optional-parameters-15)
  - [omnia dev templateinfos update](#omnia-dev-templateinfos-update)
        - [Example](#example-10)
        - [Required Parameters](#required-parameters-16)
        - [Optional Parameters](#optional-parameters-16)
  - [omnia dev templateinfos remove](#omnia-dev-templateinfos-remove)
        - [Example](#example-11)
        - [Required Parameters](#required-parameters-17)
        - [Optional Parameters](#optional-parameters-17)
- [Omnia Cloud Login](#omnia-cloud-login)
  - [omnia login](#omnia-login)
        - [Example](#example-12)
        - [Required Parameters](#required-parameters-18)
        - [Optional Parameters](#optional-parameters-18)
  - [omnia logout](#omnia-logout)
        - [Example](#example-13)
        - [Required Parameters](#required-parameters-19)
        - [Optional Parameters](#optional-parameters-19)
- [Tenant Commands](#tenant-commands)
  - [omnia tenants new](#omnia-tenants-new)
        - [Example](#example-14)
        - [Required Parameters](#required-parameters-20)
        - [Optional Parameters](#optional-parameters-20)
  - [omnia tenants list](#omnia-tenants-list)
        - [Example](#example-15)
        - [Required Parameters](#required-parameters-21)
        - [Optional Parameters](#optional-parameters-21)
  - [omnia tenants update enablerror](#omnia-tenants-update-enablerror)
        - [Example](#example-16)
        - [Required Parameters](#required-parameters-22)
        - [Optional Parameters](#optional-parameters-22)
  - [omnia tenants update disableerror](#omnia-tenants-update-disableerror)
        - [Example](#example-17)
        - [Required Parameters](#required-parameters-23)
        - [Optional Parameters](#optional-parameters-23)
  - [omnia tenants update customerrorpage](#omnia-tenants-update-customerrorpage)
        - [Example](#example-18)
        - [Required Parameters](#required-parameters-24)
        - [Optional Parameters](#optional-parameters-24)
  - [omnia tenants update kaizala](#omnia-tenants-update-kaizala)
        - [Example](#example-19)
        - [Required Parameters](#required-parameters-25)
        - [Optional Parameters](#optional-parameters-25)
  - [omnia tenants update dns](#omnia-tenants-update-dns)
        - [Example](#example-update-dns)
        - [Required Parameters](#required-parameters-update-dns)
        - [Optional Parameters](#optional-parameters-update-dns)
  - [omnia tenants update depsecurity](#omnia-tenants-update-depsecurity)
        - [Example](#example-update-depsecurity)
        - [Required Parameters](#required-parameters-update-depsecurity)
        - [Optional Parameters](#optional-parameters-update-depsecurity)
  - [omnia tenants update status](#omnia-tenants-update-status)
        - [Example](#example-update-status)
        - [Required Parameters](#required-parameters-update-status)
        - [Optional Parameters](#optional-parameters-update-status)
  - [omnia tenants update appsettings](#omnia-tenants-update-appsettings)
        - [Example](#example-appsettings-update)
        - [Required Parameters](#required-parameters-update-appsettings)
        - [Optional Parameters](#optional-parameters-update-appsettings)
  - [omnia tenants update ai](#omnia-tenants-update-ai)
        - [Example](#example-update-ai)
        - [Required Parameters](#required-parameters-update-ai)
  - [omnia tenants update envVar set](#omnia-tenants-update-envVar-set)
        - [Example](#example-update-envvar-set)
        - [Required Parameters](#required-parameters-update-envvar-set)
  - [omnia tenants update envVar remove](#omnia-tenants-update-envVar-remove)
        - [Example](#example-update-envvar-remove)
        - [Required Parameters](#required-parameters-update-envvar-remove) 
  - [omnia tenants diagnostic add](#omnia-tenants-diagnostic-add)
        - [Example](#example-tenants-diagnostic-add)
        - [Required Parameters](#required-parameters-tenants-diagnostic-add)
        - [Optional Parameters](#optional-parameters-tenants-diagnostic-add)
  - [omnia tenants diagnostic remove](#omnia-tenants-diagnostic-remove)
        - [Example](#example-tenants-diagnostic-remove)
        - [Required Parameters](#required-parameters-tenants-diagnostic-remove)
        - [Optional Parameters](#optional-parameters-tenants-diagnostic-add)
  - [omnia tenants diagnostic list](#omnia-tenants-diagnostic-list)
        - [Example](#example-tenants-diagnostic-list)
        - [Required Parameters](#required-parameters-tenants-diagnostic-list)
        - [Optional Parameters](#optional-parameters-tenants-diagnostic-list)
  - [omnia tenants diagnostic run](#omnia-tenants-diagnostic-run)
        - [Example](#example-tenants-diagnostic-run)
        - [Required Parameters](#required-parameters-tenants-diagnostic-run)
        - [Optional Parameters](#optional-parameters-tenants-diagnostic-run)
  - [omnia tenants get appsettings](#omnia-tenants-get-appsettings)
        - [Example](#example-appsettings-get)
        - [Required Parameters](#required-parameters-get-appsettings)
        - [Optional Parameters](#optional-parameters-get-appsettings)  
  - [omnia tenants get ai](#omnia-tenants-get-ai)
        - [Example](#example-get-ai)
        - [Required Parameters](#required-parameters-get-ai) 
  - [omnia tenants get history](#omnia-tenants-get-history)
        - [Example](#example-get-history)
        - [Required Parameters](#required-parameters-get-history) 
        - [Optional Parameters](#optional-parameters-get-history)
  - [omnia tenants move](#omnia-tenants-move)
        - [Example](#example-tenants-move)
        - [Required Parameters](#required-parameters-tenants-move)
  - [omnia tenants moveall](#omnia-tenants-moveall)
        - [Example](#example-tenants-moveall)
        - [Required Parameters](#required-parameters-tenants-moveall)
  - [omnia tenants cleanup](#omnia-tenants-cleanup)
        - [Example](#example-tenants-cleanup)
        - [Required Parameters](#required-parameters-tenants-cleanup)
        - [Optional Parameters](#optional-parameters-tenants-cleanup)
  - [omnia tenants backup](#omnia-tenants-backup)
        - [Example](#example-tenants-backup)
        - [Required Parameters](#required-parameters-tenants-backup)
        - [Optional Parameters](#optional-parameters-tenants-backup)
  - [omnia tenants delete](#omnia-tenants-delete)
        - [Example](#example-tenants-delete)
        - [Required Parameters](#required-parameters-tenants-delete)
        - [Optional Parameters](#optional-parameters-tenants-delete)
- [Tenant Resources Commands](#tenant-resources-commands)
  - [omnia tenants resources sqlupdate](#omnia-tenants-resources-sqlupdate)
        - [Example](#example-tenants-resources-sqlupdate)
        - [Required Parameters](#required-parameters-tenants-resources-sqlupdate)
  - [omnia tenants resources scale](#omnia-tenants-resources-scale)
        - [Example](#example-tenants-resources-scale)
        - [Required Parameters](#required-parameters-tenants-resources-scale)     
- [Extension Commands](#extension-commands)
  - [omnia extensions new](#omnia-extensions-new)
        - [Example](#example-extensions-new)
        - [Required Parameters](#required-parameters-extensions-new)
        - [Optional Parameters](#optional-parameters-extensions-new)
  - [omnia extensions restart](#omnia-extensions-restart)
        - [Example](#example-extensions-restart)
        - [Required Parameters](#required-parameters-extensions-restart)
        - [Optional Parameters](#optional-parameters-extensions-restart)
  - [omnia extensions list](#omnia-extensions-list)
        - [Example](#example-extensions-list)
        - [Required Parameters](#required-parameters-extensions-list)
        - [Optional Parameters](#optional-parameters-extensions-list)
  - [omnia extensions versions](#omnia-extensions-versions)
        - [Example](#example-extensions-versions)
        - [Required Parameters](#required-parameters-extensions-versions)
        - [Optional Parameters](#optional-parameters-extensions-versions)
  - [omnia extensions push](#omnia-extensions-push)
        - [Example](#example-extensions-push)
        - [Required Parameters](#required-parameters-extensions-push)
        - [Optional Parameters](#optional-parameters-extensions-push)
  - [omnia extensions deploy](#omnia-extensions-deploy)
        - [Example](#example-extensions-deploy)
        - [Required Parameters](#required-parameters-extensions-deploy)
        - [Optional Parameters](#optional-parameters-extensions-deploy)
  - [omnia extensions retract](#omnia-extensions-retract)
        - [Example](#example-extensions-retract)
        - [Required Parameters](#required-parameters-extensions-retract)
        - [Optional Parameters](#optional-parameters-extensions-retract)
  - [omnia extensions revert](#omnia-extensions-revert)
        - [Example](#example-extensions-revert)
        - [Required Parameters](#required-parameters-extensions-revert)
        - [Optional Parameters](#optional-parameters-extensions-revert)
- [Extension Groups Commands](#extension-groups-commands)
  - [omnia extgroups new](#omnia-extgroups-new)
        - [Example](#example-extgroups-new)
        - [Required Parameters](#required-parameters-extgroups-new)
        - [Optional Parameters](#optional-parameters-extgroups-new)
  - [omnia extgroups addversion](#omnia-extgroups-addversion)
        - [Example](#example-extgroups-addversion)
        - [Required Parameters](#required-parameters-extgroups-addversion)
        - [Optional Parameters](#optional-parameters-extgroups-addversion)
  - [omnia extgroups deleteversion](#omnia-extgroups-deleteversion)
        - [Example](#example-extgroups-deleteversion)
        - [Required Parameters](#required-parameters-extgroups-deleteversion)
        - [Optional Parameters](#optional-parameters-extgroups-deleteversion)
  - [omnia extgroups delete](#omnia-extgroups-delete)
        - [Example](#example-extgroups-delete)
        - [Required Parameters](#required-parameters-extgroups-delete)
        - [Optional Parameters](#optional-parameters-extgroups-delete)
- [Deployment Groups Commands](#deployment-groups-commands)
  - [omnia depgroups new](#omnia-depgroups-new)
        - [Example](#example-depgroups-new)
        - [Required Parameters](#required-parameters-depgroups-new)
        - [Optional Parameters](#optional-parameters-depgroups-new)
  - [omnia depgroups addtarget](#omnia-depgroups-addtarget)
        - [Example](#example-depgroups-addtarget)
        - [Required Parameters](#required-parameters-depgroups-addtarget)
        - [Optional Parameters](#optional-parameters-depgroups-addtarget)
  - [omnia depgroups deletetarget](#omnia-depgroups-deletetarget)
        - [Example](#example-depgroups-deletetarget)
        - [Required Parameters](#required-parameters-depgroups-deletetarget)
        - [Optional Parameters](#optional-parameters-depgroups-deletetarget)
  - [omnia depgroups delete](#omnia-depgroups-delete)
        - [Example](#example-depgroups-delete)
        - [Required Parameters](#required-parameters-depgroups-delete)
        - [Optional Parameters](#optional-parameters-depgroups-delete)
- [Extension Secret Commands](#extension-secret-commands)
  - [omnia secrets add](#omnia-secrets-add)
        - [Example](#example-secrets-add)
        - [Required Parameters](#required-parameters-secrets-add)
        - [Optional Parameters](#optional-parameters-secrets-add)
  - [omnia secrets remove](#omnia-secrets-remove)
        - [Example](#example-secrets-remove)
        - [Required Parameters](#required-parameters-secrets-remove)
  - [omnia secrets list](#omnia-secrets-list)
        - [Example](#example-secrets-list)
        - [Required Parameters](#required-parameters-secrets-list)
        - [Optional Parameters](#optional-parameters-secrets-list)
- [Cloud Secret Commands](#cloud-secret-commands)
  - [omnia cloudsecrets add](#omnia-cloudsecrets-add)
        - [Example](#example-cloudsecrets-add)
        - [Required Parameters](#required-parameters-cloudsecrets-add)
        - [Optional Parameters](#optional-parameters-cloudsecrets-add)
  - [omnia cloudsecrets update](#omnia-cloudsecrets-update)
        - [Example](#example-cloudsecrets-update)
        - [Required Parameters](#required-parameters-cloudsecrets-update)        
  - [omnia cloudsecrets remove](#omnia-cloudsecrets-remove)
        - [Example](#example-cloudsecrets-remove)
        - [Required Parameters](#required-parameters-cloudsecrets-remove)
  - [omnia cloudsecrets list](#omnia-cloudsecrets-list)
        - [Example](#example-cloudsecrets-list)
        - [Optional Parameters](#optional-parameters-cloudsecrets-list)
  - [omnia cloudsecrets renew](#omnia-cloudsecrets-renew)
        - [Example](#example-cloudsecrets-renew)
        - [Required Parameters](#required-parameters-cloudsecrets-renew)
        - [Optional Parameters](#optional-parameters-cloudsecrets-renew)
- [Tenant Certificate Commands](#tenant-certificate-commands)
  - [omnia certs export](#omnia-certs-export)
        - [Example](#example-certs-export)
        - [Required Parameters](#required-parameters-certs-export)
  - [omnia certs add](#omnia-certs-add)
        - [Example](#example-certs-add)
        - [Required Parameters](#required-parameters-certs-add)
  - [omnia certs adddigicert](#omnia-certs-add)
        - [Example](#example-certs-adddigicert)
        - [Required Parameters](#required-parameters-certs-adddigicert)
        - [Optional Parameters](#optional-parameters-certs-adddigicert)
  - [omnia certs list](#omnia-certs-list)
        - [Example](#example-certs-list)
        - [Optional Parameters](#optional-parameters-certs-list)
  - [omnia certs update](#omnia-certs-update)
        - [Example](#example-certs-update)
        - [Required Parameters](#required-parameters-certs-update)  
  - [omnia certs cloudupdate](#omnia-certs-cloudupdate)
        - [Example](#example-certs-cloudupdate)
        - [Required Parameters](#required-parameters-certs-cloudupdate)
        - [Required Parameters](#required-parameters-certs-cloudupdate)   
  - [omnia certs reissue](#omnia-certs-reissue)
        - [Example](#example-certs-reissue)
        - [Required Parameters](#required-parameters-certs-reissue)
        - [Optional Parameters](#optional-parameters-certs-reissue)
  - [omnia certs import](#omnia-certs-import)
        - [Example](#example-certs-import)
        - [Required Parameters](#required-parameters-certs-import)
        - [Optional Parameters](#optional-parameters-certs-import)
  - [omnia certs clouddeploy](#omnia-certs-clouddeploy)
        - [Example](#example-certs-clouddeploy)
        - [Required Parameters](#required-parameters-certs-clouddeploy)
        - [Optional Parameters](#optional-parameters-certs-clouddeploy)
  - [omnia domain update](#omnia-domain-update)
        - [Example](#example-domain-update)
        - [Required Parameters](#required-parameters-domain-update)
  - [omnia domain dnspreview](#omnia-domain-dnspreview)
        - [Example](#example-domain-dnspreview)
        - [Required Parameters](#required-parameters-domain-dnspreview)
  - [omnia certs delete](#omnia-certs-delete)
        - [Example](#example-certs-delete)
        - [Required Parameters](#required-parameters-certs-delete)
        - [Optional Parameters](#optional-parameters-certs-delete)
- [Localization Commands](#Localization-commands)  
  - [omnia loc upload](#omnia-loc-upload)
        - [Example](#example-loc-upload)
        - [Required Parameters](#required-parameters-loc-upload)
  - [omnia loc delete](#omnia-loc-delete)
        - [Example](#example-loc-delete)
        - [Required Parameters](#required-parameters-loc-delete)
  - [omnia loc list](#omnia-loc-list)
        - [Example](#example-loc-list)
        - [Optional Parameters](#optional-parameters-loc-list)
  - [omnia loc download](#omnia-loc-download)
        - [Example](#example-loc-download)
        - [Required Parameters](#required-parameters-loc-download)
        - [Optional Parameters](#optional-parameters-loc-download)
  - [omnia loc diff](#omnia-loc-diff)
        - [Example](#example-loc-diff)
        - [Required Parameters](#required-parameters-loc-diff)
        - [Optional Parameters](#optional-parameters-loc-diff)
  - [omnia loc patch](#omnia-loc-patch)
        - [Example](#example-loc-patch)
        - [Required Parameters](#required-parameters-loc-patch)
        - [Optional Parameters](#optional-parameters-loc-patch)
- [Permission Commands](#permissions-commands)
  - [Omnia Cli Permission Roles](#all-permission-roles-available-in-omnia-cli)
  - [omnia permissions add](#omnia-permissions-add)
        - [Example](#example-permissions-add)
        - [Required Parameters](#required-parameters-permissions-add)
        - [Optional Parameters](#optional-parameters-permissions-add)
  - [omnia permissions remove](#omnia-permission-remove)
        - [Example](#example-permission-remove)
        - [Required Parameters](#required-parameters-permission-remove)
        - [Optional Parameters](#optional-parameters-permission-remove)
  - [omnia permissions list](#omnia-permissions-list)
        - [Example](#example-permissions-list)
        - [Required Parameters](#required-parameters-permissions-list)
        - [Optional Parameters](#optional-parameters-permissions-list)
- [Alert Rules Commands](#alert-rules-commands)
   - [omnia alertrules new](#omnia-alertrules-new)
         - [Example](#example-alertrules-new)
         - [Required Parameters](#required-parameters-alertrules-new)
         - [Optional Parameters](#optional-parameters-alertrules-new)
   - [omnia alertrules update](#omnia-alertrules-update)
         - [Example](#example-alertrules-update)
         - [Required Parameters](#required-parameters-alertrules-update)
         - [Optional Parameters](#optional-parameters-alertrules-update)
   - [omnia alertrules list](#omnia-alertrules-list)
         - [Example](#example-alertrules-list)
         - [Required Parameters](#required-parameters-alertrules-list)
         - [Optional Parameters](#optional-parameters-alertrules-list)
   - [omnia alertrules delete](#omnia-alertrules-delete)
         - [Example](#example-alertrules-delete)
         - [Required Parameters](#required-parameters-alertrules-delete)
         - [Optional Parameters](#optional-parameters-alertrules-delete)
- [Resourcep Poviders Commands](#resource-providers-commands)
   - [omnia resourceproviders list](#omnia-resourceproviders-list)
         - [Example](#example-resourceproviders-list)
         - [Required Parameters](#required-parameters-resourceproviders-list)
         - [Optional Parameters](#optional-parameters-resourceproviders-list)
   - [omnia resourceproviders add](#omnia-resourceproviders-add)
         - [Example](#example-resourceproviders-add)
         - [Required Parameters](#required-parameters-resourceproviders-add)
         - [Optional Parameters](#optional-parameters-resourceproviders-add)
- [Elastic Pools Commands](#elastic-pools-commands)
   - [omnia elasticpools new](#omnia-elasticpools-new)
         - [Example](#example-elasticpools-new)
         - [Required Parameters](#required-parameters-elasticpools-new)
         - [Optional Parameters](#optional-parameters-elasticpools-new)
   - [omnia elasticpools update](#omnia-elasticpools-update)
         - [Example](#example-elasticpools-update)
         - [Required Parameters](#required-parameters-elasticpools-update)
         - [Optional Parameters](#optional-parameters-elasticpools-update)
   - [omnia elasticpools list](#omnia-elasticpools-list)
         - [Example](#example-elasticpools-list)
         - [Required Parameters](#required-parameters-elasticpools-list)
         - [Optional Parameters](#optional-parameters-elasticpools-list)
   - [omnia elasticpools delete](#omnia-elasticpools-delete)
         - [Example](#example-elasticpools-delete)
         - [Required Parameters](#required-parameters-elasticpools-delete)
         - [Optional Parameters](#optional-parameters-elasticpools-delete)
   - [omnia elasticpools delete](#omnia-elasticpools-delete)
         - [Example](#example-elasticpools-delete)
         - [Required Parameters](#required-parameters-elasticpools-ensure)
         - [Optional Parameters](#optional-parameters-elasticpools-ensure)     
- [Reporting Commands](#reporting-commands)
   - [omnia reports new](#omnia-reports-new)
         - [Example](#example-reports-new)
         - [Required Parameters](#required-parameters-reports-new)
         - [Optional Parameters](#optional-parameters-reports-new)  
   - [omnia reports list](#omnia-elasticpools-list)
         - [Example](#example-reports-list)
         - [Required Parameters](#required-parameters-reports-list)
         - [Optional Parameters](#optional-parameters-reports-list)
   - [omnia reports delete](#omnia-reports-delete)
         - [Example](#example-reports-delete)
         - [Required Parameters](#required-parameters-reports-delete)
         - [Optional Parameters](#optional-parameters-reports-delete)
- [Regular Mode Deployment for version 6 to 7](#regular-mode-deployment)
   - [Phase 1 - Deploy and run migration](#regular-mode-deployment-phase1)
         - [Optional Commands](#optional-commands-regular-mode-deployment-phase1)
         - [Required Commands](#required-commands-regular-mode-deployment-phase1)         
   - [Phase 2 - Finishing](#regular-mode-deployment-phase2)
         - [Optional Commands](#optional-commands-regular-mode-deployment-phase2)         
   - [Phase 3 - Revert (If Any)](#regular-mode-deployment-phase3)
         - [Required Commands](#required-commands-regular-mode-deployment-phase3) 
		 - [Optional Commands](#optional-commands-regular-mode-deployment-phase3)
- [Readonly Mode Deployment for version 6 to 7](#readonly-mode-deployment)
   - [Phase 1 - Initial](#readonly-mode-deployment-phase1)
         - [Optional Commands](#optional-commands-readonly-mode-deployment-phase1)
         - [Required Commands](#required-commands-readonly-mode-deployment-phase1)         
   - [Phase 2 - Execution Migration](#readonly-mode-deployment-phase2)
         - [Optional Commands](#optional-commands-readonly-mode-deployment-phase2)
         - [Required Commands](#required-commands-readonly-mode-deployment-phase2)    
   - [Phase 3 - Apply new databases](#readonly-mode-deployment-phase3)         
         - [Required Commands](#required-commands-readonly-mode-deployment-phase3)    
   - [Phase 4 - Finishing](#readonly-mode-deployment-phase4)
		 - [Optional Commands](#optional-commands-readonly-mode-deployment-phase4)
         - [Required Commands](#required-commands-readonly-mode-deployment-phase4)    
   - [Phase 5 - Revert (If Any)](#readonly-mode-deployment-phase5)		
        - [Required Commands](#required-commands-readonly-mode-deployment-phase5)
        - [Optional Commands](#optional-commands-readonly-mode-deployment-phase5)

 
<!-- /TOC -->

---

# Versioning Reference
Omnia Cloud is enforcing the Semantic Versioning pattern for Extension versions and
when using the Omnia Cli to manage versions such as deployments, listing extension versions or managing extensions groups you can use the following pattern matching

| Pattern        | Description                                          |
| -------------- | ---------------------------------------------------- |
| latest         | Gets the latest major version                        |
| 6.0.*          | Gets the latest patch version of the 6.0 release     |
| 6.*            | Gets the lates minor version of the 2 release        |
| 6.0.0-preview* | Gets the latest 6.0.0 preview version                |
| 6.*-preview*   | Gets the latest minor version of the latest preview  |
| -preview       | Gets the latest previev version of any major version |

Pattern matching is very powerful together with concepts such as [Deployment](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#omnia-extensions-deploy) or [Extension Groups](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#extension-groups-commands) where you can deploy one or many extensions and ensure its using the current latest version

You can play with the pattern matching using the omnia extensions versions cmd. Try the sample below to find all omnia 6.* versions
```
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:6.*
```
---

# Omnia Dev Commands

## omnia dev new

##### Example Install Templates
```
omnia dev new --install 6.0.0
```

##### Required Parameters

| Name         | Description                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| -i --install | The template package version to install. Versions and source located [here](https://github.com/preciofishbone/OmniaCliTemplates) |

    

##### Optional Parameters

| Name       | Description                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------- |
| -f --force | Forces a new download if the version is already installed (same version could be update on github) |

##### Example List Templates
```
omnia dev new --list
```

##### Required Parameters

| Name      | Description               |
| --------- | ------------------------- |
| -l --list | Lists available templates |

    

##### Optional Parameters

No optional parameters

##### Example Create Using Template
```
Create new extension project containing a Web and Worker service
omnia dev new extension --name web=MyExtension.Web,worker=MyExtension.Worker

Create a new Vue based WebComponent
omnia dev new vuewebcomponent --name MyWebComponent --tokens element=my-web-component

```

##### Required Parameters

No required paramters

    

##### Optional Parameters

| Name         | Description                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| -r --restore | Restores all dependencies when creating extension / projects                 |
| -t --tokens  | Required for some item templates (e.g. vuewebcomponent)                      |
| -o --output  | Location to place the generated output. The default is the current directory |
| -n --name    | The name will be part of filenames/content                                   |

---

## omnia dev publish

##### Example
```
omnia dev publish --path C:\Dev\MyExtension\src --version 1.0.0
```

##### Required Parameters

| Name      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| --path    | The path to the extension.json (can be folderpath or filepath) |
| --version | The extension version                                          |
    

##### Optional Parameters

| Name               | Description                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| --force            | Forces docker images to be overwritten if the specific version of the extension already exists locally. |
| -i --buildimages   | true/false default is true when false the docker images will not be built                               |
| -d --dotnetpublish | true/false default is true when false the dotnet publish will not run.                                  |
| -r --restore       | Restores dependencies before building                                                                   |

---

## omnia dev restore

Restores npm and nuget dependencies in all a projects recursivly

##### Example
```
Restore dependencies from current directory and down
omnia dev restore

Restore dependency on a specified path and down
omnia dev restore --path C:\Dev\MyExtension\src

```

##### Required Parameters

No required parameters
    

##### Optional Parameters

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| -p --path | The path to the folder where to start restoring from |
| -f --force| Delete node_modules and package-lock.json            |

---

## omnia dev pack

Enables an easy way of creating your own local nuget packages (and symbols for debug)

##### Example
```
pack all your sln projects which have a nuspec and output nuget packages in the specified path
omnia dev pack -p C:\Projects\OmniaFork\Omnia\src\Omnia.sln -v 1.0.11-mylocal -o ../../TestoutputNugetDir

pack one project which have a nuspec and output nuget packages in the specified path (assuming the -p path only has one project in the sub path)
omnia dev pack -p C:\Projects\OmniaFork\Omnia\src\Omnia.Fx.Models -v 1.0.11-mylocal -o ../../TestoutputNugetDir

```

##### Required Parameters

| Name         | Description                                          |
| ------------ | ---------------------------------------------------- |
| -p --path    | The start path to start scaning for nuspec/csproj    |
| -v --version | The package version to generate                      |
| -o --output  | The path in which the resulting packages are created |
    

##### Optional Parameters

| Name               | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| -c --configuration | Release or Debug (debug is default, and also generates symbol packages) |

---


## omnia dev add

Enables easy add of Omnia Fx and other Omnia Extensibility dependencies.

##### Example Adding new Omnia Fx
```
Add Omnia.Fx.NetCore.SharePoint in latest available version to Webapp 
omnia dev add Omnia.Fx.NetCore.SharePoint -- path C://MyExtension/MyExtension.Web/
```

>It is recommended that you always specify --path to the particular project which need to add/install the Omnia Fx. Recursively adding Fx to all existing projects is not necessary in most of the cases.

>It is recommended that you always specify specific Nuget or Npm package to add to the project. Adding all packages of an Omnia Fx is not necessary in most of the cases.

##### Required Parameters

No required parameters

##### Optional Parameters

| Name         | Description                                              |
| ------------ | -------------------------------------------------------- |
| -p --path    | Add to all projects from this point down, i.e. recursive |
| -v --version | The version to add to                                    |
| -t --tag     | Switch between prerelase tags (dev, preview)             |
| -r --restore | Restores the dependencies after adding                   |


##### Other Examples

```
-- Not recommended but it is able to

Add all of Omnia Fx in latest available version 
omnia dev add omniafx

Add all of Omnia Wcm Fx in latest available version 
omnia dev add wcmfx

Add all of Omnia Workplace Fx in latest available version 
omnia dev add workplacefx

Add in specific version
omnia dev add omniafx --version 6.0.0

```

---

## omnia dev update

Enables easy update of Omnia Fx and other Omnia Extensibility dependencies
Also supports updating project(s) to use locally created nuget packages

##### Example Updating to new official version
```
Update Omnia Fx to latest available version
omnia dev update omniafx

Update Omnia Wcm Fx to latest available version
omnia dev update wcmfx

Update Omnia Workplace Fx to latest available version
omnia dev update workplacefx

Update to specific version
omnia dev update omniafx --version 6.0.0

```

##### Required Parameters

No required parameters

##### Optional Parameters

| Name         | Description                                              |
| ------------ | -------------------------------------------------------- |
| -p --path    | Update all projects from this point down, i.e. recursive |
| -v --version | The version to update to                                 |
| -t --tag     | Switch between prerelase tags (dev, preview)             |
| -r --restore | Restores the dependencies after updating                 |

##### Example Updating to locally created nuget package version

```
Update all project below the specified path (-p) to use the specifiec version (-v) of all packages matching that version in the package location specified (-l) and restore the projects after update (-r)
omnia dev update -p C:\Projects\OmniaFork\OmniaWebContentManagement\src -l C:\MySelected\TestoutputNugetDir -v 1.0.11-mylocal -r
```

##### Required Parameters

| Name              | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| -p --path         | Update all projects from this point down, i.e. recursive     |
| -v --version      | The version to update to, i.e. the versions to use from (-l) |
| -l --localPackage | Path to the locally generated packages                       |
| -r --restore      | Restores the dependencies after updating                     |

##### Optional Parameters

No optional parameters

---

## omnia dev appsettings get

Generates appsettings.local.json for a specific dev tenant

##### Example
```
omnia dev appsettings get --path C:\myextension\extension.json --tenantid {tenantid}
```

##### Required Parameters

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| -t --tenantid | The tenantid of the tenant to generate appsettings for |
    

##### Optional Parameters

| Name      | Description                                               |
| --------- | --------------------------------------------------------- |
| -p --path | The path to extension.json (default is current directory) |

---

# Omnia Dev Dependencies Commands

## omnia dev dependencies list

List all development dependencies

##### Example
```
omnia dev dependencies list
```

##### Required Parameters

No required parameters

##### Optional Parameters

| Name      | Description                             |
| --------- | --------------------------------------- |
| --json    | Show listing in json format             |

---

## omnia dev dependencies add

Add a new development dependency

##### Example

The following command is to add a new dependency for developing on Omnia version >= 6.0.0-dev 

```
omnia dev dependencies add --omniafx 6.0.0-dev --sdk 3.1.402 --baseimage 6.0 --cli 3.0.0-dev --clitemplate 6.0.0 --vs 16.7.5
```

##### Required Parameters

| Name          | Description                                                |
| ------------- | ---------------------------------------------------------- |
| --omniafx     | The minimum version of Omnia that requires this dependency |
| --sdk         | .Net Core SDK version                                      |
| --baseimage   | Omnia docker base image version                            |
| --cli         | Omnia cli version                                          |
| --clitemplate | Omnia cli template version                                 |
| --vs          | Visual Studio version                                      |


##### Optional Parameters

| Name      | Description                             |
| --------- | --------------------------------------- |
| --message | Additional message to show to developer |

---

## omnia dev dependencies update

Update a development dependency

##### Example

The following command is to update a dependency for developing on Omnia version >= 6.0.0-dev 

```
omnia dev dependencies update --omniafx 6.0.0-dev --baseimage 6.0 --message "Documentation: https://github.com/preciofishbone/OmniaFx"
```

##### Required Parameters

| Name      | Description                                                |
| --------- | ---------------------------------------------------------- |
| --omniafx | The minimum version of Omnia that requires this dependency |


##### Optional Parameters

| Name          | Description                             |
| ------------- | --------------------------------------- |
| --sdk         | .Net Core SDK version                   |
| --baseimage   | Omnia docker base image version         |
| --cli         | Omnia cli version                       |
| --clitemplate | Omnia cli template version              |
| --vs          | Visual Studio version                   |
| --message     | Additional message to show to developer |

---

## omnia dev dependencies remove

Remove a development dependency

##### Example

```
omnia dev dependencies remove --id eecc5c09-9e15-4907-80c8-67a198387b7b
```

##### Required Parameters

| Name | Description                    |
| ---- | ------------------------------ |
| --id | The id of dependency to remove |

##### Optional Parameters

No optional parameters

---

# Omnia Dev TemplateInfos Commands

## omnia dev templateinfos list

List all template information

##### Example
```
omnia dev templateinfos list
```

##### Required Parameters

No required parameters

##### Optional Parameters

No optional parameters

---

## omnia dev templateinfos add

Add information for Omnia cli template version

##### Example

The following command is to add information for Omnia cli template version 6.0.0 

```
omnia dev templateinfos add --version 6.0.0
```

##### Required Parameters

| Name      | Description                                         |
| --------- | --------------------------------------------------- |
| --version | The verion of omnia cli template to add information |


##### Optional Parameters

No optional parameters

---

## omnia dev templateinfos update

Update template information

##### Example

The following command is to update information for Omnia cli template version 6.0.0 

```
omnia dev templateinfos update --version 6.0.0
```

##### Required Parameters

| Name      | Description                                            |
| --------- | ------------------------------------------------------ |
| --versopm | The verion of omnia cli template to update information |


##### Optional Parameters

No optional parameters

---

## omnia dev templateinfos remove

Remove template information

##### Example

```
omnia dev templateinfos remove --id eecc5c09-9e15-4907-80c8-67a198387b7b
```

##### Required Parameters

| Name | Description                           |
| ---- | ------------------------------------- |
| --id | The id of template information remove |

##### Optional Parameters

No optional parameters

---

# Omnia Cloud Login

## omnia login
Logs you in to the Omnia Cloud using azure ad credentials

##### Example
```
omnia login
```

##### Required Parameters

No required parameters
    

##### Optional Parameters

No optional parameters

---

## omnia logout
Logs you out of the Omnia Cloud

##### Example

```
omnia logout
```

##### Required Parameters

No required parameters
    

##### Optional Parameters

No optional parameters

---

# Tenant Commands

## omnia tenants new

Registers a new tenant in Omnia Cloud

##### Example
```
omnia tenants new --intent dev --name "My Customer" --omnia-dns-suffix "mycustomer" --sp-dns-suffix "mycustomer" --azure-ad-id "8c6e9ace-69e9-4272-8225-714d57a3cceb" --region "westeurope" --depgroupid "e871fe5f-3200-4417-8baa-0305fb74fbbf" --clusterid "f1ae97cc-2bc3-49b1-adff-33f9b7b5beae"
```

##### Required Parameters

| Name               | Description                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --intent           | The intent of the tenant can be (dev, test, preprod, prod).                                                                                                   |
| --name             | A friendly name of the tenant.                                                                                                                                |
| --omnia-dns-suffix | Unique dns suffix for the omnia service this is the first part of the full dns name e.g mycustomer                                                            |
| --sp-dns-suffix    | Unique dns suffix for the existing SharePoint online service. this is the first part of the full sharepoint dns name. e.g mycustomer                          |
| --azure-ad-id      | The unique Azure Ad Id for the customers tenant. https://support.office.com/en-us/article/find-your-office-365-tenant-id-6891b561-a52d-4ade-9f39-b492285e2c9b |
| --region           | The region where this tenant should be hosted. Should be located in same region as Office 365                                                                 |
| --depgroupid       | The deployment group id where this tenant will belong to. Should has the same intent                                                              |

##### Optional Parameters

| Name               | Description                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --clusterid        | The Cluster Id where the tenant will belong to. Otherwise, the cluster is selected by the system.                                                        |

---

## omnia tenants list

List all the existing tenants or detailed information about a tenant if id is provided

##### Example
```
omnia tenants list

omnia tenants list {tenantid}

omnia tenants list --filter name

omnia tenants list --filter dns -mwide
 
omnia tenants list --filter contactname -wide

```

##### Required Parameters

No required parameters  

##### Optional Parameters

| Name        | Description             |
| ----------- | ----------------------- |
| -a --all    | Get all tenants         |
| -f --filter | Filters tenants by all displayed column |
| -m --mwide  | Show more infomation in the list    |
| -w --wide   | Show all information in the list   |
| --output json | Return data as json   |

---

## omnia tenants update enablerror

Redirects users accessing the tenant to a "Omnia is down" page. For debugging purposes the tenant can be accessed by adding ?redirect=true or ?debug=true as a querystring parameter in the url

##### Example
```
omnia tenants update enableerror {tenantid}
```

##### Required Parameters

No required parameters  

##### Optional Parameters

No optional parameters

---

## omnia tenants update disableerror

Stops the redirect applied by the omnia tenants update enableerror cmd

##### Example
```
omnia tenants update disableerror {tenantid}
```

##### Required Parameters

No required parameters  

##### Optional Parameters

No optional parameters

---

## omnia tenants update customerrorpage

Enables to upload a custom error page for the error redirect page

##### Example
```
omnia tenants update customerrorpage {tenantid} --path c:\html\customerror.html
```

##### Required Parameters

| Name   | Description                              |
| ------ | ---------------------------------------- |
| --path | The path to the html page to be uploaded |

##### Optional Parameters

No optional parameters

---

## omnia tenants update kaizala

Enables mobile login using kaizala connector

##### Example
```
omnia tenants update kaizala {tenantid} --connectorid {connectorid} --connectorsecret {connectorsecret} 
--groupname {groupname} --connectortoken {connectortoken}
```

##### Required Parameters

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| --connectorid     | The connector id from Kaizala                      |
| --connectorsecret | The connector secret from Kaizala                  |
| --groupname       | The Kaizala group name where the allowed users are |
| --connectortoken  | The connector token from Kaizala                   |

##### Optional Parameters

No optional parameters

---

## omnia tenants update dns

Updates the omnia tenant dns prefix.

##### Example<a id="example-update-dns"></a>
```
omnia tenants update dns {tenantid} --omnia-dns-suffix {omnia-dns-suffix}
```

##### Required Parameters<a id="required-parameters-update-dns"></a>

| Name                | Description                                        |
| -----------------   | -------------------------------------------------- |
| --omnia-dns-suffix  | The new dns suffix to update to                    |


##### Optional Parameters<a id="optional-parameters-update-dns"></a>

No optional parameters

---

## omnia tenants update depsecurity

Updates level of Deployment Security. A high level of Deployment Security will not allow you to deploy extensions without --code parameter.

##### Example<a id="example-update-depsecurity"></a>
```
omnia tenants update depsecurity {tenantid} --level {level}
```

##### Required Parameters<a id="required-parameters-update-depsecurity"></a>

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| --level           | The new level of Deployment Security (0: Default; 1: High)                   |


##### Optional Parameters<a id="optional-parameters-update-depsecurity"></a>

No optional parameters

---

## omnia tenants update status

Updates status for a tenant. With suspended status, all services of the tenants scale down to 0. By contrast, scaling up to 1 if the tenant re-active. 
##### Example<a id="example-update-status"></a>
```
omnia tenants update status {tenantid} --value {status} --code {yy-dd-MM-m}
```

##### Required Parameters<a id="required-parameters-update-status"></a>

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| --status           | The new status of tenant (Active, Suspended, ReadOnly)   |
| --code    | You know. |


##### Optional Parameters<a id="optional-parameters-update-status"></a>

No optional parameters

---

## omnia tenants update appsettings

Apply overrides of appsettings (or shared appsettings) for a specific tenant
(Note these will be in effect until removed, i.e. updating with no overrides)

##### Example<a id="example-update-appsettings"></a>
```
omnia tenants update appsettings --tenantid {tenantid} --serviceid {serviceid}
```

##### Required Parameters<a id="required-parameters-update-appsettings"></a>

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| --tenantid | The tenantid of the tenant to generate appsettings for |
| --serviceid| Id of the service owning the appsettings               |
    

##### Optional Parameters<a id="optional-parameters-update-appsettings"></a>

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| --shared | Target the shared appsettings instead of appsettings |

---

## omnia tenants update ai 

Apply overrides of application insights for a specific tenant
(Note these will be in effect until removed, i.e. updating with no overrides)

##### Example<a id="example-update-ai"></a>
```
omnia tenants update ai {tenantid}
```

##### Required Parameters<a id="required-parameters-update-ai"></a>

No required parameters

---

## omnia tenants update envVar set

Set an environment variable in a specific service for a specific tenant
(Note It is necessary to redeploy the extension consisting of the service to make it applied. And it will be kept until executing "omnia tenants update envVar remove")

##### Example<a id="example-update-envvar-set"></a>
```
omnia tenants update envVar set --tenantid {tenantid} --serviceid {serviceid} --name {name} --value {value}

Run WCM migraiton worker with 20 threads
omnia tenants update envVar set --tenantid {tenantid} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_THREAD --value 20

Run WCM migraiton without PageSummaryStatistics and VisitedPages tables.
omnia tenants update envVar set --tenantid {tenantid} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_RULES --value  '*,!PageSummaryStatistics,!VisitedPages'

Run WCM migraiton only for PageSummaryStatistics and VisitedPages tables.
omnia tenants update envVar set --tenantid {tenantid} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_RULES --value  'PageSummaryStatistics,VisitedPages'

Run WCM migraiton without MaxDOP limit
omnia tenants update envVar set --tenantid {tenantid} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_MAXDOP --value  0

```


##### Required Parameters<a id="required-parameters-update-envvar-set"></a>

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| --tenantid | The tenantid of the tenant to set environment variable |
| --serviceid| Id of the service owning the environment variable      |
| --name| the environment variable name     |
| --value| the environment variable value     |

---

## omnia tenants update envVar remove

Remove an environment variable from a specific service for a specific tenant

##### Example<a id="example-update-envvar-remove"></a>
```
omnia tenants update envVar remove --tenantid {tenantid} --serviceid {serviceid} --name {name}
```

##### Required Parameters<a id="required-parameters-update-envvar-remove"></a>

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| --tenantid | The tenantid of the tenant to set environment variable |
| --serviceid| Id of the service owning the environment variable      |
| --name| the environment variable name     |

---

## omnia tenants diagnostic add

Request diagnostics for a service within a Tenant. Services with diagnostics enabled will remain unaffected by the auto-restart job;
however, they will receive diagnostic data and notification emails.
The diagnostic data can be found in the 'Omnia Share' folder within the tenant's storage account.
After the diagnostics collection is completed, the request will be marked as done and will not trigger again.

##### Example<a id="example-tenants-diagnostic-add"></a>
```
omnia tenants diagnostic add {tenantid} --serviceId bb000000-0000-bbbb-0000-0000000000bb --memorylimit 4000 --cpulimit 5000
```

##### Required Parameters<a id="required-parameters-tenants-diagnostic-add"></a>

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| --tenantid | The id of the tenant to trigger diagnostic for |
| --serviceid   | Id of the service to request diagnostic    

##### Optional Parameters<a id="optional-parameters-tenants-diagnostic-add"></a>

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| --memorylimit | The memory threshold that triggers the diagnostic job (4000 = 4Gb) |
| --cpulimit   | The cpu threshold that triggers the diagnostic job (4000 = 4vcores)

---

## omnia tenants diagnostic list

List all tenants undergoing diagnostics and provide detailed diagnostics for a specific tenant.

##### Example<a id="example-tenants-diagnostic-list"></a>
```
omnia tenants diagnostic list
```

##### Required Parameters<a id="required-parameters-tenants-diagnostic-list"></a>

No Required parameters

##### Optional Parameters<a id="optional-parameters-tenants-diagnostic-list"></a>

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| --tenantid | The id of the tenant that need to show detailed diagnostics|


---

## omnia tenants diagnostic remove

Remove a tenant diagnostic that requested.

##### Example<a id="example-tenants-diagnostic-remove"></a>
```
omnia tenants diagnostic remove {tenantid} --id {diagnosticid}
```

##### Required Parameters<a id="required-parameters-tenants-diagnostic-remove"></a>

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| --tenantid | The id of the tenant to remove diagnostic for |
| --diagnosticid   | The id of diagnostic to remove  |

##### Optional Parameters<a id="optional-parameters-tenants-diagnostic-remove"></a>

No optional parameters

---

## omnia tenants diagnostic run

Trigger diagnostic for a service of the tenant

##### Example<a id="example-tenants-diagnostic-run"></a>
```
omnia tenants diagnostic run {tenantid} --serviceId bb000000-0000-bbbb-0000-0000000000bb
```

##### Required Parameters<a id="required-parameters-tenants-diagnostic-run"></a>

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| --tenantid | The id of the tenant to trigger diagnostic for |
| --serviceid   | Id of the service to run diagnostic           |

##### Optional Parameters<a id="optional-parameters-tenants-diagnostic-run"></a>

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| --podnames | The list of pod name to run diagnostic |

---


## omnia tenants get appsettings

Get any applied overrides of appsettings (or shared appsettings) for a specific tenant

##### Example<a id="example-get-appsettings"></a>
```
omnia tenants get appsettings --tenantid {tenantid} --serviceid {serviceid}
```

##### Required Parameters<a id="required-parameters-get-appsettings"></a>

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| --tenantid | The tenantid of the tenant to generate appsettings for |
| --serviceid   | Id of the service owning the appsettings               |


##### Optional Parameters<a id="optional-parameters-get-appsettings"></a>

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| --shared | Target the shared appsettings instead of appsettings |

---

## omnia tenants get ai

Get any applied overrides of application insights for a specific tenant

##### Example<a id="example-get-ai"></a>
```
omnia tenants get ai {tenantid}
```

##### Required Parameters<a id="required-parameters-get-ai"></a>

No required parameters
    
---

## omnia tenants get history

Get deployemnt versions history of a tenant in a period of time

##### Example<a id="example-get-history"></a>
```
omnia tenants get history --tenantid {tenantid} --startDate {startDate} --endDate {endDate}
```

##### Required Parameters<a id="required-parameters-get-history"></a>

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| --tenantid | The tenantid of the tenant to get history |
        
##### Optional Parameters<a id="optional-parameters-get-appsettings"></a>

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| --startDate| the start date of deployemnt versions. (in past 3 months by default) |
| --endDate| the start end of deployemnt versions. (the current date by default) |

---

## omnia tenants move

In order to move a tenant to a new cluster.

##### Example<a id="example-tenants-move"></a>
```
omnia tenants move {tenantid} --clusterid {clusterid}

```

##### Required Parameters<a id="required-parameters-tenants-move"></a>

| Name   | Description                       |
| ------ | --------------------------------- |
| tenantid | Id of the tenant being moved. |
| --clusterid | Id of the new cluster. |

    
---

## omnia tenants moveall

In order to move all tenants to a new cluster.

##### Example<a id="example-tenants-moveall"></a>
```
omnia tenants moveall --fromclusterid {clusterid} --toclusterid {clusterid}

```

##### Required Parameters<a id="required-parameters-tenants-moveall"></a>

| Name   | Description                       |
| ------ | --------------------------------- |
| --fromclusterid | Id of the old cluster. |
| --toclusterid | Id of the new cluster. |

    
---
## omnia tenants cleanup

In order to clean up the queue, topics, and namespace in the old cluster after moving the tenant to a new cluster. Should wait for 1 hour after the moving.

##### Example<a id="example-tenants-cleanup"></a>
```
omnia tenants cleanup {tenantid} --oldclusterid {clusterid}

```

##### Required Parameters<a id="required-parameters-tenants-cleanup"></a>

| Name   | Description                       |
| ------ | --------------------------------- |
| tenantid | Id of the tenant being cleaned up. |
| --oldclusterid | Id of the old cluster. |

##### Optional Parameters<a id="optional-parameters-tenants-cleanup"></a>

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| --newtenantid| The cloned tenant id after moving tenant to another region.  Please note that the cloned tenant ID will be retained. However, it's important to be aware that all resources associated with the old tenant, such as AI services, storage, and databases, will be permanently removed.|
| --code    | The code needs to be entered when cleaning up the tenant moved to another region (format: yy-dd-MM-m) |

---

## omnia tenants backup
Backup tenant data: SQL Server, File Share, Disk and Tenant Object to center backup storage.

##### Example<a id="example-tenants-backup"></a>
```powershell
omnia tenants backup {tenantid}
```

##### Required Parameters<a id="required-parameters-tenants-backup"></a>
| Name     | Description                        |
| -------- | ---------------------------------- |
| tenantid | Id of the tenant being cleaned up. |


## omnia tenants delete
Delete a tenant and clean up its resources.
```powershell
omnia tenants delete {tenantid}
```

##### Required Parameters<a id="required-parameters-tenants-delete"></a>
| Name     | Description                        |
| -------- | ---------------------------------- |
| tenantid | Id of the tenant being deleted. |

---

##### Optional Parameters<a id="optional-parameters-tenants-delete"></a>
| Name     | Description                        |
| -------- | ---------------------------------- |
| --code   | The code needs to be entered when deleting the tenant (format: yy-dd-MM-m) |
| --force  | Force delete the tenant without having backing up the tenant first |

# Tenant Resources Commands

## omnia tenants resources sqlupdate

Update SQL resource config. Need to redeploy and restart the service to make it affects.

##### Example<a id="example-tenants-resources-sqlupdate"></a>
```
omnia tenants resources sqlupdate {serviceId} --tenantid {tenantid} --poolsize {poolsize}
```

##### Required Parameters<a id="required-parameters-tenants-resources-sqlupdate"></a>

| Name               | Description                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serviceId           | The id of service to update the pool size|
| -t --tenantid             | The id of the tenant.                                                                                                                                |
| -p --poolsize |  The new value of pool size .|

---

## omnia tenants resources scale

Scale tenant resources.

##### Example<a id="example-tenants-resources-scale"></a>
```
omnia tenants resources scale --tenantid {tenantId} --serviceid {serviceId} --uniqueid {uniqueId} --type PersistentDisk --newsize 8
```

##### Required Parameters<a id="required-parameters-tenants-resources-scale"></a>

| Name               | Description                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --serviceid           | The service id that registers the resource|
| -t --tenantid             | The tenantid to scale resource for.                                                                                                                                |
| --uniqueid |  The uniqueid of resource to be scaled .|
| --type |  The type of resource (PersistentDisk, SqlDatabase, SqlElasticPoolDatabase) .|
| --newsize |  The new resource size for disk (4,8,16,32,64,128,....) .|

---

# Extension Commands

## omnia extensions new

Registers a new extension in Omnia Cloud

##### Example<a id="example-extensions-new"></a>
```
omnia extensions new --name "My Extension" 
```

##### Required Parameters<a id="required-parameters-extensions-new"></a>

| Name   | Description                       |
| ------ | --------------------------------- |
| --name | A friendly name of the extension. |

##### Optional Parameters<a id="optional-parameters-extensions-new"></a>

| Name | Description                                                    |
| ---- | -------------------------------------------------------------- |
| --id | The unique id of the extension, can be found in extension.json |

---

## omnia extensions restart

Restart services in Omnia Cloud for a specific tenant or all tenants in a specific cluster

##### Example<a id="example-extensions-restart"></a>
```
//Restart services in a tenant
omnia extensions restart all --tenantid
omnia extensions restart service --tenantid --serviceid
omnia extensions restart extension --tenantid --extensionid

//Restart omnia-system services
omnia extensions restart all --clusterid

//Restart services in all tenants in a cluster
omnia extensions restart service --clusterid --serviceid
omnia extensions restart extension --clusterid --extensionid

//Reorder and restart services all tenants in a cluster
omnia extensions restart all --clusterid --reorder
omnia extensions restart service --clusterid --serviceid --reorder
omnia extensions restart extension --clusterid --extensionid --reorder
```

##### Required Parameters<a id="required-parameters-extensions-restart"></a>

| Name                      | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| --tenantid                | The tenant to restart services on                            |
| --serviceid --extensionid | required depending if restart target is service or extension |

##### Optional Parameters<a id="optional-parameters-extensions-restart"></a>

| Name      | Description                                                |
| --------- | ---------------------------------------------------------- |
| --nomercy | Restarts all services immediately even scaled out instances |
| --reorder | Reorder services, only apply for cluster level |

---

## omnia extensions list

List extensions where i am a owner or public extensions that i can install in Tenant

##### Example<a id="example-extensions-list"></a>
```
omnia extensions list
```

##### Required Parameters<a id="required-parameters-extensions-list"></a>

No required parameters  

##### Optional Parameters<a id="optional-parameters-extensions-list"></a>

No optional parameters

---

## omnia extensions versions

Lists versions pushed for extension that can be installed in Tenants

##### Example<a id="example-extensions-versions"></a>
```
Lists all versions for Omnia
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa

Lists all versions for Omnia starting with 6.
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:6*

Lists all preview versions for Omnia 6.0.0 
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:6.0.0-preview*

Lists all preview versions for Omnia starting with 6.*
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:6.*-preview*
```

##### Required Parameters<a id="required-parameters-extensions-versions"></a>

No required parameters  
    

##### Optional Parameters<a id="optional-parameters-extensions-versions"></a>

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| --intent | The intent of the versions can be (dev, prod). |

---

## omnia extensions push

Pushes a new version of an extension and makes it available to be installed. The intent controls on which tenants this version can be installed. For example if a tenant has been provisioned with intent dev, only versions with intent dev can be installed onto that tenant.

##### Example<a id="example-extensions-push"></a>
```
omnia extensions push {extensionid}:{version} --intent dev
```

##### Required Parameters<a id="required-parameters-extensions-push"></a>

| Name     | Description                                |
| -------- | ------------------------------------------ |
| --intent | The intent of the push can be (dev, prod). |
    

##### Optional Parameters<a id="optional-parameters-extensions-push"></a>

No optional parameters

---

## omnia extensions deploy

Deploys extension versions to tenants. 

##### Example<a id="example-extensions-deploy"></a>
```
Deploys specific version of Omnia version 6.0.0 
omnia extensions deploy aa000000-0000-aaaa-0000-0000000000aa:6.0.0 --tenantid {tenantId}

Deploys latest patch version of Omnia for 6.0 release
omnia extensions deploy aa000000-0000-aaaa-0000-0000000000aa:6.0.* --tenantid {tenantId}

Deploys latest minor and patch version of Omnia for the major 6 release
omnia extensions deploy aa000000-0000-aaaa-0000-0000000000aa:6.* --tenantid {tenantId}

Deploys specific version of Omnia version 6.0.0 to the tenant that has a high-level of Deployment Security
omnia extensions deploy aa000000-0000-aaaa-0000-0000000000aa:6.0.0 --tenantid {tenantId} --code {yy-dd-MM-m}

```

##### Required Parameters<a id="required-parameters-extensions-deploy"></a>

| Name       | Description               |
| ---------- | ------------------------- |
| --tenantid | The tenantid to deploy to |
    

##### Optional Parameters<a id="optional-parameters-extensions-deploy"></a>

| Name      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| --prerun  | The serviceId of a optional service to run before the deployment |
| --postrun | The serviceId of a optional service to run after the deployment  |
| --groupid | A group id to use a deployment group |
| -o --onlyupdate | Only deploy the new version when the tenant has already installed the extension    |
| -s --skipifsameorhigher | Skip the deployment when the tenant has already installed the same or higher version  |
| -w --wait| Waiting times between those extensions in seconds. In case using the extension group  |
| -r --restart| Auto restart the tenant after deploying  |
| --scalelevel| Auto scale up the database for running prerun/postrun. Options: ("small", "medium", "large")|
| --increasesqlbyid| Specify the SQL resource Unique Id that needs to scale up if the extension has many SQL resources  |
| --code    | The code needs to be entered when deploy to a high-level Deployment Security tenant (format: yy-dd-MM-m) |

---

## omnia extensions retract

Retracts extension in a tenant or cluster. 

##### Example<a id="example-extensions-retract"></a>
```
omnia extensions retract {extensionId} --tenantid  {tenantId}

```

##### Required Parameters<a id="required-parameters-extensions-retract"></a>

| Name       | Description               |
| ---------- | ------------------------- |
| extensionId | The extensionId to retract from |
| --tenantId or --clusterid |The deployment source Id of the extension |

    

##### Optional Parameters<a id="optional-parameters-extensions-retract"></a>

| Name      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| --tenantId  | Tenant id that the extension being retract |
| --clusterid | Cluster id that the extension being retract  |

---


## omnia extensions revert

Revert extension versions and <b>databases</b> in a tenant. It only supports reverting to one previous version within 7 days since it had been installed.

##### Example<a id="example-extensions-revert"></a>
```
omnia extensions revert {extensionId:extensionVersion} --tenantid  {tenantId} --code yy-dd-MM-m

```

##### Required Parameters<a id="required-parameters-extensions-retract"></a>

| Name       | Description               |
| ---------- | ------------------------- |
| extensionId | The extensionId to revert |
| extensionVersion | The version of extension |
| --tenantId |The tenant Id of the extension |
| --code    | The code needs to be entered (format: yy-dd-MM-m) |
    

##### Optional Parameters<a id="optional-parameters-extensions-retract"></a>

| Name      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| extensionGroupId  | The extension group Id to revert |
| -w --wait| Waiting times between those extensions in seconds. In case using the extension group  |
| -r --restart| Auto restart the tenant after deploying (true is default) |


---


# Extension Groups Commands

With extension groups its possible to add several extensions to a group and then deploy all extensions in the group to a tenant or a tenant group. The real power of extension groups is when combining the versions to include using pattern matching. [Check the versioning reference](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#versioning-reference)

## omnia extgroups new

Registers a new extension group in Omnia Cloud

##### Example<a id="example-extgroups-new"></a>
```
omnia extgroups new --name "MyExtensionGroup" --intent prod
```

##### Required Parameters<a id="required-parameters-extgroups-new"></a>

| Name     | Description                   |
| -------- | ----------------------------- |
| --name   | A friendly name of the group. |
| --intent | The intent of the group.      |

##### Optional Parameters<a id="optional-parameters-extgroups-new"></a>

No optional parameters

---

## omnia extgroups addversion

Adds a extension version to the extension group

##### Example<a id="example-extgroups-addversion"></a>
```
omnia extgroups addversion --groupid {mygroupid} --version {extensionid:version}
```

##### Required Parameters<a id="required-parameters-extgroups-addversion"></a>

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| --groupid | The extension group id to add the version to |
| --version | The version to add                           |

##### Optional Parameters<a id="optional-parameters-extgroups-addversion"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

---

## omnia extgroups deleteversion

Deletes a extension version from the extension group

##### Example<a id="example-extgroups-deleteversion"></a>
```
omnia extgroups deleteversion --groupid {mygroupid} --version {extensionid:version}
```

##### Required Parameters<a id="required-parameters-extgroups-deleteversion"></a>

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| --groupid | The extension group id to delete the version from |
| --version | The version to delete                             |

##### Optional Parameters<a id="optional-parameters-extgroups-deleteversion"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

---

## omnia extgroups delete

Deletes an extension group from Omnia Cloud

##### Example<a id="example-extgroups-delete"></a>
```
omnia extgroups delete {groupid}
```

##### Required Parameters<a id="required-parameters-extgroups-delete"></a>

No required parameters

##### Optional Parameters<a id="optional-parameters-extgroups-delete"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

---

# Deployment Groups Commands

With deployment groups its possible to add several tenants to a group and then deploy an extension or extensions group to all tenants in the group

## omnia depgroups new

Registers a new deployment group in Omnia Cloud

##### Example<a id="example-depgroups-new"></a>
```
omnia depgroups new --name "MyDeploymentGroup" --intent prod
```

##### Required Parameters<a id="required-parameters-depgroups-new"></a>

| Name     | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| --name   | A friendly name of the group.                                                  |
| --intent | The intent of the group. Only targets of same intent can be added to the group |

##### Optional Parameters<a id="optional-parameters-depgroups-new"></a>

No optional parameters

---

## omnia depgroups addtarget

Adds a target to the deployment group

##### Example<a id="example-depgroups-addtarget"></a>
```
omnia depgroups addtarget --groupid {mygroupid} --targetid {tenantid}
```

##### Required Parameters<a id="required-parameters-depgroups-addtarget"></a>

| Name       | Description                                  |
| ---------- | -------------------------------------------- |
| --groupid  | The deployment group id to add the target to |
| --targetid | The target to add, e.g. tenant id            |

##### Optional Parameters<a id="optional-parameters-depgroups-addtarget"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

---   

## omnia depgroups deletetarget

Deletes a target from the deployment group

##### Example<a id="example-depgroups-deletetarget"></a>
```
omnia depgroups deletetarget --groupid {mygroupid} --targetid {tenantid}
```

##### Required Parameters<a id="required-parameters-depgroups-deletetarget"></a>

| Name       | Description                                       |
| ---------- | ------------------------------------------------- |
| --groupid  | The deployment group id to delete the target from |
| --targetid | The target to delete, e.g. tenant id              |

##### Optional Parameters<a id="optional-parameters-depgroups-deletetarget"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

---

## omnia depgroups delete

Deletes a deployment group from Omnia Cloud

##### Example<a id="example-depgroups-delete"></a>
```
omnia depgroups delete {groupid}
```

##### Required Parameters<a id="required-parameters-depgroups-delete"></a>

No required parameters

##### Optional Parameters<a id="optional-parameters-depgroups-delete"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

---

# Extension Secret Commands

Its possible to generate several client credentials for an extension. You can put a pair of ClientId (aka extension id) and ClientSecret in http headers to request Omnia API.

## omnia secrets add

Generate a cloud-secret or a tenant-secret for an extension.

##### Example<a id="example-secrets-add"></a>
```
omnia secrets add --extensionid {extensionid}  --name {name}

omnia secrets add --tenantid {tenantid} --extensionid {extensionid} --name {name} 
```

##### Required Parameters<a id="required-parameters-secrets-add"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --tenantid    | Required depending if the secret is tenant-secret     |
| --extensionid | The extensionid of the extension to generate a secret |
| --name        | The name of secret                                    |

##### Optional Parameters<a id="optional-parameters-secrets-add"></a>
| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

---

## omnia secrets remove

Remove a cloud-secret or a tenant-secret from an extension.

##### Example<a id="example-secrets-remove"></a>
```
omnia secrets remove --tenantid {tenantid} --extensionid {extensionid} --secret {secret}

omnia secrets remove --extensionid {extensionid} --secret {secret}
```

##### Required Parameters<a id="required-parameters-secrets-remove"></a>

| Name          | Description                                         |
| ------------- | --------------------------------------------------- |
| --tenantid    | Required depending if the secret is tenant-secret   |
| --extensionid | The extensionid of the extension to remove a secret |
| --secret      | The secret value to remove                          |

---

## omnia secrets list

List all cloud-secrets or tenant-secrets of an extension.

##### Example<a id="example-secrets-list"></a>
```
omnia secrets list --tenantid {tenantid} --extensionid {extensionid}

omnia secrets list --extensionid {extensionid}
```

##### Required Parameters<a id="required-parameters-secrets-list"></a>

| Name          | Description                                          |
| ------------- | ---------------------------------------------------- |
| --tenantid    | Required depending if the secrets are tenant-secrets |
| --extensionid | The extensionid of the extension to list all secrets |

##### Optional Parameters<a id="optional-parameters-secrets-list"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

---

# Cloud Secret Commands

Its possible to generate several client credentials for an Omnia Cloud Application..

## omnia cloudsecrets add

Add a cloud-secret to map with an Azure App.

##### Example<a id="example-cloudsecrets-add"></a>
```
omnia cloudsecrets add --name "Omnia Cloud - Api" --appid f144ebc9-5703-4c52-9417-ab2171223d9c --type Api --renewbefore 30 --validityindays 32 --notifyemails nam.nguyen.khanh.hoai@preciofishbone.se,elias.haddad@omniaintranet.com

```

##### Required Parameters<a id="required-parameters-cloudsecrets-add"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --name        | The name of cloud secret                                    |
| --appid    | The Azure Application Object Id (not client Id)     |
| --type | Type of the application (Api, Orchestrator, AcrAccess, Services) |
| --renewbefore | Specifies how many days before the client secret expires that it should be renewed |
| --validityindays | Specifies how many days the renewed client secret should be valid for |


##### Optional Parameters<a id="optional-parameters-cloudsecrets-add"></a>
| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --validityinyears | Specifies how many years the renewed client secret should be valid for   |
| --notifyemails | The list of emails that receive notification about the secret|
| --autorenew | Auto renew if it matches renew rule|
| --output json | Return data as json   |

---

## omnia cloudsecrets update

Update a cloud-secret.

##### Example<a id="example-cloudsecrets-update"></a>
```
omnia cloudsecrets update f144ebc9-5703-4c52-9417-ab2171223d9c --name "Omnia Cloud - Api" --renewbefore 30 --validityindays 32 --autorenew --notifyemails nam.nguyen.khanh.hoai@preciofishbone.se,elias.haddad@omniaintranet.com

```

##### Required Parameters<a id="required-parameters-cloudsecrets-update"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --name        | The name of cloud secret                                    |
| --renewbefore | Specifies how many days before the client secret expires that it should be renewed |
| --validityindays | Specifies how many days the renewed client secret should be valid for |
| --validityinyears | Specifies how many years the renewed client secret should be valid for   |
| --notifyemails | The list of emails that receive notification about the secret|
| --autorenew | Auto renew if it matches renew rule|

---


## omnia cloudsecrets remove

Remove a cloud secret.

##### Example<a id="example-cloudsecrets-remove"></a>
```
omnia cloudsecrets remove {cloudSecretId}
```

##### Required Parameters<a id="required-parameters-cloudsecrets-remove"></a>

| Name          | Description                                         |
| ------------- | --------------------------------------------------- |
| --cloudSecretId    | The id of cloud secret being removed   |

---

## omnia cloudsecrets list

List all cloud secrets of Omnia.

##### Example<a id="example-cloudsecrets-list"></a>
```
omnia cloudsecrets list

omnia cloudsecrets list {cloudSecretId}
```

##### Optional Parameters<a id="optional-parameters-cloudsecrets-list"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --cloudSecretId | The Id of the cloud secret to view detail   |
| --output json | Return data as json   |

---

## omnia cloudsecrets renew

Renew client secret for an Application and rollout to AKS.

##### Example<a id="example-cloudsecrets-renew"></a>
```
omnia cloudsecrets renew --all
omnia cloudsecrets renew cloudSecretId --generate
```

##### Required Parameters<a id="required-parameters-cloudsecrets-renew"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --cloudSecretId        | The Id of cloud secret need to renew                                 |


##### Optional Parameters<a id="optional-parameters-cloudsecrets-renew"></a>
| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| -a --all | Trigger renew all cloud secrets   |
| -g --generate | Generate a new secret before rollout to AKS   |

---


# Tenant Certificate Commands

It's possible to manage certificates for tenants.


## omnia certs export

To export .cer and .key files from a .pfx, .pem, or .cer file containing a private key, please use the following command:

##### Example<a id="example-certs-export"></a>
```
omnia certs export --path {{pathToPfx}} --password {{password}}

```
##### Required Parameters<a id="required-parameters-certs-export"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --path    | The location of certificate (.pfx, .pem, or .cer) file     |
| --password | The password for the certificate file |

##### Optional Parameters<a id="optional-parameters-certs-list"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

---

## omnia certs add

Add a new certificate for a tenant (used for Custom Domain functionality).

##### Example<a id="example-certs-add"></a>
```
omnia certs add --cert "C:\Certs\wildcard_preciofishbone_se.cer" --key "C:\Certs\wildcard_preciofishbone_se.key" --tenantid {tenantid}
```
##### Required Parameters<a id="required-parameters-certs-add"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --cert | The location for certificate (.cer or .crt) file |
| --key        | The location for certificate (.key) file               |                    |
| --tenantid    | The Id of tenant that needs a new certificate      |

---

## omnia certs adddigicert

Add a new certificate for a tenant(used for Custom Domain functionality) and Omnia Cloud from DigiCert.

##### Example<a id="example-certs-adddigicert"></a>
```
omnia certs adddigicert --name {name} --accountid {accountid} --orgid {orgid} --digicertid {digicertid} --renewbefore 30 --apikey {apikey} --tenantid {tenantid}
```
##### Required Parameters<a id="required-parameters-certs-adddigicert"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --name | Name of certificate |
| --accountid | The Account id in Degicert |
| --orgid        | The Organization  id in Degicert     |  
| --orderid        | The Order id of the certificate in Degicert |  
| --renewbefore     | Specifies how many days before the certificate expires that it should be renewed |  

##### Optional Parameters<a id="optional-parameters-certs-adddigicert"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --name | Name of certificate |
| --validityindays     | Specifies how many days the renewed certificate should be valid for |  
| --validityinyears     | Specifies how many years the renewed certificate should be valid for (default:1)    |  
| --apikey        | The Api key for a request to Digicert api.Leave it blank if you would like to get from the keyvault. Only set if you know the correct value |                    |
| --tenantid    | The Id of the tenant that needs a new certificate. Unset if you are adding a certificate for Cloud |
| --notifyemails | The list of emails that receive notification about the certificate|


#### Notes

This'll first generate key and CSR that uses for reissue a new certificate.

---

## omnia certs list

List all certificates of a tenant/ Cloud.

##### Example<a id="example-certs-list"></a>
```
omnia certs list --tenantid {tenantid}
```

##### Optional Parameters<a id="optional-parameters-certs-list"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --tenantid    | The Id of tenant     |
| --output json | Return data as json   |

---

## omnia certs update

Update a Omnia Cloud certificate. This looks to be the same as omnia certs cloudupdate, but without the part where Orchestrator tells all AKS clusters to update their certificates.

##### Example<a id="example-certs-update"></a>
```
omnia certs update --id {certificateid} --cert "C:\Certs\wildcard_preciofishbone_se.cer" --key "C:\Certs\wildcard_preciofishbone_se.key"
```
##### Required Parameters<a id="required-parameters-certs-update"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --id    | The Id of certificate needs to update     |
| --cert | The location for certificate (.cer) file |
| --key        | The location for certificate (.key) file       |                            |

---

## omnia certs cloudupdate (deprecated, the new ways is "omnia certs clouddeploy" instead)

Update certificates used by Omnia and AKS in AKV and AKS based on a .cer and .key file. Doesn't care about actual certificate name or key - accepts 2 hardcoded values for name, either OmniaCloudNetCert or OmniaAzureAdCert.

##### Example<a id="example-certs-cloudupdate"></a>
```
omnia certs cloudupdate "OmniaCloudNetCert" --path "C:\projects\omniacloud.net.cer" --password "ZKh4GgjQnBVVIGfXJ7kz1DalEe0Lmnqr5ib84CT2936WFvHtNc" --key "C:\projects\omniacloud.net.key" --tenantid {tenantId}  --code "22-05-10-44"
```
##### Required Parameters<a id="required-parameters-certs-cloudupdate"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --id    | The Id of certificate needs to update     |
| --cert | The location for certificate (.cer) file |
| --key        | The location for certificate (.key) file       |  
| -- code    | You know. |

#### Notes

This'll first update the values in Azure Key Vault, and then instruct Orchestrator to make all AKS clusters update their Secret called OmniaCloud with a new value from the Key Vault.

---

## omnia certs reissue

Update and reissue a certificate for a tenant(used for Custom Domain functionality) and Omnia Cloud from DigiCert.

##### Example<a id="example-certs-reissue"></a>
```
omnia certs reissue {certId} --name {name} --accountid {accountid} --orgid {orgid} --digicertid {digicertid} --renewbefore 30 --validityinyears 1 --apikey {apikey}
```
##### Required Parameters<a id="required-parameters-certs-reissue"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| certId | The id of updating certificate |

##### Optional Parameters<a id="optional-parameters-certs-reissue"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --name | Name of certificate |
| --accountid | The Account id in Degicert |
| --orgid        | The Organization  id in Degicert     |  
| --orderid        | The Order id of the certificate in Degicert |  
| --renewbefore     | Specifies how many days before the certificate expires that it should be renewed|  
| --validityindays     | Specifies how many days the renewed certificate should be valid for|  
| --validityinyears     | Specifies how many years the renewed certificate should be valid for (default:1)    |  
| --apikey        | The Api key for a request to Digicert api.Leave it blank if you would like to get from the keyvault. Only set if you know the correct value |                    |
| --tenantid    | The Id of the tenant that needs a new certificate. Unset if you are adding a certificate for Cloud |
| --notifyemails | The list of emails that receive notification about the certificate|

---
## omnia certs import

Import a certificate from Digicert.com to Azure Key Vault, and then export it to .cer and .key which are being used to instruct Orchestrator to make all AKS clusters update their Secret called OmniaCloud with a new value from the Key Vault.

##### Example<a id="example-certs-import"></a>
```
omnia certs import {certid}
```
##### Required Parameters<a id="required-parameters-certs-import"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| certid | Cloud certificate id. Only when using DigiCert  |

##### Optional Parameters<a id="optional-parameters-certs-import"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --tenantid | The tenant id that has custom domain and use the Digicert |

## omnia certs clouddeploy

Roll out certificates used by Omnia and AKS in AKV and AKS based on a Digital Trust knowns as Digicert.com or files.

##### Example<a id="example-certs-deploy"></a>
```
omnia certs clouddeploy --certid {certid} --type {type} --path {cert} --key {key} --tenantid {tenantId} --code "23-03-23-44" 
```
##### Required Parameters<a id="required-parameters-certs-deploy"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --certid | Cloud certificate id. Only when using DigiCert  |
| --type        | The certificate (AzureAd,OmniaCloud )     |  
| --code    | You know. |

##### Optional Parameters<a id="optional-parameters-certs-deploy"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --path | The location for certificate (.cer) file. Not required for DigiCert |
| --key        | The location for certificate (.key) file. Not required for DigiCert      |  
| --password        | The password of the certificate. Not required for DigiCert      |  
| --tenantid        | Deploy the new cert for only specfic tenant has id  |  


#### Notes

There are two ways to deploy a certificate. Deploy from a DigiCert that has already been added or from .cer and .key files. 

---

## omnia domain update

Map a domain with added certificate. The domain you use must already be uploaded with omnia certs add, the private key (.key) needs to be cleartext RSA key with no UTF-8 BOM encoding, and the certificate file (.cer or .crt) has to actually be PEM-compatible (base64 translation of the x509 ASN.1 keys).

It's a bit confusing that you can, in fact, upload incompatible certificates by using omnia certs add. But you'll get some errors about missing PEM details from AKS if the certificate is not valid.

##### Example<a id="example-domain-update"></a>

```
omnia domain update --name customer.com --certid {certificateid} --keyid {keyid} --tenantid {tenantid}
```

##### Required Parameters<a id="required-parameters-domain-update"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --name    | The domain name needs to add certificate     |
| --certid    | The Id of certificate added     |
| --keyid    | The Id of key added (does not require if using DigiCert)  |
| --tenantid | The Id of tenant that certificate associated |

---

## omnia domain dnspreview

Generate DNS entries for the custom domain (should output a bunch of CNAME rows you or the customer can copy-paste to their DNS config).

##### Example<a if="example-domain-dnspreview"></a>

```
omnia domain dnspreview -d intranet.contoso.com -t {tenantid}
```

##### Required Parameters<a id="required-parameters-domain-dnspreview"></a>

| Name      | Description      |
| --------- | ---------------- |
| -d|--domain | The custom domain, like intranet.contoso.com |
| -t|--tenantid | The id (Guid) of the tenant you're generating the values for |

---

## omnia certs delete

Delete a certificate. The certificate can only be deleted when it has expired.

##### Example<a id="example-certs-delete"></a>
```
omnia certs delete {certificateid} --tenantid {tenantid}
```
##### Required Parameters<a id="required-parameters-certs-delete"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| certificateid    | The Id of certificate needs to delete     |

##### Optional Parameters<a id="optional-parameters-certs-delete"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --tenantid | The Id of tenant that certificate associated. Unset when deleting a cloud certificate |

---


# Localization Commands

Makes it possible to add/remove localization files that should be used when deploying an omnia service in an extension. You work on localization files in json format with the same naming convetion that is used if specifying files deployed as part of the "checked in" code. E.g. an omnia service with id:d60fa82a-129a-41a9-93ce-d784dcb217b0 and danish localizations should have format: d60fa82a-129a-41a9-93ce-d784dcb217b0_localized.loc.da-dk.json. The version add with a localization files is important, as only version with the same preRealse part will be used, and only versions <= to the version being deployed.

## omnia loc upload

Uploads a specific localization file to be used by a service, i.e. the service with the id matching the guid prefixing the file name.
Also specifiying which version these localizations correlates to i.e. in relation to which version of the extension/omnia service is being deployed.
E.g. Will pick up latest version <= in relation to version deployed with the exact same sematic version preRelase part.

##### Example<a id="example-loc-upload"></a>
```
omnia loc upload --src {localizationFilePath}  --v {semanticVersioning}
```

##### Required Parameters<a id="required-parameters-loc-upload"></a>

| Name          | Description                                             |
| ------------- | --------------------------------------------------------|
| --src         | Path to localization file with filename described above |
| --v           | Sematic version, prerelease part is important           |

---

## omnia loc delete

Delete a specific localization file that has been added for a omnia service.
I.e. deletes a specific language with the specific version for a specific omnia service.
(See list command to see the current files)

##### Example<a id="example-loc-delete"></a>
```
omnia loc delete --serviceId {serviceId} --lang {languageTag} --v {semanticVersion}
```

##### Required Parameters<a id="required-parameters-loc-delete"></a>

| Name          | Description                                         |
| ------------- | --------------------------------------------------- |
| --serviceId   | The id of the omnia service for which to delete     |
| --lang        | The language of the file that should be deleted     |
| --v           | The version to delete                               |


---

## omnia loc list

List all localization files that have been deployed, supports some filter options. I.e. For a spcific omnia service, only a specific language etc.
This command also has som additional options, you can enable a simple diff between the versions listed. Or add an option to see which versions would be used if deploying a specific omnia service with a specific version.

##### Example<a id="example-loc-list"></a>
```
omnia loc list

omnia loc list --serviceId {serviceId}

omnia loc list --serviceId {serviceId} --lang {languageTag}

omnia loc list --lang {languageTag}

omnia loc list --serviceId {serviceId} --lang {languageTag} --diff

omnia loc list  --diff

omnia loc list  --match {semeanticVersion}

omnia loc list --serviceId {serviceId} --match {semeanticVersion}

```
##### Optional Parameters<a id="optional-parameters-loc-list"></a>

| Name          | Description                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------|
| --serviceId   | The id of the omnia service                                                                                                    |
| --lang        | A specific language tag e.g. en-us                                                                                             |
| --diff        | An option to enable selection of what to diff, for the versins listed. Can't be combined with --match                          |
| --match       | An option to see which localization files would (currently) deploy if deploying a specific version, Can't combine with --diff  |
| --output json | Return data as json   |

---

## omnia loc download

Downloads a specific localization file. Downloaded file gets post-fix .semanticversion.json

##### Example<a id="example-loc-download"></a>
```
omnia loc download --output {downloadFolderPath} --serviceId {serviceId} --lang {languageTag} --v {semanticVersion}
```

##### Required Parameters<a id="required-parameters-loc-download"></a>

| Name          | Description                                         |
| ------------- | --------------------------------------------------- |
| -o --output      | The path of the destination folder                  |

##### Optional Parameters<a id="optional-parameters-loc-download"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --serviceId   | The id of the omnia service for which to download     |
| --lang        | The language of the file that should be download     |
| --v           | The version to download                             |

---

## omnia loc diff

Download a JSON file containing all the diff labels when comparing the JSON structure of the source code with the latest en-us localization file.

##### Example<a id="example-loc-diff"></a>
```
omnia loc diff --output {downloadFolderPath} --serviceId bb000000-0000-bbbb-0000-0000000000bb --extVersion 6.13.10
```

##### Required Parameters<a id="required-parameters-loc-diff"></a>

| Name          | Description                                         |
| ------------- | --------------------------------------------------- |
| -o --output      | The path of the destination folder                  |
| --serviceId   | The id of the omnia service for which to compare     |
| --extVersion   | Version of the Extension pakcage that the service belongs to     |

##### Optional Parameters<a id="optional-parameters-loc-diff"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --v           | A specific localization file version to compare.        |
| --lang           | A specific language to compare.        |
| --src           | A source json file to compare.        |

---

## omnia loc patch

Patch an existing version of service localization json file.

##### Example<a id="example-loc-patch"></a>
```
omnia loc patch --src D:\loc\bb000000-0000-bbbb-0000-0000000000bb_localized.loc.sv-se.json --v 6.7.0
```

##### Required Parameters<a id="required-parameters-loc-patch"></a>

| Name          | Description                                         |
| ------------- | --------------------------------------------------- |
| --src      | Language patch json file, on format serviceid_localized.loc.languagetag.json                 |
| ---v   | Sematic version    |

##### Optional Parameters<a id="optional-parameters-loc-patch"></a>

No optional parameters

---

# Permissions Commands

With permissions, its possible to grant permission for any users to do actions in Omnia Cli

## All permission roles available in Omnia Cli:

| Id                                    | Name          | Parent Role | Description |
| ------------------------------------- | ------------- | ----------- | ----------- |
| 11e1f111-c773-4f8d-8d40-8767d707f071  | Omnia.Cloud.Admin |         | Global admin can do everything | 
| 0c33d62a-cc9b-4880-9506-8c60ddfccdcf  | Omnia.Clusters.Admin | Omnia.Cloud.Admin | Can Create/Delete/Scale cluster | 
| 842a4da4-b482-4d61-a417-2426a4a752bc  | Omnia.Cluster.Manager |  Omnia.Clusters.Admin | Can restart node/cluster and scale extension in tenant |
| 4a16f679-deec-40cb-a11d-805e7b4f82ab  | Omnia.License.Admin | Omnia.Cloud.Admin | Have the same permission as License owner |
| c79fd690-18b8-42a1-b540-9ae77193f432  | Omnia.Release.Admin | Omnia.Cloud.Admin | Can deploy any extensions |
| f023316e-25d5-4139-a31b-7e07a7d73ce7  | Omnia.Extension.Admin | Omnia.Cloud.Admin | Have the same permission as Extension owner |
| 8146c17e-ddf5-4020-b96c-298818f9180f  | Omnia.ServicePackageGroup.Admin | Omnia.Cloud.Admin | Have the same permission as Extension Group owner |
| 585f098e-ecf4-490f-a13c-9cbd662fc377  | Omnia.DeploymentGroup.Admin | Omnia.Cloud.Admin | Have the same permission as Deployment Group owner |
| 9af39436-e073-40c6-bf01-7ab6cae8a93c  | Omnia.Tenants.Creator | Omnia.Cloud.Admin | Can create a new tenant
| 6b96e280-e092-4b8f-a721-c4623d4ef14c  | Omnia.Tenant.Admin | Omnia.Cloud.Admin | Have the same permission as Tenant owner. Deploy and retract public extensions |
| 731cd4d6-50aa-4463-bad4-b21d9aceadb2  | Omnia.Cloud.FirstLineSupport | Omnia.Cloud.Admin | List all tenants, enanble/disable redirect error page, and restart extensions/services |
| 6b99566f-f787-42dd-a216-10ed9e8a8f90  | Omnia.Tenant.FirstLineSupport | Omnia.Tenant.Admin | List authorized tenants, enanble/disable redirect error page, and restart extensions/services |
| deb1fbb9-ee05-4d45-becd-95643ccb6db2  | Omnia.Tenant.Developer | Omnia.Tenant.Admin | List authorized tenants, Deploy and retract custom extensions that the user is the owner of|
| 4bb73e4f-c283-4af8-afac-4fa422943975  | Omnia.Localization.Admin | Omnia.Extension.Admin | Can administrate all localization files |



## omnia permissions add

Grant permission for a specific role to one or more users

##### Example<a id="example-permissions-add"></a>
```
Add global admin
omnia permissions add 11e1f111-c773-4f8d-8d40-8767d707f071 --principals {userName1},{userName2} 

Add release admin
omnia permissions add c79fd690-18b8-42a1-b540-9ae77193f432 --principals {userName1},{userName2}

Add cloud first line support
omnia permissions add 731cd4d6-50aa-4463-bad4-b21d9aceadb2 --principals {userName1},{userName2}

Add cluster roles
omnia permissions add {clusterRoleId} --resource clusterId:{clusterId} --principals {userName1},{userName2}

Add license roles
omnia permissions add {licenseRoleId} --resource licenseId:{licenseId} --principals {userName1},{userName2}

Add extension roles
omnia permissions add {extensionRoleId} --resource servicePackageId:{extensionId} --principals {userName1},{userName2}

Add extension group roles
omnia permissions add {extensionGroupRoleId} --resource servicePackageGroupId:{extensionGroupId} --principals {userName1},{userName2}

Add deployment group roles
omnia permissions add {deploymentGroupRoleId} --resource deploymentGroupId:{deploymentGroupId} --principals {userName1},{userName2}

Add tenant roles
omnia permissions add {tenantRoleId} --resource tenantId:{tenantId} --principals {userName1},{userName2}
```

##### Required Parameters<a id="required-parameters-permissions-add"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --principals    | The username of users to be added                   |

##### Optional Parameters<a id="optional-parameters-permissions-add"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --resource    | The resource string related to the roleId to be added |

---

## omnia permission remove

Remove permission of a specific role for one or more users

##### Example<a id="example-permission-remove"></a>
```
Remove global admin
omnia permissions remove 11e1f111-c773-4f8d-8d40-8767d707f071 --principals {userName1},{userName2} 

Remove release admin
omnia permissions remove c79fd690-18b8-42a1-b540-9ae77193f432 --principals {userName1},{userName2}

Remove cluster roles
omnia permissions remove {clusterRoleId} --resource clusterId:{clusterId} --principals {userName1},{userName2}

Remove license roles
omnia permissions remove {licenseRoleId} --resource licenseId:{licenseId} --principals {userName1},{userName2}

Remove extension roles
omnia permissions remove {extensionRoleId} --resource servicePackageId:{extensionId} --principals {userName1},{userName2}

Remove extension group roles
omnia permissions remove {extensionGroupRoleId} --resource servicePackageGroupId:{extensionGroupId} --principals {userName1},{userName2}

Remove deployment group roles
omnia permissions remove {deploymentGroupRoleId} --resource deploymentGroupId:{deploymentGroupId} --principals {userName1},{userName2}

Remove tenant roles
omnia permissions remove {tenantRoleId} --resource tenantId:{tenantId} --principals {userName1},{userName2}
```

##### Required Parameters<a id="required-parameters-permission-remove"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --principals  | The username of users to be removed                   |

##### Optional Parameters<a id="optional-parameters-permission-remove"></a>

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| --resource    | The resource string related to the roleId to be remove |


---

## omnia permissions list

List all permission bindings of a role.

##### Example<a id="example-permissions-list"></a>
```

omnia permissions list {roleId}

```

##### Required Parameters<a id="required-parameters-permissions-list"></a>
No required parameters

##### Optional Parameters<a id="optional-parameters-permissions-list"></a>
| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

---

# Alert Rules Commands

With alert rules, it's possible to map a service id to one or many alert rules and then deploy an extension that has the service id to a tenant. This makes the Application Insight of this tenant has appropriate alert rules.
## omnia alertrules new

Create a new alert rule for a service id in an extension. With the WebTest template, you can setup a ping test for all tenants.

##### Example<a id="example-alertrules-new"></a>
```
omnia alertrules new --serviceid {serviceid} --name {name} --template SlowResponseTimes

```
##### Required Parameters<a id="required-parameters-alertrules-new"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --serviceid   | The service id that needs to be attached alert rule.   |
| --name        | The name of the alert rule. It should be unique because the AI rules based on name.  |
| --template    | The template of alert rule (SlowResponseTimes, WebTest).                                 |

The query of the alert rule should be input in the text editor.

##### Optional Parameters<a id="optional-parameters-alertrules-new"></a>
| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

## omnia alertrules update

Update an alert rule.

##### Example<a id="example-alertrules-update"></a>
```
omnia alertrules update {alertRuleId} --name {name}

```
##### Required Parameters<a id="required-parameters-alertrules-update"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --alertRuleId | The alert rule id that needs to be update.             |
| --name        | The name of the alert rule. It should be unique because the AI rules based on name.  |

##### Optional Parameters<a id="optional-parameters-alertrules-update"></a>
| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --output json | Return data as json   |

## omnia alertrules list

List all alert rules.

##### Example<a id="example-alertrules-list"></a>
```
omnia alertrules list {alertRuleId}

```
##### Required Parameters<a id="required-parameters-alertrules-list"></a>

No required parameters

##### Optional Parameters<a id="optional-parameters-alertrules-list"></a>
| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --alertRuleId |  The alert rule id needs to view detail.              |
| --output json | Return data as json   |

## omnia alertrules delete

Delete an alert rule.

##### Example<a id="example-alertrules-delete"></a>
```
omnia alertrules delete {alertRuleId}

```
##### Required Parameters<a id="required-parameters-alertrules-delete"></a>


| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --alertRuleId | The alert rule id needs to be deleted.                |


##### Optional Parameters<a id="optional-parameters-alertrules-delete"></a>

No required parameters

---
# Resource Providers Commands

With Resource Providers, it's possible to display all the resource providers ( SqlDatabase, SqlElasticPoolDatabase, StorageAccount).

## omnia resourceproviders list

List all Resource Providers.

##### Example<a id="example-resourceproviders-list"></a>
```
omnia resourceproviders list {providerid}

```
##### Required Parameters<a id="required-parameters-resourceproviders-list"></a>

No required parameters

##### Optional Parameters<a id="optional-parameters-resourceproviders-list"></a>


| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --providerid |  The Resource Providers id needs to view detail.              |
| --output json | Return data as json   |

---
## omnia resourceproviders add

Add a new resource provider. Only support to add SqlElasticPoolDatabase type

##### Example<a id="example-resourceproviders-add"></a>
```
omnia resourceproviders add --name omniauatcloudintentdev3 --type SqlElasticPoolDatabase --region EastUS --intent dev --server omniauatcloudintentdev3.database.windows.net

```
##### Required Parameters<a id="required-parameters-resourceproviders-add"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --name   | The name of new resource provider.|
| --server        | The full server name of sql database.  |
| --type        | The type of new resource provider.  |
| --region        | The region.  |
| --intent        | The intent.  |

##### Optional Parameters<a id="optional-parameters-resourceproviders-add"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --adminusername |  The admin user name of database. It will be Auto generated with Omnia format if empty |
| --adminpassword | The admin password. It will be auto generated with Omnia format if empty   |

---

# Elastic Pools Commands

With elastic pools, it's possible to manage the list of active elastic pools. This helps the database deployment can pick the correct elastic pool for a new database.  If there are more than one active pools, the most empty space pool should be picked up.
## omnia elasticpools new

Create a new elastic pool in the Azure.

##### Example<a id="example-elasticpools-new"></a>
```
omnia elasticpools new --providerid {providerid} --elasticpoolid {elasticpoolid}

```
##### Required Parameters<a id="required-parameters-elasticpools-new"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --providerid   | The resource provider id that the new elastic pool should belong to.|
| --elasticpoolid        | The Azure elastic pool Id.  |


##### Optional Parameters<a id="optional-parameters-elasticpools-new"></a>
No optional parameters

## omnia elasticpools update

Update an elastic pool.

##### Example<a id="example-elasticpools-update"></a>
```
omnia elasticpools update {elasticPoolId} --status {status}

```
##### Required Parameters<a id="required-parameters-elasticpools-update"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --elasticPoolId | The elastic pool id that needs to be update.             |
| --status        | The new status of the elastic pool (Available = 1, Full = 2).  |

##### Optional Parameters<a id="optional-parameters-elasticpools-update"></a>
No optional parameters

## omnia elasticpools list

List all elastic pools.

##### Example<a id="example-elasticpools-list"></a>
```
omnia elasticpools list {elasticPoolId}

```
##### Required Parameters<a id="required-parameters-elasticpools-list"></a>

No required parameters

##### Optional Parameters<a id="optional-parameters-elasticpools-list"></a>


| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --elasticPoolId |  The elastic pool id needs to view detail.              |


## omnia elasticpools delete

Delete an elastic pool in the Cosmos.

##### Example<a id="example-elasticpools-delete"></a>
```
omnia elasticpools delete {elasticPoolId}

```
##### Required Parameters<a id="required-parameters-elasticpools-delete"></a>


| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --elasticPoolId | The elastic pool id needs to be deleted.                |


##### Optional Parameters<a id="optional-parameters-elasticpools-delete"></a>

No required parameters

## omnia elasticpools ensure

Ensure an elastic pool in the Cosmos.

##### Example<a id="example-elasticpools-ensure"></a>
```
omnia elasticpools ensure --providerid {providerid} --name {name} --status {name}

```
##### Required Parameters<a id="required-parameters-elasticpools-ensure"></a>


| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --providerid   | The resource provider id that the new elastic pool should belong to.|
| --name        | The Azure elastic pool name.  |
| --status        | The status of the elastic pool (Available = 1, Full = 2).  |


##### Optional Parameters<a id="optional-parameters-elasticpools-ensure"></a>

No required parameters

---

# Reporting Commands

With reporting, it's possible to manage the list of reports. This helps register a new report for a tenant. A daily timer job will pick up all pending reports and generate new report files.
## omnia reports new

Schedule a new report.

##### Example<a id="example-reports-new"></a>
```
omnia reports new --targetId {TenantId} --start {StartDate} --end {EndDate} --type {ReportType}

```
##### Required Parameters<a id="required-parameters-reports-new"></a>

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --targetId   | The tenant/cluster id that report should target to. It's not required for UserTenantAccessByCloud|
| --start        | The start time of filter in the report.  |
| --end        | The end time of filter in the report.  |
| --type        | The report type (UserTenantAccess, UserTenantAccessByCluster, UserTenantAccessByCloud).  |


##### Optional Parameters<a id="optional-parameters-reports-new"></a>
No optional parameters

## omnia reports list

List all reports.

##### Example<a id="example-reports-list"></a>
```
omnia reports list {reportId}

```
##### Required Parameters<a id="required-parameters-reports-list"></a>

No required parameters

##### Optional Parameters<a id="optional-parameters-reports-list"></a>


| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --reportsId |  The report id needs to view detail.              |


## omnia reports delete

Delete an report in the Cosmos.

##### Example<a id="example-reports-delete"></a>
```
omnia reports delete {reportId}

```
##### Required Parameters<a id="required-parameters-reports-delete"></a>


| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --reportId | The report id needs to be deleted.                |


##### Optional Parameters<a id="optional-parameters-reports-delete"></a>

No required parameters


---

# Regular Mode Deployment for version 6 to 7 <a id="regular-mode-deployment"></a>

A deployment flow for a ragular tenant that no needs to maintain system uptime during upgrades.

## Phase 1 - Deploy and run migration<a id="regular-mode-deployment-phase1"></a>

Deploy new version with --prerun to execute the migration flow.

##### Optional Commands<a id="optional-commands-regular-mode-deployment-phase1"></a>
```
--Enable error page
omnia tenants update enableerror {tenantid}

--Update environment variable for WP
omnia tenants update envVar set --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_RULES --value '*,!NotificationPanelHistory'

--Update environment variable for WCM
omnia tenants update envVar set --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_RULES --value '*,!PageSummaryStatistics,!VisitedPages'

```
##### Required Commands<a id="required-commands-regular-mode-deployment-phase1"></a>
```
--Deploy and run migration for Omnia Extension
omnia extensions deploy aa000000-0000-aaaa-0000-0000000000aa:7.1.* --tenantid {tenantId} -s -o --prerun 1cacb55c-202b-4cd7-819d-11bad92fa9cb
--Deploy and run migration for WP Extension
omnia extensions deploy d5bf3472-ddc6-44a9-b78b-6c52b2dfedea:7.1.* --tenantid {tenantId} -s -o --prerun 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --scalelevel small
--Deploy and run migration for WCM Extension
omnia extensions deploy ff629048-1044-4cd5-b0d5-1e2f920f6374:7.1.* --tenantid {tenantId} -s -o --prerun 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --scalelevel medium
--Deploy and run migration for MS Extension
omnia extensions deploy 4d5013fe-0c01-4e7c-9664-b7f28e9013e3:7.1.* --tenantid {tenantId} -s -o --prerun 6db4e340-e3ec-4913-a197-b65feb9371e4
--Deploy and run migration for Feed Extension
omnia extensions deploy 94418fb5-2a96-4f20-9c80-e2f27a0a62f0:7.1.* --tenantid {tenantId} -s -o --prerun 1a5f39c9-06cf-4de4-8b69-bbbf09ca86e7
 ```

 ## Phase 2 - Finishing<a id="regular-mode-deployment-phase2"></a>

Run migration for remaining tables and clean up. 

##### Optional Commands<a id="optional-commands-regular-mode-deployment-phase2"></a>
```
--Disable error page
omnia tenants update disableerror {tenantid}

--Update environment variable for WP
omnia tenants update envVar set --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_RULES --value 'NotificationPanelHistory'

--Update environment variable for WCM
omnia tenants update envVar set --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_RULES --value 'PageSummaryStatistics,VisitedPages'

--Deploy and run migration in migration extensions
--WP Migration Extension
omnia extensions deploy 8177832b-6142-488f-8d1f-665579439872:7.1.* --tenantid {tenantId} --prerun 67eb7bb4-e626-49f7-b4a2-2fd523e54d83
--WCM Migration Extension
omnia extensions deploy aae2ba34-df89-40f0-ab35-06d872291e91:7.1.* --tenantid {tenantId} --prerun 0fdd1d95-189f-4b01-a1e2-f985eed3a268

-- Retract migration extension WP
omnia extensions retract 8177832b-6142-488f-8d1f-665579439872 --tenantid {tenantId}
-- Retract migration extension WCM
omnia extensions retract aae2ba34-df89-40f0-ab35-06d872291e91 --tenantid {tenantId}

--Remove env variables for WP
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_THREAD
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_RULES
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_MAXDOP
--Remove env variables for WCM
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_THREAD
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_RULES
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_MAXDOP

```

 ## Phase 3 - Revert (If Any)<a id="regular-mode-deployment-phase3"></a>

Revert to the state before the update.

##### Required Commands<a id="required-commands-regular-mode-deployment-phase3"></a>

```
omnia extensions revert aa000000-0000-aaaa-0000-0000000000aa:latest --tenantid {tenantId}
omnia extensions revert d5bf3472-ddc6-44a9-b78b-6c52b2dfedea:latest --tenantid {tenantId}
omnia extensions revert ff629048-1044-4cd5-b0d5-1e2f920f6374:latest --tenantid {tenantId}
omnia extensions revert 4d5013fe-0c01-4e7c-9664-b7f28e9013e3:latest --tenantid {tenantId}
omnia extensions revert 94418fb5-2a96-4f20-9c80-e2f27a0a62f0:latest --tenantid {tenantId}
```

##### Optional Commands<a id="optional-commands-regular-mode-deployment-phase3"></a>
```
--Disable error page
omnia tenants update disableerror {tenantid}

```

--- 
 
# Readonly Mode Deployment for version 6 to 7 <a id="readonly-mode-deployment"></a>

A deployment flow for a large tenant needs to maintain system uptime during upgrades

## Phase 1 - Initial<a id="readonly-mode-deployment-phase1"></a>

Turn on Readonly mode, deploy migration extensions and clone databases. Please manually scale up/down the cloned databases to the appropriate level.

##### Optional Commands<a id="optional-commands-readonly-mode-deployment-phase1"></a>
```
omnia clusters update restarting {tenantClusterId} --enable false --code <youknow>

```
##### Required Commands<a id="required-commands-readonly-mode-deployment-phase1"></a>
```
omnia tenants update status {tenantId} --value readonly --code <youknow>

--Omnia Migration Extension
omnia extensions deploy 9d44a06d-2702-4fa4-bc87-5b2ebe39403c:7.1.* --tenantid {tenantId}
--Workplace Migration Extension
omnia extensions deploy 8177832b-6142-488f-8d1f-665579439872:7.1.* --tenantid {tenantId}
--WCM Migration Extension
omnia extensions deploy aae2ba34-df89-40f0-ab35-06d872291e91:7.1.* --tenantid {tenantId}
--MS Migration Extension
omnia extensions deploy 5c0b2905-a638-4c51-8172-171d5d6dbc6b:7.1.* --tenantid {tenantId}

omnia tenants resources sqlclone --tenantid {tenantId} --extensionid 9d44a06d-2702-4fa4-bc87-5b2ebe39403c --suffix 7_5_23
omnia tenants resources sqlclone --tenantid {tenantId} --extensionid 8177832b-6142-488f-8d1f-665579439872 --suffix 7_5_23
omnia tenants resources sqlclone --tenantid {tenantId} --extensionid aae2ba34-df89-40f0-ab35-06d872291e91 --suffix 7_5_23
omnia tenants resources sqlclone --tenantid {tenantId} --extensionid 5c0b2905-a638-4c51-8172-171d5d6dbc6b --suffix 7_5_23
```

## Phase 2 - Execution Migration<a id="readonly-mode-deployment-phase2"></a>

Run migration worker on the cloned databases

##### Optional Commands<a id="optional-commands-readonly-mode-deployment-phase2"></a>
```
--Update environment variable for Omnia
omnia tenants update envVar set --tenantid {tenantId} --serviceid 1cacb55c-202b-4cd7-819d-11bad92fa9cb --name OMNIA_MIGRATION_THREAD --value 8
omnia tenants update envVar set --tenantid {tenantId} --serviceid 1cacb55c-202b-4cd7-819d-11bad92fa9cb --name OMNIA_MIGRATION_MAXDOP --value 0

--Update environment variable for WP
omnia tenants update envVar set --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_THREAD --value 20
omnia tenants update envVar set --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_MAXDOP --value 0
omnia tenants update envVar set --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_RULES --value '*,!NotificationPanelHistory'

--Update environment variable for WCM
omnia tenants update envVar set --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_THREAD --value 20
omnia tenants update envVar set --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_RULES --value '*,!PageSummaryStatistics,!VisitedPages'
omnia tenants update envVar set --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_MAXDOP --value 0
```
##### Required Commands<a id="required-commands-readonly-mode-deployment-phase2"></a>
```
--Omnia
omnia extensions deploy 9d44a06d-2702-4fa4-bc87-5b2ebe39403c:7.1.* --tenantid {tenantId} --prerun 1cacb55c-202b-4cd7-819d-11bad92fa9cb
--Workplace
omnia extensions deploy 8177832b-6142-488f-8d1f-665579439872:7.1.* --tenantid {tenantId} --prerun 67eb7bb4-e626-49f7-b4a2-2fd523e54d83
--WCM
omnia extensions deploy aae2ba34-df89-40f0-ab35-06d872291e91:7.1.* --tenantid {tenantId} --prerun 0fdd1d95-189f-4b01-a1e2-f985eed3a268
--MS
omnia extensions deploy 5c0b2905-a638-4c51-8172-171d5d6dbc6b:7.1.* --tenantid {tenantId} --prerun 6db4e340-e3ec-4913-a197-b65feb9371e4

```

## Phase 3 - Apply new databases<a id="readonly-mode-deployment-phase3"></a>

Scale down all services to ensure that the migration from version 6 does not occur on version 7 databases.


##### Required Commands<a id="required-commands-readonly-mode-deployment-phase3"></a>
```
omnia tenants update status {tenantId} --value active --code <youknow>

omnia extensions scale cc000000-0000-cccc-0000-0000000000cc --replicas 0 --tenantid {tenantId}
omnia extensions scale bb000000-0000-bbbb-0000-0000000000bb --replicas 0 --tenantid {tenantId}
omnia extensions scale bea2f78e-5cf3-4004-92da-e6091df88847 --replicas 0 --tenantid {tenantId}
omnia extensions scale 4d176592-779c-45f9-ad00-1d3160818a56 --replicas 0 --tenantid {tenantId}
omnia extensions scale 39df27aa-95f1-4a23-b3f6-8b231afcda82 --replicas 0 --tenantid {tenantId}
omnia extensions scale c038bb05-41f2-45e5-a302-0748e25a415d --replicas 0 --tenantid {tenantId}
omnia extensions scale d60fa82a-129a-41a9-93ce-d784dcb217b0 --replicas 0 --tenantid {tenantId}
omnia extensions scale 79e300c3-5e5a-4836-9f76-9e9bb17ef620 --replicas 0 --tenantid {tenantId}
omnia extensions scale b3d13ef7-5ff8-4496-a283-81a742080aef --replicas 0 --tenantid {tenantId}

--Apply cloned databases to main extensions
omnia tenants resources sqlapply --tenantid {tenantId} --extensionid 9d44a06d-2702-4fa4-bc87-5b2ebe39403c 
omnia tenants resources sqlapply --tenantid {tenantId} --extensionid 8177832b-6142-488f-8d1f-665579439872
omnia tenants resources sqlapply --tenantid {tenantId} --extensionid aae2ba34-df89-40f0-ab35-06d872291e91
omnia tenants resources sqlapply --tenantid {tenantId} --extensionid 5c0b2905-a638-4c51-8172-171d5d6dbc6b

--Deploy new version Omnia
omnia extensions deploy aa000000-0000-aaaa-0000-0000000000aa:7.1.* --tenantid {tenantId}
omnia extensions scale cc000000-0000-cccc-0000-0000000000cc --replicas 1 --tenantid {tenantId}
omnia extensions scale bb000000-0000-bbbb-0000-0000000000bb --replicas 1 --tenantid {tenantId}

--Deploy new version WP
omnia extensions deploy d5bf3472-ddc6-44a9-b78b-6c52b2dfedea:7.1.* --tenantid {tenantId}
omnia extensions scale bea2f78e-5cf3-4004-92da-e6091df88847 --replicas 1 --tenantid {tenantId}
omnia extensions scale 4d176592-779c-45f9-ad00-1d3160818a56 --replicas 1 --tenantid {tenantId}
omnia extensions scale 39df27aa-95f1-4a23-b3f6-8b231afcda82 --replicas 1 --tenantid {tenantId}

--Deploy new version WCM
omnia extensions deploy ff629048-1044-4cd5-b0d5-1e2f920f6374:7.1.* --tenantid {tenantId}
omnia extensions scale c038bb05-41f2-45e5-a302-0748e25a415d --replicas 1 --tenantid {tenantId}
omnia extensions scale d60fa82a-129a-41a9-93ce-d784dcb217b0 --replicas 1 --tenantid {tenantId}

--Deploy new version MS
omnia extensions deploy 4d5013fe-0c01-4e7c-9664-b7f28e9013e3:7.1.* --tenantid {tenantId}
omnia extensions scale 79e300c3-5e5a-4836-9f76-9e9bb17ef620 --replicas 1 --tenantid {tenantId}
omnia extensions scale b3d13ef7-5ff8-4496-a283-81a742080aef --replicas 1 --tenantid {tenantId}

--Deploy new version Feed
omnia extensions deploy 94418fb5-2a96-4f20-9c80-e2f27a0a62f0:7.1.* --tenantid {tenantId} -s -o --prerun 1a5f39c9-06cf-4de4-8b69-bbbf09ca86e7

```

## Phase 4 - Finishing<a id="readonly-mode-deployment-phase4"></a>

Run migration for remaining tables and clean up. 

##### Optional Commands<a id="optional-commands-readonly-mode-deployment-phase4"></a>
```
--Update environment variable for WP
omnia tenants update envVar set --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_THREAD --value 20
omnia tenants update envVar set --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_MAXDOP --value 0
omnia tenants update envVar set --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_RULES --value 'NotificationPanelHistory'

--Update environment variable for WCM
omnia tenants update envVar set --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_THREAD --value 20
omnia tenants update envVar set --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_RULES --value 'PageSummaryStatistics,VisitedPages'
omnia tenants update envVar set --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_MAXDOP --value 0


--Deploy and run migration for only remaining tables in migration extensions
--WP Migration Extension
omnia extensions deploy 8177832b-6142-488f-8d1f-665579439872:7.1.* --tenantid {tenantId} --prerun 67eb7bb4-e626-49f7-b4a2-2fd523e54d83
--WCM Migration Extension
omnia extensions deploy aae2ba34-df89-40f0-ab35-06d872291e91:7.1.* --tenantid {tenantId} --prerun 0fdd1d95-189f-4b01-a1e2-f985eed3a268


--Enable restart for tenant cluster
omnia clusters update restarting e75d3c21-5d97-47c0-b1c3-227dd9b10fb2 --enable true --code <youknow>

```
##### Required Commands<a id="required-commands-readonly-mode-deployment-phase4"></a>
```
-- Retract migration extension Omnia
omnia extensions retract 9d44a06d-2702-4fa4-bc87-5b2ebe39403c --tenantid {tenantId}
-- Retract migration extension WP
omnia extensions retract 8177832b-6142-488f-8d1f-665579439872 --tenantid {tenantId}
-- Retract migration extension WCM
omnia extensions retract aae2ba34-df89-40f0-ab35-06d872291e91 --tenantid {tenantId}
-- Retract migration extension MS
omnia extensions retract 5c0b2905-a638-4c51-8172-171d5d6dbc6b --tenantid {tenantId}

--Remove env variable for Omnia
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 1cacb55c-202b-4cd7-819d-11bad92fa9cb --name OMNIA_MIGRATION_THREAD
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 1cacb55c-202b-4cd7-819d-11bad92fa9cb --name OMNIA_MIGRATION_MAXDOP
--Remove env variable for WP
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_THREAD
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_RULES
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 67eb7bb4-e626-49f7-b4a2-2fd523e54d83 --name OMNIA_MIGRATION_MAXDOP
--Remove env variable for WCM
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_THREAD
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_RULES
omnia tenants update envVar remove --tenantid {tenantId} --serviceid 0fdd1d95-189f-4b01-a1e2-f985eed3a268 --name OMNIA_MIGRATION_MAXDOP

```

## Phase 5 - Revert (If Any)<a id="readonly-mode-deployment-phase5"></a>

Revert tenant to version 6

##### Required Commands<a id="required-commands-readonly-mode-deployment-phase5"></a>
```
omnia extensions deploy aa000000-0000-aaaa-0000-0000000000aa:6.13.* --tenantid {tenantId}
omnia extensions deploy d5bf3472-ddc6-44a9-b78b-6c52b2dfedea:6.13.* --tenantid {tenantId}
omnia extensions deploy ff629048-1044-4cd5-b0d5-1e2f920f6374:6.13.* --tenantid {tenantId}
omnia extensions deploy 4d5013fe-0c01-4e7c-9664-b7f28e9013e3:6.13.* --tenantid {tenantId}
omnia extensions deploy 1b96280d-4773-4581-85e9-46f14346abea:6.11.* --tenantid {tenantId}
omnia extensions deploy 94418fb5-2a96-4f20-9c80-e2f27a0a62f0:6.13.* --tenantid {tenantId}

--Apply version 6 database
omnia tenants resources sqlrevert --tenantid {tenantId} --extensionid 9d44a06d-2702-4fa4-bc87-5b2ebe39403c 
omnia tenants resources sqlrevert --tenantid {tenantId} --extensionid 8177832b-6142-488f-8d1f-665579439872
omnia tenants resources sqlrevert --tenantid {tenantId} --extensionid aae2ba34-df89-40f0-ab35-06d872291e91
omnia tenants resources sqlrevert --tenantid {tenantId} --extensionid 5c0b2905-a638-4c51-8172-171d5d6dbc6b

```

##### Optional Commands<a id="optional-commands-readonly-mode-deployment-phase5"></a>
```
--Remove cloned database
omnia tenants resources sqlremove --tenantid {tenantId} --extensionid 9d44a06d-2702-4fa4-bc87-5b2ebe39403c 
omnia tenants resources sqlremove --tenantid {tenantId} --extensionid 8177832b-6142-488f-8d1f-665579439872
omnia tenants resources sqlremove --tenantid {tenantId} --extensionid aae2ba34-df89-40f0-ab35-06d872291e91
omnia tenants resources sqlremove --tenantid {tenantId} --extensionid 5c0b2905-a638-4c51-8172-171d5d6dbc6b

```

