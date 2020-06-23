# Migrate from Fx 3.0 to 4.0

This article explains how to update an existing Omnia extension from 3.0 to 4.0.

# Cli Template

Run the below cmd to update all cli templates:

```
omnia dev new --install 4.0.0 --force
```

| Recommended Changes |
| --- |
| [Build configuration](#build-configuration)|

# Omnia Fx 

Run the below cmd to update all omnia fx npm/nuget:

```
omnia dev update omniafx -v 4.1.0 -p C:\your-extension-path
```

| Breaking Changes |
| --- |
| [Environment Variables](#environment-variables)|


# WCM Fx

Run the below cmd to update all wcm fx npm/nuget:

```
omnia dev update wcmfx -v 5.0.0 -p C:\your-extension-path
```

# Recommended Changes

## Build configuration

There are 2 main reasons for doing these changes:

- To be able to run a new Omnia Cli cmd: `omnia dev run`.
- To be consistent with the latest Omnia Cli templates.

To change:

- `package.json`, ensure it includes these scripts with correct setup.
  
  ```json
  "scripts": {

    "omnia-watch": "tsc -v && tsc -w",
    "omnia-after-build": "tsc -v && tsc && gulp omnia-after-build",
	"omnia-after-build-release": "npm run omnia-after-build -- --docs",

  }
  ```

- `*.csproj`, ensure it is enabled typescript-complie-blocked
  
  ```xml
  <PropertyGroup>

    <TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>

  </PropertyGroup>
  ```

# Breaking Changes

## Environment Variables

Some parts of the Omnia Fx server-side code requires `OMNIA_EXTENSIONID` as an environment variable.

Runtime error: 

    Can't get current extensions using Current, missing environment variable OMNIA_EXTENSIONID

Follow the instruction beflow to fix the issue:

-   For WebApp
  
    Edit the existing file `Properties\launchSettings.json`

    ```json
    {
        "profiles": {
            "IIS Express": {
                "environmentVariables": {

                    "OMNIA_EXTENSIONID": "you-extension-id"

                }
            },
            "The-file-name-of-webapp-csproj-file": { 
                "environmentVariables": {

                    "OMNIA_EXTENSIONID": "you-extension-id"

                },
            }
        }
    }
    ```

-   For Worker

    Add the new file `Properties\launchSettings.json`

    ```json
    {
        "profiles": {
            "The-file-name-of-worker-csproj-file": {
                "environmentVariables": {
                
                    "OMNIA_EXTENSIONID": "you-extension-id"
                    
                }
            }
        }
    }
    ```
