import { Composer } from '@omnia/tooling/composers';
import { Guid, OmniaResourceManifests, OmniaService } from '@omnia/fx-models';


Composer.registerManifest("6132A71A-4154-4A54-82A1-CB213AA3EEDD", "CustomFonts.Core")
    .registerResources({ resourcePaths: ["./omniaoverrides.min.css", "./styleoverrides.js"] })
    .withExternalDependency(OmniaService.Id, OmniaResourceManifests.FxUx).done()
    .withLoadRules().loadIfManifestLoaded({
        omniaServiceId: OmniaService.Id.toString(),
        resourceId: OmniaResourceManifests.FxUx.toString()
    });