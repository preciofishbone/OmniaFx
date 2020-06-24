# Manifest custom load rule

Manifest custom load rule defines when to load a manifest automatically.

**There are 2 system load rules, as described below, will not be affected by any custom load rules.**

- web-component manifest loads when the component element exists in the DOM.
- resource manifest loads when any manifest loads in which it is imported.

**It's IMPOSSIBLE to unload loaded manifests.**

# Examples 

`script.ts`

```ts
alert('script is loaded');
```

`resource.manifest.ts`

```ts
import { Composer } from '@omnia/tooling/composers';
import { OmniaResourceManifests, OmniaService } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid(guid-id), "resourcemanifest")
    .registerResources({ resourcePaths: ["./script.js"] })
    .withLoadRules()

    //Load If a feature is activated
    .loadIfFeatureActivated({ featureId: feature-id })

    //Load If a manifest is loaded (i.e. Load in SharePoint)
    .loadIfManifestLoaded({
         resourceId: OmniaResourceManifests.SpfxCustomizer.toString(), 
         omniaServiceId: OmniaService.Id.toString()
     })

    //Load If a DOM matching (i.e. Load in Omnia)
    .loadByDomMatching({
        cssSelector: 'div[id="omnia-app"]'
    })

    //Load if a query string exists is url (i.e. load when https://....?load=true)
    .loadByUrlMatching({
        regEx: ".*?(load=true)"
    })
    
    //Always load
    .loadByUrlMatching({
        startsWith: "/"
    })

    //Load by user matching (i.e. load for AzureAd user)
    .loadByUserMatching("type", UserTypes.AzureAd)

    //It is possible to combine rules (i.e. load when 2 feature is activated)
    .loadIfFeatureActivated().and().loadIfFeatureActivated()
    .loadIfFeatureActivated().or().loadIfFeatureActivated()

    //find more details in the interfaces
```
