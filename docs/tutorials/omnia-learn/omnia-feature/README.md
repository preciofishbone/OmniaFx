# Omnia Feature

## Feature scopes

There are 3 main Feature scopes: Tenant, Business Profile and App Instance. You could find more information about it below.

## Feature with C# (Feature with handler)

This type of feature will interact with a `feature handler` (aka a queue job) in Worker. When you activate/upgrade/deactive the feature, it will send a queue message to `feature handler` and wait for the handler job to complete. For example: 

- TestFeature.manifest.ts

    ```ts
    Composer
        .registerManifest(new Guid({TEST-FEATURE-GUID}))
        .registerFeature
        ({
            version: "1.0.0",
            category: "",

            //plain text or localization label
            title: "$Localize:NamespaceSomething.TestFeature.Title;",
            description: "$Localize:NamespaceSomething.TestFeature.Description;",
            

            //1. Tenant scope feature
            targetResolverType: TargetResolverTypes.Tenant,
            permissionRole: RoleDefinitions.TenantAdmin,
            
            //2. Business Profile scope feature
            //targetResolverType: TargetResolverTypes.BusinessProfile,
            //permissionRole: RoleDefinitions.BusinessProfileAdmin,        

            //3. App Instance or SharePoint site scope feature
            //targetResolverType: TargetResolverTypes.AppInstance,
            //permissionRole: RoleDefinitions.AppInstanceAdmin,



            icons: [new FontAwesomeIcon("fas fa-cogs")],

            //This property is not used at the moment
            parameters: [], 
            
            //Define that this feature has feature handler (C# queue job) 
            hasProviderHandling: true,

            //Define that this feature is hidden from UI, it is still able to activate through Swagger/Postman. 
            hidden: true
        });
    ```

- TestFeature.cs

    ```cs
    namespace NamespaceSomething.Features {
        
        //{TEST-FEATURE-GUID} is the same value as ManifestId in TestFeature.manifest.ts
        [OmniaFeature(id: {TEST-FEATURE-GUID})]
        internal class TestFeatureProvider : BaseFeatureProvider
        {
            //Do not try-catch to swallow the exceptions without a purpose
            //Omnia will handle feature failed status if there is any errors
            protected override async Task ActivateAsync()
            {
                return Task.CompletedTask;
            }

            //Do not try-catch to swallow the exceptions without a purpose
            //Omnia will handle feature failed status if there is any errors
            protected override Task UpgradeAsync(string fromVersion)
            {
                return Task.CompletedTask;
            }

            //Do not try-catch to swallow the exceptions without a purpose
            //Omnia will handle feature failed status if there is any errors
            protected override Task DeactivateAsync(string fromVersion)
            {
                return Task.CompletedTask;
            }
        }

    }
    ```

    - If it is a Business Profile scope feature, you might want to get associated profile id:

    ```cs
    
    //inherit BaseBusinessProfileFeatureProvider...
    internal class TestFeatureProvider : BaseBusinessProfileFeatureProvider
    {
        protected override async Task ActivateAsync()
        {
            //...then get the associated business profile id 
            var profileId = BusinessProfile.Id;

            return Task.CompletedTask;
        }
    }

    ```

    - If it is an App instance scope feature, you might want to get associated SharePoint site url:

    ```cs

    //inherit BaseAppFeatureProvider...
    internal class TestFeatureProvider : BaseAppFeatureProvider
    {
        protected override async Task ActivateAsync()
        {
            //...then get the associated sp url
            var spUrl = AppInstance.Properties.ContextParams.EnsureContextParamStringValue(Fx.SharePoint.Constants.Parameters.SPUrl);

            return Task.CompletedTask;
        }
    }


    ```

## Feature without C# (Feature without handler)

This type of feature is just an On/Off-switch and usually be used together with [manifest load rule](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/omnia-learn/manifest-load-rule#manifest-custom-load-rule). For example: 

- TestFeature.manifest.ts

    ```ts
    Composer
        .registerManifest(new Guid({TEST-FEATURE-GUID}))
        .registerFeature
        ({
            ...

            //Define that this feature DOES NOT have feature handler (C#) 
            hasProviderHandling: false

            ...
        });
    ```

- TestFeature.cs 
  
  This file is not needed


## Where to create a feature in source code

- Feature with C#

    It is mandatory to put feature-with-C# in Worker project. Because feature-handler.cs (queue job) have to be registered in the Worker. 

- Feature without C#

    It is recommended to put feature-without-C# in Web project. So that you can easily control the feature and manifest load rule in the same place.

> Note: After deploying, features will be stuck with a service (Web or Worker) that contains it. You should not move the features to other services.

## How to create a feature

You can visit the [Create a Feature](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/first-extension/create-feature#create-a-feature) part in [Create Extension](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/first-extension#build-your-first-extension-like-a-boss) tutorial to learn how to create a feature step by step. 