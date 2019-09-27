import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("32733682-f1dd-4864-89df-6fe389317b4d"), "WebAppWithDb.Core")
    .registerResources({
        resourcePaths: [
            "./models/*.js",
            "./core/**/*.js"
        ]})
   