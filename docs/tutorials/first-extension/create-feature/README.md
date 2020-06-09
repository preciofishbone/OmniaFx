# Create a Feature

In this part of tutorial, you will create a feature that create an aspx page on SharePoint Team Site.

>Tip: Please make sure you have set up [worker service](../create-timer-job#create-a-worker-service).

# Step 1. Create a Feature in worker

Create a new folder called `Features` under `..\HelloOmniaFx.Worker\`.

Inside the newly created folder, run the following cmd:

```
omnia dev new spfeature --name HelloOmniaFxFeature
```

There are 2 files will be created:
 
 `..\HelloOmniaFx.Worker\Features\HelloOmniaFxFeature.cs` 
 
 `..\HelloOmniaFx.Worker\Features\HelloOmniaFxFeature.manifest.ts`

Follow the instruction written in `HelloOmniaFxFeature.cs`:

- Update the namespace of the file:

```cs
namespace HelloOmniaFx.Worker.Features
```

- Install nuget package: Omnia.Fx.NetCore.SharePoint.

- Add the configuration code in `..\HelloOmniaFx.Worker\Program.cs`:

```cs
omniaConfig.AddOmniaFxNetCore((options) =>
{
    options.AddFeatureHandlers((featureProviderOptions) =>
    {
        featureProviderOptions.AddFeatureProvider<HelloOmniaFxFeature>();
    });
});
omniaConfig.AddOmniaFxNetCoreSharePoint();
```

- Add code to provision aspx file on to SharePoint site:

```cs
private async Task ActivateOrUpdate()
{
    var spUrl = AppInstance.Properties.ContextParams.EnsureContextParamStringValue(Omnia.Fx.SharePoint.Constants.Parameters.SPUrl);
    var ctx = SharePointClientContextProvider.CreateClientContext(spUrl);

    //ctx.Load(ctx.Web);
    //await ctx.ExecuteQueryAsync();

    var sitePageList = ctx.Web.GetList(ctx.Web.ServerRelativeUrl + "/SitePages");

    var pageRelativeUrl = ctx.Web.ServerRelativeUrl + "/SitePages/HelloOmniaFx.aspx";
    var page = ctx.Web.GetFileByServerRelativeUrl(pageRelativeUrl);
    ctx.Load(page,f => f.Exists);

    await ctx.ExecuteQueryAsync();

    if (!page.Exists)
    {
        ListItem item = sitePageList.RootFolder.Files.AddTemplateFile(pageRelativeUrl, TemplateFileType.StandardPage).ListItemAllFields;
        await ctx.ExecuteQueryAsync();
    }
}
```

# Step 2. Deploy 

[Deploy the extension](../deploy-extension#deploy-an-extension) to your dev tenant.

Try to activate the feature on a Teamwork app.

# Step 3. Debug

You might now notice that the sample feature is activated failed. So now you need to debug and fix it!

Turn off the worker that running on cloud server so that the local worker can pick up the activation queue messages.

```
omnia extensions scale {worker-service-id} --tenantid {tenant-id} --replicas 0	
```

>Tip: You can find the `worker-service-id` defined in `..\HelloOmniaFx.Worker\omnia.service.ts`.

Now start debugging and activate the feature again.

Remember to turn on the worker again after debugging it.

```
omnia extensions scale {worker-service-id} --tenantid {tenant-id} --replicas 1	
```

# Step 4. Test the feature

The page `../SitePages/HelloOmniaFx.aspx` will be created on the SharePoint site that activated the feature.

Enjoy!

# Good to know

You are able to change the feature definition - the feature's `manifest.ts` file.

- Feature scope
  
    There are 3 scopes: Tenant, Business Profile and App Instance. 

- Feature provider handling
  
    A feature handle .cs that will pick up and process the activation messages. you might want to turn off this setting in some cases (i.e. a tenant feature that is only used for manifest load rule) 

    When you turn it off, you can delete the .cs file that created by the omnia cli.

- Localization is available 

    i.e. Title:  "$Localize:Your.Extension.Localization.Namespace.FeatureTitle;"


# See Also

See another example of SharePoint feature in source code [here](https://github.com/preciofishbone/OmniaFx/tree/master/src/Examples/Features/SharePointBasic).