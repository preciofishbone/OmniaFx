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
  - [omnia tenants redirects enablerror](#omnia-tenants-redirects-enablerror)
        - [Example](#example-16)
        - [Required Parameters](#required-parameters-22)
        - [Optional Parameters](#optional-parameters-22)
  - [omnia tenants redirects disableerror](#omnia-tenants-redirects-disableerror)
        - [Example](#example-17)
        - [Required Parameters](#required-parameters-23)
        - [Optional Parameters](#optional-parameters-23)
  - [omnia tenants redirects customerrorpage](#omnia-tenants-redirects-customerrorpage)
        - [Example](#example-18)
        - [Required Parameters](#required-parameters-24)
        - [Optional Parameters](#optional-parameters-24)
  - [omnia tenants updatekaizala](#omnia-tenants-updatekaizala)
        - [Example](#example-19)
        - [Required Parameters](#required-parameters-25)
        - [Optional Parameters](#optional-parameters-25)
  - [omnia appsettings get](#omnia-appsettings-get)
        - [Example](#example-20)
        - [Required Parameters](#required-parameters-26)
        - [Optional Parameters](#optional-parameters-26)
  - [omnia appsettings update](#omnia-appsettings-update)
        - [Example](#example-21)
        - [Required Parameters](#required-parameters-27)
        - [Optional Parameters](#optional-parameters-27)
  - [omnia ai get](#omnia-ai-get)
        - [Example](#example-22)
        - [Required Parameters](#required-parameters-28)
  - [omnia ai update](#omnia-ai-update)
        - [Example](#example-23)
        - [Required Parameters](#required-parameters-29)
- [Extension Commands](#extension-commands)
  - [omnia extensions new](#omnia-extensions-new)
        - [Example](#example-24)
        - [Required Parameters](#required-parameters-30)
        - [Optional Parameters](#optional-parameters-28)
  - [omnia extensions restart](#omnia-extensions-restart)
        - [Example](#example-25)
        - [Required Parameters](#required-parameters-31)
        - [Optional Parameters](#optional-parameters-29)
  - [omnia extensions list](#omnia-extensions-list)
        - [Example](#example-26)
        - [Required Parameters](#required-parameters-32)
        - [Optional Parameters](#optional-parameters-30)
  - [omnia extensions versions](#omnia-extensions-versions)
        - [Example](#example-27)
        - [Required Parameters](#required-parameters-33)
        - [Optional Parameters](#optional-parameters-31)
  - [omnia extensions push](#omnia-extensions-push)
        - [Example](#example-28)
        - [Required Parameters](#required-parameters-34)
        - [Optional Parameters](#optional-parameters-32)
  - [omnia extensions deploy](#omnia-extensions-deploy)
        - [Example](#example-29)
        - [Required Parameters](#required-parameters-35)
        - [Optional Parameters](#optional-parameters-33)
- [Extension Groups Commands](#extension-groups-commands)
  - [omnia extgroups new](#omnia-extgroups-new)
        - [Example](#example-30)
        - [Required Parameters](#required-parameters-36)
        - [Optional Parameters](#optional-parameters-34)
  - [omnia extgroups addversion](#omnia-extgroups-addversion)
        - [Example](#example-31)
        - [Required Parameters](#required-parameters-37)
        - [Optional Parameters](#optional-parameters-35)
  - [omnia extgroups deleteversion](#omnia-extgroups-deleteversion)
        - [Example](#example-32)
        - [Required Parameters](#required-parameters-38)
        - [Optional Parameters](#optional-parameters-36)
  - [omnia extgroups delete](#omnia-extgroups-delete)
        - [Example](#example-33)
        - [Required Parameters](#required-parameters-39)
        - [Optional Parameters](#optional-parameters-37)
- [Deployment Groups Commands](#deployment-groups-commands)
  - [omnia depgroups new](#omnia-depgroups-new)
        - [Example](#example-34)
        - [Required Parameters](#required-parameters-40)
        - [Optional Parameters](#optional-parameters-38)
  - [omnia depgroups addtarget](#omnia-depgroups-addtarget)
        - [Example](#example-35)
        - [Required Parameters](#required-parameters-41)
        - [Optional Parameters](#optional-parameters-39)
  - [omnia depgroups deletetarget](#omnia-depgroups-deletetarget)
        - [Example](#example-36)
        - [Required Parameters](#required-parameters-42)
        - [Optional Parameters](#optional-parameters-40)
  - [omnia depgroups delete](#omnia-depgroups-delete)
        - [Example](#example-37)
        - [Required Parameters](#required-parameters-43)
        - [Optional Parameters](#optional-parameters-41)
- [Extension Secret Commands](#extension-secret-commands)
  - [omnia secrets add](#omnia-secrets-add)
        - [Example](#example-38)
        - [Required Parameters](#required-parameters-44)
  - [omnia secrets remove](#omnia-secrets-remove)
        - [Example](#example-39)
        - [Required Parameters](#required-parameters-45)
  - [omnia secrets list](#omnia-secrets-list)
        - [Example](#example-40)
        - [Required Parameters](#required-parameters-46)

<!-- /TOC -->

---

# Versioning Reference
Omnia Cloud is enforcing the Semantic Versioning pattern for Extension versions and
when using the Omnia Cli to manage versions such as deployments, listing extension versions or managing extensions groups you can use the following pattern matching

| Pattern        | Description                                          |
| -------------- | ---------------------------------------------------- |
| latest         | Gets the latest major version                        |
| 2.0.*          | Gets the latest patch version of the 2.0 release     |
| 2.*            | Gets the lates minor version of the 2 release        |
| 2.0.0-preview* | Gets the latest 2.0.0 preview version                |
| 2.*-preview*   | Gets the latest minor version of the latest preview  |
| -preview       | Gets the latest previev version of any major version |

Pattern matching is very powerful together with concepts such as [Deployment](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#omnia-extensions-deploy) or [Extension Groups](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#extension-groups-commands) where you can deploy one or many extensions and ensure its using the current latest version

You can play with the pattern matching using the omnia extensions versions cmd. Try the sample below to find all omnia 5.* versions
```
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:5.*
```
---

# Omnia Dev Commands

## omnia dev new

##### Example Install Templates
```
omnia dev new --install 5.0.0
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

Add all of Omnia Tenant Admin Fx in latest available version 
omnia dev add adminfx

Add all of Omnia Workplace Fx in latest available version 
omnia dev add workplacefx

Add all of Omnia Team Collaboration Fx in latest available version 
omnia dev add tbfx

Add in specific version
omnia dev add omniafx --version 2.0.0

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

Update Omnia Tenant Admin Fx to latest available version
omnia dev update adminfx

Update Omnia Workplace Fx to latest available version
omnia dev update workplacefx

Update Omnia Team Collaboration Fx to latest available version
omnia dev update tbfx

Update to specific version
omnia dev update omniafx --version 2.0.0

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

No required parameters

---

## omnia dev dependencies add

Add a new development dependency

##### Example

The following command is to add a new dependency for developing on Omnia version >= 6.0.0-dev 

```
omnia dev dependencies add --omniafx 6.0.0-dev --sdk 3.1.402 --baseimage 5.0 --cli 3.0.0-dev --clitemplate 6.0.0 --vs 16.7.5
```

##### Required Parameters

| Name          | Description                                                |
|---------------|------------------------------------------------------------|
| --omniafx     | The minimum version of Omnia that requires this dependency |
| --sdk         | .Net Core SDK version                                      |
| --baseimage   | Omnia docker base image version                            |
| --cli         | Omnia cli version                                          |
| --clitemplate | Omnia cli template version                                 |
| --vs          | Visual Studio version                                      |


##### Optional Parameters

| Name      | Description                             |
|-----------|-----------------------------------------|
| --message | Additional message to show to developer |

---

## omnia dev dependencies update

Update a development dependency

##### Example

The following command is to update a dependency for developing on Omnia version >= 6.0.0-dev 

```
omnia dev dependencies update --omniafx 6.0.0-dev --baseimage 5.0 --message "Documentation: https://github.com/preciofishbone/OmniaFx"
```

##### Required Parameters

| Name          | Description                                                |
|---------------|------------------------------------------------------------|
| --omniafx     | The minimum version of Omnia that requires this dependency |


##### Optional Parameters

| Name          | Description                             |
|---------------|-----------------------------------------|
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
|------|--------------------------------|
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
omnia dev templateinfos add --version 5.0.0
```

##### Required Parameters

| Name      | Description                                         |
|-----------|-----------------------------------------------------|
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
|-----------|--------------------------------------------------------|
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
|------|---------------------------------------|
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

| Name                | Description  |
| --------------------| ------------- 
| --intent            | The intent of the tenant can be (dev, test, preprod, prod).
| --name              | A friendly name of the tenant.
| --omnia-dns-suffix  | Unique dns suffix for the omnia service this is the first part of the full dns name e.g mycustomer
| --sp-dns-suffix     | Unique dns suffix for the existing SharePoint online service. this is the first part of the full sharepoint dns name. e.g mycustomer
| --azure-ad-id       | The unique Azure Ad Id for the customers tenant. https://support.office.com/en-us/article/find-your-office-365-tenant-id-6891b561-a52d-4ade-9f39-b492285e2c9b
| --region            | The region where this tenant should be hosted. Should be located in same region as Office 365

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

## omnia tenants redirects enablerror

Redirects users accessing the tenant to a "Omnia is down" page. For debugging purposes the tenant can be accessed by adding ?redirect=true or ?debug=true as a querystring parameter in the url

##### Example
```
omnia tenants redirects enableerror {tenantid}
```

##### Required Parameters

No required parameters  

##### Optional Parameters

No optional parameters

---

## omnia tenants redirects disableerror

Stops the redirect applied by the omnia tenants redirects enableerror cmd

##### Example
```
omnia tenants redirects disableerror {tenantid}
```

##### Required Parameters

No required parameters  

##### Optional Parameters

No optional parameters

---

## omnia tenants redirects customerrorpage

Enables to upload a custom error page for the error redirect page

##### Example
```
omnia tenants redirects customerrorpage {tenantid} --path c:\html\customerror.html
```

##### Required Parameters

| Name   | Description                              |
| ------ | ---------------------------------------- |
| --path | The path to the html page to be uploaded |

##### Optional Parameters

No optional parameters

---

## omnia tenants updatekaizala

Enables mobile login using kaizala connector

##### Example
```
omnia tenants updatekaizala --connectorid {connectorid} --connectorsecret {connectorsecret} 
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

## omnia appsettings get

Get any applied overrides of appsettings (or shared appsettings) for a specific tenant

##### Example
```
omnia appsettings get --tenantid {tenantid}
```

##### Required Parameters

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| -t --tenantid | The tenantid of the tenant to generate appsettings for |
    

##### Optional Parameters

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| --shared | Target the shared appsettings instead of appsettings |

---

## omnia appsettings update

Apply overrides of appsettings (or shared appsettings) for a specific tenant
(Note these will be in effect until removed, i.e. updating with no overrides)

##### Example
```
omnia appsettings update --tenantid {tenantid}
```

##### Required Parameters

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| -t --tenantid | The tenantid of the tenant to generate appsettings for |
    

##### Optional Parameters

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| --shared | Target the shared appsettings instead of appsettings |

---

## omnia ai get

Get any applied overrides of application insights for a specific tenant

##### Example
```
omnia ai get --tenantid {tenantid}
```

##### Required Parameters

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| -t --tenantid | The tenantid of the tenant to generate appsettings for |
    

---

## omnia ai update

Apply overrides of application insights for a specific tenant
(Note these will be in effect until removed, i.e. updating with no overrides)

##### Example
```
omnia ai update --tenantid {tenantid}
```

##### Required Parameters

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| -t --tenantid | The tenantid of the tenant to generate appsettings for |

---

# Extension Commands

## omnia extensions new

Registers a new extension in Omnia Cloud

##### Example
```
omnia extensions new --name "My Extension" 
```

##### Required Parameters

| Name   | Description                       |
| ------ | --------------------------------- |
| --name | A friendly name of the extension. |

##### Optional Parameters

| Name | Description                                                    |
| ---- | -------------------------------------------------------------- |
| --id | The unique id of the extension, can be found in extension.json |

---

## omnia extensions restart

Restart services in Omnia Cloud for a specific tenant

##### Example
```
omnia extensions restart all --tenantid
omnia extensions restart service --tenantid --serviceid
omnia extensions restart extension --tenantid --extensionid
```

##### Required Parameters

| Name                      | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| --tenantid                | The tenant to restart services on                            |
| --serviceid --extensionid | required depending if restart target is service or extension |

##### Optional Parameters

| Name      | Description                                                |
| --------- | ---------------------------------------------------------- |
| --nomercy | Restarts all services immediatly even scaled out instances |
   
---

## omnia extensions list

List extensions where i am a owner or public extensions that i can install in Tenant

##### Example
```
omnia extensions list
```

##### Required Parameters

No required parameters  

##### Optional Parameters

No optional parameters

---

## omnia extensions versions

Lists versions pushed for extension that can be installed in Tenants

##### Example
```
Lists all versions for Omnia
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa

Lists all versions for Omnia starting with 2.
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:2.*

Lists all preview versions for Omnia 2.0.0 
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:2.0.0-preview*

Lists all preview versions for Omnia starting with 2.*
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:2.*-preview*
```

##### Required Parameters

No required parameters  
    

##### Optional Parameters

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| --intent | The intent of the versions can be (dev, prod). |

---

## omnia extensions push

Pushes a new version of an extension and makes it available to be installed. The intent controls on which tenants this version can be installed. For example if a tenant has been provisioned with intent dev, only versions with intent dev can be installed onto that tenant.

##### Example
```
omnia extensions push {extensionid}:{version} --intent dev
```

##### Required Parameters

| Name     | Description                                |
| -------- | ------------------------------------------ |
| --intent | The intent of the push can be (dev, prod). |
    

##### Optional Parameters

No optional parameters

---

## omnia extensions deploy

Deploys extension versions to tenants. 

##### Example
```
Deploys specific version of Omnia version 2.0.0 
omnia extensions deploy aa000000-0000-aaaa-0000-0000000000aa:2.0.0 --tenantid {tenantId}

Deploys latest patch version of Omnia for 2.0 release
omnia extensions deploy aa000000-0000-aaaa-0000-0000000000aa:2.0.* --tenantid {tenantId}

Deploys latest minor and patch version of Omnia for the major 2 release
omnia extensions deploy aa000000-0000-aaaa-0000-0000000000aa:2.* --tenantid {tenantId}

```

##### Required Parameters

| Name       | Description               |
| ---------- | ------------------------- |
| --tenantid | The tenantid to deploy to |
    

##### Optional Parameters

No optional parameters

---

# Extension Groups Commands

With extension groups its possible to add several extensions to a group and then deploy all extensions in the group to a tenant or a tenant group. The real power of extension groups is when combining the versions to include using pattern matching. [Check the versioning reference](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#versioning-reference)

## omnia extgroups new

Registers a new extension group in Omnia Cloud

##### Example
```
omnia extgroups new --name "MyExtensionGroup" --intent prod
```

##### Required Parameters

| Name     | Description                   |
| -------- | ----------------------------- |
| --name   | A friendly name of the group. |
| --intent | The intent of the group.      |

##### Optional Parameters

No optional parameters

---

## omnia extgroups addversion

Adds a extension version to the extension group

##### Example
```
omnia extgroups addversion --groupid {mygroupid} --version {extensionid:version}
```

##### Required Parameters

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| --groupid | The extension group id to add the version to |
| --version | The version to add                           |

##### Optional Parameters

No optional paramters

---

## omnia extgroups deleteversion

Deletes a extension version from the extension group

##### Example
```
omnia extgroups deleteversion --groupid {mygroupid} --version {extensionid:version}
```

##### Required Parameters

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| --groupid | The extension group id to delete the version from |
| --version | The version to delete                             |

##### Optional Parameters

No optional paramters

---

## omnia extgroups delete

Deletes an extension group from Omnia Cloud

##### Example
```
omnia extgroups delete {groupid}
```

##### Required Parameters

No required parameters

##### Optional Parameters

No optional parameters

---

# Deployment Groups Commands

With deployment groups its possible to add several tenants to a group and then deploy an extension or extensions group to all tenants in the group

## omnia depgroups new

Registers a new deployment group in Omnia Cloud

##### Example
```
omnia depgroups new --name "MyDeploymentGroup" --intent prod
```

##### Required Parameters

| Name     | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| --name   | A friendly name of the group.                                                  |
| --intent | The intent of the group. Only targets of same intent can be added to the group |

##### Optional Parameters

No optional parameters

---

## omnia depgroups addtarget

Adds a target to the deployment group

##### Example
```
omnia depgroups addtarget --groupid {mygroupid} --targetid {tenantid}
```

##### Required Parameters

| Name       | Description                                  |
| ---------- | -------------------------------------------- |
| --groupid  | The deployment group id to add the target to |
| --targetid | The target to add, e.g. tenant id            |

##### Optional Parameters

No optional paramters

---   

## omnia depgroups deletetarget

Deletes a target from the deployment group

##### Example
```
omnia depgroups deletetarget --groupid {mygroupid} --targetid {tenantid}
```

##### Required Parameters

| Name       | Description                                       |
| ---------- | ------------------------------------------------- |
| --groupid  | The deployment group id to delete the target from |
| --targetid | The target to delete, e.g. tenant id              |

##### Optional Parameters

No optional paramters

---

## omnia depgroups delete

Deletes a deployment group from Omnia Cloud

##### Example
```
omnia depgroups delete {groupid}
```

##### Required Parameters

No required parameters

##### Optional Parameters

No optional parameters

---

# Extension Secret Commands

Its possible to generate several client credentials for an extension. You can put a pair of ClientId (aka extension id) and ClientSecret in http headers to request Omnia API.

## omnia secrets add

Generate a cloud-secret or a tenant-secret for an extension.

##### Example
```
omnia secrets add --extensionid {extensionid}  --name {name}

omnia secrets add --tenantid {tenantid} --extensionid {extensionid} --name {name} 
```

##### Required Parameters

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| --tenantid    | Required depending if the secret is tenant-secret     |
| --extensionid | The extensionid of the extension to generate a secret |
| --name        | The name of secret                                    |


---

## omnia secrets remove

Remove a cloud-secret or a tenant-secret from an extension.

##### Example
```
omnia secrets remove --tenantid {tenantid} --extensionid {extensionid} --secret {secret}

omnia secrets remove --extensionid {extensionid} --secret {secret}
```

##### Required Parameters

| Name          | Description                                         |
| ------------- | --------------------------------------------------- |
| --tenantid    | Required depending if the secret is tenant-secret   |
| --extensionid | The extensionid of the extension to remove a secret |
| --secret      | The secret value to remove                          |


---

## omnia secrets list

List all cloud-secrets or tenant-secrets of an extension.

##### Example
```
omnia secrets list --tenantid {tenantid} --extensionid {extensionid}

omnia secrets list --extensionid {extensionid}
```

##### Required Parameters

| Name          | Description                                          |
| ------------- | ---------------------------------------------------- |
| --tenantid    | Required depending if the secrets are tenant-secrets |
| --extensionid | The extensionid of the extension to list all secrets |

---


