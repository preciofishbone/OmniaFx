# Topics

## Removed Topics.registerSearchAdminSettings

Before
```ts
// example in your Registration.ts
Topics.registerSearchAdminSettings.publish({ /* */});

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

extendApi(api => api.fx.ux.admin.registration.navigationMenuNode, api => {
    api.registerNavigationMenuNode({/* your node */});
});

// in resource manifest remove rule loadIfManifestLoaded if have, use extendApi instead.
Composer
    .registerManifest(/* guid id */)
    .registerResources({ resourcePaths: ["./Registration.ts"] })
    .extendApi(api => api.fx.ux.admin.registration.navigationMenuNode);
```


