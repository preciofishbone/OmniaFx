import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';
import { WebAppWithDbService } from "./client/models/ManifestIds";

Composer
    .registerManifest(WebAppWithDbService.Id, "Omnia.Fx.Examples.WebAppWithDb.Web")
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
    })
    .requestSqlDatabase({
        //Specify your own unique id, later used as reference to the DB generated for you.
        uniqueId: new Guid("f8debb44-be08-4ae2-9cf5-c1cebc839123")
    });
    
   