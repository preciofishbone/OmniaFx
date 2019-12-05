import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("{service id}"), "HelloOmniaFx.Web")
    .registerService({ description: "Description of HelloOmniaFx.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("{a guid id}"),
                minChunks: 2
            }
        }
    });
    
   