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
  - [omnia tenants update appsettings](#omnia-tenants-update-appsettings)
        - [Example](#example-appsettings-update)
        - [Required Parameters](#required-parameters-update-appsettings)
        - [Optional Parameters](#optional-parameters-update-appsettings)
  - [omnia tenants update ai](#omnia-tenants-update-ai)
        - [Example](#example-update-ai)
        - [Required Parameters](#required-parameters-update-ai)
  - [omnia tenants get appsettings](#omnia-tenants-get-appsettings)
        - [Example](#example-appsettings-get)
        - [Required Parameters](#required-parameters-get-appsettings)
        - [Optional Parameters](#optional-parameters-get-appsettings)  
  - [omnia tenants get ai](#omnia-tenants-get-ai)
        - [Example](#example-get-ai)
        - [Required Parameters](#required-parameters-get-ai) 
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
  - [omnia secrets remove](#omnia-secrets-remove)
        - [Example](#example-secrets-remove)
        - [Required Parameters](#required-parameters-secrets-remove)
  - [omnia secrets list](#omnia-secrets-list)
        - [Example](#example-secrets-list)
        - [Required Parameters](#required-parameters-secrets-list)
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
        - [Required Parameters](#required-parameters-permissions-list)

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
omnia dev update --version 6.0.0
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
omnia tenants new --intent dev --name "My Customer" --omnia-dns-suffix "mycustomer" --sp-dns-suffix "mycustomer" --azure-ad-id "8c6e9ace-69e9-4272-8225-714d57a3cceb" --region "westeurope"
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

##### Optional Parameters

No optional parameters

---

## omnia tenants list

List all the existing tenants or detailed information about a tenant if id is provided

##### Example
```
omnia tenants list

omnia tenants list {tenantid}

omnia tenants list --filter name
```

##### Required Parameters

No required parameters  

##### Optional Parameters

| Name        | Description             |
| ----------- | ----------------------- |
| -f --filter | Filters tenants by name |

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

Restart services in Omnia Cloud for a specific tenant

##### Example<a id="example-extensions-restart"></a>
```
omnia extensions restart all --tenantid
omnia extensions restart service --tenantid --serviceid
omnia extensions restart extension --tenantid --extensionid
```

##### Required Parameters<a id="required-parameters-extensions-restart"></a>

| Name                      | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| --tenantid                | The tenant to restart services on                            |
| --serviceid --extensionid | required depending if restart target is service or extension |

##### Optional Parameters<a id="optional-parameters-extensions-restart"></a>

| Name      | Description                                                |
| --------- | ---------------------------------------------------------- |
| --nomercy | Restarts all services immediatly even scaled out instances |
   
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
| --code    | The code needs to be entered when deploy to a high-level Deployment Security tenant (format: yy-dd-MM-m) |

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

No optional paramters

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

No optional paramters

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

No optional parameters

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

No optional paramters

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

No optional paramters

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

No optional parameters

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

##### Example<a id="example-secrets-remove"></a>
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
##### Optional Parameters<<a id="required-parameters-loc-list"></a>

| Name          | Description                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------|
| --serviceId   | The id of the omnia service                                                                                                    |
| --lang        | A specific language tag e.g. en-us                                                                                             |
| --diff        | An option to enable selection of what to diff, for the versins listed. Can't be combined with --match                          |
| --match       | An option to see which localization files would (currently) deploy if deploying a specific version, Can't combine with --match |

---

## omnia loc download

Downloads a specific localization file. Downloaded file gets post-fix .semanticversion.

##### Example<a id="example-loc-download"></a>
```
omnia loc download --dest {downloadFolderPath} --serviceId {serviceId} --lang {languageTag} --v {semanticVersion}
```

##### Required Parameters<a id="required-parameters-loc-download"></a>

| Name          | Description                                         |
| ------------- | --------------------------------------------------- |
| --dest        | The path of the destination folder                  |
| --serviceId   | The id of the omnia service for which to delete     |
| --lang        | The language of the file that should be deleted     |
| --v           | The version to download                             |

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
| 6b96e280-e092-4b8f-a721-c4623d4ef14c  | Omnia.Tenant.Admin | Omnia.Cloud.Admin | Have the same permission as Tenant owner |
| 731cd4d6-50aa-4463-bad4-b21d9aceadb2  | Omnia.Tenant.FirstLineSupport | Omnia.Tenant.Admin | List tenants and restart extensions/services |


## omnia permissions add

Grant permission for a specific role to one or more users

##### Example<a id="example-permissions-add"></a>
```
Add global admin
omnia permissions add 11e1f111-c773-4f8d-8d40-8767d707f071 --principals {userName1},{userName2} 

Add release admin
omnia permissions add c79fd690-18b8-42a1-b540-9ae77193f432 --principals {userName1},{userName2}

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
No optional parameters

---

