# Wait for App provisioning

After creating an app (app instance), provisiong might still running in background. 

The following sample show how to wait for the provisioning state.

```cs

//Inject IAppService (Omnia.Fx.Apps.IAppService)
IAppService AppService;

//The newly created appInstance that need to wait for the provisioning
AppInstance appInstance;

//Wait
AppService.WaitForProvisioningStateAsync(appInstance,
    successFunc: async (appInstance) =>
    {

    },
    failedFunc: async (appInstance) =>
    {

    },
    timeoutFunc: async (appInstance) =>
    {

    },
    minutesTimeout: 30
);

```

# Note

- If the relevant app template require approval then it will throw exception, you are not supposed to wait for that.
- There are some special cases in provisioning App that might take up to 30 minutes. (i.e. create SharePoint site failed and keep retry internally).

