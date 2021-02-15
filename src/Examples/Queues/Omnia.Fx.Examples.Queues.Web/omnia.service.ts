import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("c278bc69-6cdc-4c31-bc10-d09d7f34cb76"), "Omnia.Fx.Examples.Queues.Web")
    .registerService({ description: "Description of Omnia.Fx.Examples.Queues.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("d8a1fbb6-5c7b-4445-8be9-cac1c26d719a"),
                minChunks: 2
            }
        }
    });
    
   