# Common Issues


## Build failed

**Error**

    Severity Code Description Project File Line Suppression State Error TS18003 Build:No inputs were found in config file 'G:/DeveloperSupport/HelloOmniaFx/HelloOmniaFx.Web/publish/tsconfig.json'. Specified 'include' paths were '["**/*"]' and 'exclude' paths were '["node_modules"]'.

**Reason**

    The 'publish' folder must be excluded from the project.

**Solution**

    Exclude the 'publish' folder from the project.

> The fixed has been included in the latest Omnia cli templates.

---

**Error**

    Any unknown errors from npm packages.

**Reason**

    Some npm packages were not installed properly on your extension.

**Solution**

    Close visual stutio.

    Delete the node_modules folder in the source code.

    Clean all the cache:        npm cache clean --force

    Reinstall:                  npm install

---

## Startup failed

**Error**

    ArgumentException: No IConfiguration with key:....

**Reason 1**

    The appsettings.local.json is missing or out-of-date. 

**Solution**

    Run the below cmd to generate latest settings:

    omnia dev appsettings get --path C:\your-hello-omnia-fx-path\extension.json --tenantid {tenant-id}

**Reason 2**

    Your worker service is still reading the appsettings.local.json from the bin folder, which does not contain the file.

**Solution**

```ts
    //Update the Program.cs in Worker project

    var currentDir = Directory.GetCurrentDirectory();
    if (currentDir.Contains("\\bin\\Debug\\"))
    {
        currentDir = currentDir.Substring(0, currentDir.IndexOf("\\bin\\Debug\\"));
    }

    omniaConfig
        .AddAppSettingsJsonFile("appsettings.json")
        .AddAppSettingsJsonFile("appsettings.local.json", currentDir)
```

> The fixed has been included in the latest Omnia cli templates.

---

# Publish failed

**Error**

    Exception: The operation has timed out.

**Reason**

    Docker Desktop is not running.

**Solution**

    Start the Docker Destop.