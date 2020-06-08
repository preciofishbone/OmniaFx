# Load a resource manifest when a certain feature is activated

Ensure you have created [a tenant feature](../../first-extension/create-feature).

Create a folder that contains 2 files:

- Test.ts

```ts
alert('Loaded test.js');
```

- Resource.manifest.ts

```ts
import { Composer } from '@omnia/tooling/composers';

Composer
    .registerManifest(new Guid(a-guid-id), "test.manifest.resource")
    .registerResources({ resourcePaths: ["./Test.js"] })
    .withLoadRules()
    .loadIfFeatureActivated({ featureId: the-tenant-feature-id })
```


As an expected resul, an alert with a specified message will be displayed on page load.