# Topics

## Removed Topics.registerAppProvisioningSteps

Before
```ts
// example in your Registration.ts
Topics.registerAppProvisioningSteps.publish({ /* */});

// example in your resource mnaifest
Composer
    .registerManifest(/* guid id */)
    .registerResources({ resourcePaths: ["./Registration.ts"] })
    .withLoadRules()
    .loadIfManifestLoaded({ /* */ })
```

After changed
```ts
// in Registration.ts
import { extendApi } from "@omnia/fx";

extendApi(api => omniaApi.fx.ux.appTemplates.steps.registrations, api => {
    api.registerAppProvisioningStepInfo({/* your node */});
});

// in resource manifest remove rule loadIfManifestLoaded if have, use extendApi instead.
Composer
    .registerManifest(/* guid id */)
    .registerResources({ resourcePaths: ["./Registration.ts"] })
    .extendApi(api => api.fx.ux.appTemplates.steps.registrations);
```


