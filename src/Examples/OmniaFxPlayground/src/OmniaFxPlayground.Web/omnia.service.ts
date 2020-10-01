import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("30612a0c-52c8-430e-8b03-132c4c66bba5"), "OmniaFxPlayground.Web")
    .registerService({ description: "Description of OmniaFxPlayground.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("eff644a1-be6f-4f9c-b85d-b43cd18614aa"),
                minChunks: 2
            }
        }
    });
    
   