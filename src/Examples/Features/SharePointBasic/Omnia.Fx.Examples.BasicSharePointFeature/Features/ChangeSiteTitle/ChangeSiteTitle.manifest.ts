import { Composer } from '@omnia/tooling/composers';
import { Guid, TargetResolverTypes, FontAwesomeIcon, RoleDefinitions } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("52de5a24-cfa8-409e-ba7b-19fcb45d05b1"), "ChangeSiteTitle")
    .registerFeature({
        version: "0.1.0",
        category: "Omnia Fx Demos",
        title: "Change site title",
        description: "Changes the site title to Omnia Fx Rules",
        targetResolverType: TargetResolverTypes.AppInstance,
        icons: [new FontAwesomeIcon("fas fa-pen-alt")],
        parameters: [],
        hasProviderHandling: true,
        permissionRole: RoleDefinitions.AppInstanceAdmin,
        hidden: false
    });
