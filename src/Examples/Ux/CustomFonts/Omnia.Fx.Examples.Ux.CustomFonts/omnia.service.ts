import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("6b4e0fb8-1c57-470a-8b5a-b867f3496ed8"), "Omnia.Fx.Examples.Ux.CustomFonts")
    .registerService({ description: "Description of Omnia.Fx.Examples.Ux.CustomFonts" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("2bc5637e-f11a-44b1-bba0-0142047f7be5"),
                minChunks: 2
            }
        }
    });
    
   