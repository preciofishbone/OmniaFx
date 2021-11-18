import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("1a1ac0ac-771f-449c-873c-3d57756f36ee"), "Omnia.Fx.Examples.Ux.CustomFonts")
    .registerService({ description: "Description of Omnia.Fx.Examples.Ux.CustomFonts" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("51746343-e8d7-44d7-8816-ec6cd37272b3"),
                minChunks: 2
            }
        }
    });
    
   