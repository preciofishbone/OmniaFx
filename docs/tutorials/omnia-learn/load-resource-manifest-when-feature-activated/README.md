# Load a resource manifest when a certain feature is activated


Follow the below sample to load a test.js script when a tenant feature is activated.

Ensure you have created [a tenant feature](../../first-extension/create-feature).

Create a folder that contains 2 files:

- Resource.manifest.ts

```ts
import { Composer } from '@omnia/tooling/composers';

Composer
    .registerManifest(new Guid('guid id'), "test.manifest.resource")
    .registerResources({ resourcePaths: ["./test.js"] })
    .withLoadRules()
    .loadIfFeatureActivated({ featureId: 'tenant-feature-id' })
```

- Test.ts

```ts

alert('Loaded test.js');

```

As an expected resul, an alert with a specified message will be displayed on page load.