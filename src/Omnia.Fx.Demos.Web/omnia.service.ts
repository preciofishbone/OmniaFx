import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("b9096614-2adb-4ca9-914b-73c9aa6fd75b"), "Omnia.Fx.Demos.Web")
    .registerService({ description: "Description of Omnia.Fx.Demos.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("e0ddc3cd-2e2c-4480-81a8-5d53f88e0441"),
                minChunks: 2
            }
        }
    });
    
   