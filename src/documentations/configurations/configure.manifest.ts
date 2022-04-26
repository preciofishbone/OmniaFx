import { Composer } from "@omnia/tooling-composers";
import { Guid } from "@omnia/fx-models";

Composer
    .registerManifest(new Guid("98fc709e-aeb7-4123-86d6-60c5ebf1261c"), "omniafx.doc.configure")
    .registerResources({
        resourcePaths: [
            "./Theming.ts"
        ]
    })
    .withLoadRules()
    .loadByUrlMatching({ startsWith: "/" });