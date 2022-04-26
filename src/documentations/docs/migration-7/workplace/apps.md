# Apps

Remove **OfficeNamingPolicyValidationResult**, **AliasValidationResult** and **SiteNameValidationResult** models from **"@omnia/workplace/models"** module

```ts
interface OfficeNamingPolicyValidationResult {
    alias: AliasValidationResult;
    siteName: SiteNameValidationResult;
    isValid: boolean;
}

interface AliasValidationResult {
    blockedWord: string;
    isExist: boolean;
    isInvalid: boolean;
    suggestedAlias: string;
    prefix: string;
    suffix: string;
}

interface SiteNameValidationResult {
    blockedWord: string;
    isInvalid: boolean;
    prefix: string;
    suffix: string;
}
```

Remove **ProvisionEnterpriseProperties** model from **"@omnia/workplace/models"** module. Property **permissionIdentities** in **TeamCollaborationAppTemplate** model is removed also.

```ts
interface ProvisionEnterpriseProperties {
    team: boolean;
    yammer: boolean;
    facebook: boolean;
}
```

```ts
interface TeamCollaborationAppTemplate extends AppTemplate {
    permissionIdentities: PermissionIdentities || any; // Removed from 7.0
}
```

Remove **appRoutePrefix** constant variable in **WorkspaceApp** namespace from **"@omnia/workplace/models"** module.
Replace it by **WorkplaceAppRoutePrefix** const variable with **workspace** property.

```ts
namespace WorkspaceApp {
    export const appRoutePrefix = "_wp"; // Removed from 7.0
}

const WorkplaceAppRoutePrefix = {
    teamwork: "_t",
    workspace: "_wp" // Use this instead
};
```