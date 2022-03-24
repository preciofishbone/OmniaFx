# Manifest custom load rule

Manifest custom load rule defines when the manifest must be loaded in some special conditions.

**There are 2 system load rules, as described below, will not be affected by any custom load rules.**

- A web-component manifest will be loaded as soon as its element exists in the DOM.
- A resource manifest will be loaded when it is imported in another manifest that's being loaded.

**It's IMPOSSIBLE to unload loaded manifests.**

# Examples 

- script.ts

```ts
alert('script is loaded');
```

- resource.manifest.ts

```ts
import { Composer } from '@omnia/tooling/composers';
import { OmniaResourceManifests, OmniaService } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid(guid-id), "resourcemanifest")
    .registerResources({ resourcePaths: ["./script.ts"] })
    .withLoadRules()

    //Load If a feature is activated
    .loadIfFeatureActivated({ featureId: feature-id })

    //Load If a manifest is loaded (e.g. Load in SharePoint)
    .loadIfManifestLoaded({
         resourceId: OmniaResourceManifests.SpfxCustomizer.toString(), 
         omniaServiceId: OmniaService.Id.toString()
     })

    //Load If a DOM matching (e.g. Load in Omnia)
    .loadByDomMatching({
        cssSelector: 'div[id="omnia-app"]'
    })

    //Load if a query string exists is url (e.g. load when https://....?load=true)
    .loadByUrlMatching({
        regEx: ".*?(load=true)"
    })
    
    //Always load
    .loadByUrlMatching({
        startsWith: "/"
    })

    //Load by user matching (e.g. load for AzureAd user)
    .loadByUserMatching("type", UserTypes.AzureAdInternalUser)

    //It is possible to combine rules (e.g. load when 2 feature is activated)
    .loadIfFeatureActivated().and().loadIfFeatureActivated()
    .loadIfFeatureActivated().or().loadIfFeatureActivated()

    //find more details in the interfaces
```
