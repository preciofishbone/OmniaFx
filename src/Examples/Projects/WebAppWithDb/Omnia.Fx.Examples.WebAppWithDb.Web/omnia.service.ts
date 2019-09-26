import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';
import { CodeBaseService } from './client/models/ManifestIds';

Composer
    .registerManifest(CodeBaseService.Id, "Omnia.Fx.Examples.WebAppWithDb")
    .registerService({ description: "Description of Omnia.Fx.Examples.WebAppWithDb" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("81c58f25-8fe9-46f4-a7c8-9d7fb70f4da1"),
                minChunks: 2
            }
        }
    }).requestSqlDatabase({
        //Specify your own unique id, later used as reference to the DB generated for you.
        uniqueId: new Guid("f8debb44-be08-4ae2-9cf5-c1cebc839123")
    });
    
   