# Wait for App provisioning

After creating an app instance, there may be some provisioning tasks that are still running in background. You might want to follow the sample code below to wait for provisioning state:

```cs

//Inject IAppService from Omnia.Fx.Apps namespace
IAppService AppService;

//A newly created appInstance that need to wait for the provisioning
AppInstance appInstance;

//Wait
await AppService.WaitForProvisioningStateAsync(appInstance,
    successFunc: async (appInstance) =>
    {
        //all provisioning tasks were completed successfully!
    },
    errorFunc: async (appInstance) =>
    {
        //something was failed!
    },
    timeoutFunc: async (appInstance) =>
    {
        //timeout was reached!
    },
    minutesTimeout: 10
);

```

# Note

- If the associated app template requires approval then it will throw exception in `WaitForProvisioningStateAsync`. 
- There may be some special cases that take up to 30 minutes to wait for. (e.g. The system will try to handle SharePoint's temporary failures internally)

