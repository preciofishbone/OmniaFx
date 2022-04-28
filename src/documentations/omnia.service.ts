import { Composer, OmniaFxConfigurator, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { OmniaService, OmniaWebComponentManifests, OmniaResourceManifests, OmniaGroupManifests, Guid } from "@omnia/fx-models";

Composer
    .importManifests("node_modules/@omnia/runtime/dist")
    .configuration<OmniaFxConfigurator>(OmniaService.Id, OmniaFxConfigurator)
    .done();


Composer
    .block
    .externalManifest(OmniaService.Id.toString(), OmniaResourceManifests.FxWorkersBootstrapper.toString())
    .externalManifest(OmniaService.Id.toString(), OmniaWebComponentManifests.Welcome.toString())
    .externalManifest(OmniaService.Id.toString(), OmniaWebComponentManifests.FxUxErrorMessage.toString())
    .externalManifest(OmniaService.Id.toString(), OmniaWebComponentManifests.Header.toString())
    .externalManifest(OmniaService.Id.toString(), OmniaGroupManifests.Header.toString())
    .externalManifest(OmniaService.Id.toString(), OmniaWebComponentManifests.AuthenticationChecker.toString())

Composer
    .registerManifest(new Guid("d6d1aa9b-b79c-48c7-aebb-6348cafbf250"), "Omnia Fx Doc")
    .registerService({ description: "Omnia Fx Doc" })
    .AsWebApp()
    .withBuildOptions({
        outDir: "docs/.vuepress/public",
        include: ["docs/.vuepress", "configurations"],
        moduleOptions: {
            enableTransformResourcePath: true
        }
    })

DevelopmentEnvironment
    .hosting
    .use({
        port: 44388,
        https: false
        // userConfig: {

        // }
    })

