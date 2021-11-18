import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("7dfa5c36-bdcb-4123-9f83-a9961316283e"), "Omnia.Fx.Examples.Ux.Components")
    .registerService({ description: "Description of Omnia.Fx.Examples.Ux.Components" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("a627d87b-32c8-430b-9400-f1213c499aa7"),
                minChunks: 2
            }
        }
    });
    
   