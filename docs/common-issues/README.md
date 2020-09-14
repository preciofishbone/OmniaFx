# Common Issues

Here are the most common issues you may encounter.

# Build failed

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

Clean all the cache: `npm cache clean --force`

Reinstall: `npm install`

---

# Startup failed

**Error**

ArgumentException: No IConfiguration with key:....

**Reason 1**

The appsettings.local.json is missing or out-of-date. 

**Solution**

Run the below cmd to generate latest settings:

    omnia dev appsettings get --path C:\your-extension-path\extension.json --tenantid {tenant-id}

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

---

# Worker service issues

**Error**

Worker service doesn't work on cloud server but local works well.

**Reason**

The worker might be disabled on cloud server. 

**Solution**

Run the below cmd to enable the worker: 

    omnia extensions scale {worker-service-id} --tenantid {tenant-id} --replicas 1

---

**Error**

Runtime error: Can't get current extensions using Current, missing environment variable OMNIA_EXTENSIONID

**Reason**

Missing environment variable OMNIA_EXTENSIONID in launchSettings.json

**Solution**

> Find the details in [migration 3.0 - 4.0](../migration/3-0-to-4-0#environment-variables).

> The fixed has been included in the latest Omnia cli templates.

---

# Omnia Cli issues

## omnia dev run

**Error**

missing script: omnia-watch

**Reason**

Omnia script omnia-watch is missing the  in package.json

**Solution**

> Find the details in [migration 3.0 - 4.0](../migration/3-0-to-4-0#build-configuration).

> The fixed has been included in the latest Omnia cli templates.

---

# Manifest issues

**Error**

Omnia Feature registration does not get deployed.

**Reason**

your-feature.manifest.ts file is probably put outside 'client' folder in Web project. 

**Solution 1**

Move feature files into 'client' folder.

**Solution 2**

Update omnia.service.ts, ensure your feature's folder is included

```ts
.withBuildOptions({
    include: ["client", "features"]
})
```

    