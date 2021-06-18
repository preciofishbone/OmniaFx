import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("4ee05e65-6e52-4a8c-b86d-e6ebcb0311ba"), "Omnia.Trianglify")
    .registerService({ description: "Description of Omnia.Trianglify" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("d45d388c-7a32-4b4a-bbe7-4f9bb3c5880f"),
                minChunks: 2
            }
        }
    });
    
   