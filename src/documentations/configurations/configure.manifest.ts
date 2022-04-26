import { Composer } from "@omnia/tooling-composers";
import { Guid, OmniaService, OmniaResourceManifests } from "@omnia/fx-models";

Composer
    .registerManifest(new Guid("98fc709e-aeb7-4123-86d6-60c5ebf1261c"), "omniafx.doc.configure")
    .registerResources({
        resourcePaths: [
            "./Theming.ts"
        ]
    })
    .withExternalDependency(OmniaService.Id, OmniaResourceManifests.FxUx)
    .done()
    .withLoadRules()
    .loadByUrlMatching({ startsWith: "/" });