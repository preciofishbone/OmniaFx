import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("aede937e-76bf-4a48-a156-623d0a116564"), "Omnia.Fx.Examples.WebAppWithDb.Web")
    .registerService({ description: "Description of Omnia.Fx.Examples.WebAppWithDb.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("1ff27273-644a-4f37-b5be-25cee6161a18"),
                minChunks: 2
            }
        }
    });
    
   