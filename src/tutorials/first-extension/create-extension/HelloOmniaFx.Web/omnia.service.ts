import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("0cadaa29-f255-41a1-94fd-346b5fd725f9"), "HelloOmniaFx.Web")
    .registerService({ description: "Description of HelloOmniaFx.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("1983cee8-6984-46ec-85f3-de05bd8187bd"),
                minChunks: 2
            }
        }
    });

DevelopmentEnvironment
    .hosting
    .use({
        port: 44372
    })


