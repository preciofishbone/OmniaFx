import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("3cb6ded1-dd8e-4d18-9716-b7f0e5238ae5"), "Omnia.Fx.Examples.Ux.Components")
    .registerService({ description: "Description of Omnia.Fx.Examples.Ux.Components" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("b2bac634-a95f-4e59-9d08-f99f2140ac4e"),
                minChunks: 2
            }
        }
    });
    
   