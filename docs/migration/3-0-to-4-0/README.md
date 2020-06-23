# Migrate from Fx 3.0 to 4.0

This article explains how to update an existing Omnia extension from 3.0 to 4.0.

# Omnia Fx 

Run the below cmd to update all omnia fx npm/nuget to 4.0 version:

```
omnia dev update omniafx -v 4.1.0 -p C:\your-extension-path
```

| Breaking Changes |
| --- |
| [Environment Variables](#environment-variables)|


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

                    "OMNIA_EXTENSIONID": "replace-you-extension-id"

                }
            },
            "The-file-name-of-webapp-csproj-file": { 
                "environmentVariables": {

                    "OMNIA_EXTENSIONID": "replace-you-extension-id"

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
                
                    "OMNIA_EXTENSIONID": "replace-you-extension-id"
                    
                }
            }
        }
    }
    ```
