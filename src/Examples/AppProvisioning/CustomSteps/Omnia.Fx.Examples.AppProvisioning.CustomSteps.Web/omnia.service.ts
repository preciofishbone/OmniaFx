import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("9273a64c-d1c7-4135-b9b9-e8cc99dfa828"), "Omnia.Fx.Examples.AppProvisioning.CustomSteps.Web")
    .registerService({ description: "Description of Omnia.Fx.Examples.AppProvisioning.CustomSteps.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("ac606ae1-65c9-48bc-8642-5801375c8055"),
                minChunks: 2
            }
        }
    });
    
   