import { Composer } from '@omnia/tooling-composers';
import { Guid, FontAwesomeIcon, PermissionRoles, TargetResolverTypes, RoleDefinitions } from '@omnia/fx-models';


Composer
    .registerManifest(new Guid("3B19822A-D16C-40CB-B6EE-343ADE07D6C8")).registerFeature({
        version: "0.1.0",
        category: "OmniaX Category",
        title: "Data Provisioning",
        description: "Data Provisioning",
        targetResolverType: TargetResolverTypes.AppInstance,
        icons: [new FontAwesomeIcon("fas fa-pen-alt")],
        parameters: [],
        hasProviderHandling: true,
        permissionRole: RoleDefinitions.AppInstanceAdmin,
        hidden: true
    });