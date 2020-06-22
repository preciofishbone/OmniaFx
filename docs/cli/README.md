# Omnia Cli

Omnia Cli is a dotnet tool that manages everything from Development to Production in Omnia Cloud. It helps you build new extensions and has item templates that covers different aspects of the Omnia Platform. It also helps you deploy extensions to tenants and support different management operations on tenants in the Omnia Cloud. If you have any feature requests or you found a bug please submit an issue on the issues section on this Github repo.

# Installation
[How to install Omnia Cli](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/prerequisites#omnia-cli)

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

You can play with the pattern matching using the omnia extensions versions cmd. Try the sample below to find all omnia 2.* versions
```
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:2.*
```
---

## Omnia Dev Commands (omnia dev)

## omnia dev new

##### Example Install Templates
```
omnia dev new --install 2.0.0
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

| Name      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| -p --path    | The start path to start scaning for nuspec/csproj           |
| -v --version | The package version to generate                             |
| -o --output  | The path in which the resulting packages are created        |
    

##### Optional Parameters

| Name         | Description                                                                   |
| ------------ | ----------------------------------------------------------------------------- |
| -c --configuration | Release or Debug (debug is default, and also generates symbol packages) |

---


## omnia dev add

Enables easy add of Omnia Fx and other Omnia Extensibility dependencies.

##### Example Add new fx
```
Add Omnia Fx in latest available version 
omnia dev add omniafx

Add Omnia Wcm Fx in latest available version 
omnia dev add wcmfx

Add Omnia Tenant Admin Fx in latest available version 
omnia dev add adminfx

Add Omnia Workplace Fx in latest available version 
omnia dev add workplacefx

Add in specific version
omnia dev add omniafx --version 2.0.0

```

##### Required Parameters

No required parameters

##### Optional Parameters

| Name         | Description                                  |
| ------------ | -------------------------------------------- |
| -v --version | The version to update to                     |
| -t --tag     | Switch between prerelase tags (dev, preview) |
| -r --restore | Restores the dependencies after updating     |

##### Required Parameters

| Name                  | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| -p --path             | Update all projects from this point down, i.e. recursive                     |
| -v --version          | The version to update to, i.e. the versions to use from (-l)                 |
| -l --localPackage     | Path to the locally generated packages                                       |
| -r --restore          | Restores the dependencies after updating                                     |

##### Optional Parameters

No optional parameters


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

Update to specific version
omnia dev update omniafx --version 2.0.0

```

##### Required Parameters

No required parameters

##### Optional Parameters

| Name         | Description                                  |
| ------------ | -------------------------------------------- |
| -v --version | The version to update to                     |
| -t --tag     | Switch between prerelase tags (dev, preview) |
| -r --restore | Restores the dependencies after updating     |

##### Example Updating to locally created nuget package version

```
Update all project below the specified path (-p) to use the specifiec version (-v) of all packages matching that version in the package location specified (-l) and restore the projects after update (-r)
omnia dev update -p C:\Projects\OmniaFork\OmniaWebContentManagement\src -l C:\MySelected\TestoutputNugetDir -v 1.0.11-mylocal -r
```

##### Required Parameters

| Name                  | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| -p --path             | Update all projects from this point down, i.e. recursive                     |
| -v --version          | The version to update to, i.e. the versions to use from (-l)                 |
| -l --localPackage     | Path to the locally generated packages                                       |
| -r --restore          | Restores the dependencies after updating                                     |

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

## Omnia Cloud Commands

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

## Tenant Commands

## omnia tenant list

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

| Name         | Description                                               |
| ------------ | --------------------------------------------------------- |
| -f --filter  | Filters tenants by name                                   |

---

## Extension Commands

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

## Extension Groups Commands

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

## Deployment Groups Commands

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




