import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("c5ffc721-d84a-432e-a14f-9df4295c0f1d"), "Omnia.Fx.Examples.AppProvisioning.CustomSteps.Web")
    .registerService({ description: "Description of Omnia.Fx.Examples.AppProvisioning.CustomSteps.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("62302d52-7f95-4441-89be-ce5618f7746b"),
                minChunks: 2
            }
        }
    });
    
   