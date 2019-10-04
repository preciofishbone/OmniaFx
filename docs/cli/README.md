# Omnia Cli

### Omnia Dev Commands (omnia dev)

### omnia dev new

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

| Name       | Description                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------- |
| -f --force | Forces a new download if the version is already installed (same version could be update on github) |

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

### omnia dev publish

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

### Basic Commands

### omnia login
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

### omnia logout
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

## Extension Commands

### omnia extensions new

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



### omnia extensions restart

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
   


### omnia extensions list

##### Example
```
omnia extensions list
```

##### Required Parameters

No required parameters  

##### Optional Parameters

No optional parameters

---

### versions

##### Example
```
Lists all versions for Omnia
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa

Lists all versions for Omnia starting with 2.
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:2.*

Lists all preview versions for Omnia 2.0.0 
omnia extensions versions aa000000-0000-aaaa-0000-0000000000aa:2.0.0-preview*
```

##### Required Parameters

No required parameters  
    

##### Optional Parameters

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| --intent | The intent of the versions can be (dev, prod). |

---

### omnia extensions push

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

### omnia extensions deploy

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




