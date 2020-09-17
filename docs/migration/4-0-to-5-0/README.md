# Migrate from Fx 4.0 to 5.0

This article explains how to update an existing Omnia extension from 4.0 to 5.0.

| WARNING: Fx 5.0 is currently in preview! |
| --- |

# Cli Template

Run the below cmd to update all cli templates:

```
omnia dev new --install 5.0.0 --force
```

# Omnia Fx 

Run the below cmd to update all omnia fx npm/nuget:

```
omnia dev update omniafx -v 5.0.0 -p C:\your-extension-path
```

| Recommended Changes |
| --- |
| [Web Component - Vue Component](#web-component---vue-component)|

| Breaking Changes |
| --- |
| [Environment Variables](#environment-variables)|
| [Custom RTF extension](#custom-rtf-extension)|
| [Server-side HttpClient](#server-side-httpclient)|
| [Audit Log](#audit-log)|
| [User](#user )|
| [Worker Program.cs](#worker-programcs)|

# WCM Fx

Run the below cmd to update all wcm fx npm/nuget:

```
omnia dev update wcmfx -v 5.0.0 -p C:\your-extension-path
```

| Breaking Changes |
| --- |
| [Create Page](#create-page)|
| [Delete Page](#delete-page)|
| [Delete Navigation Node](#delete-navigation-node)|

# Recommended Changes

## Web Component - Vue Component

Follow the instruction below to update existing components in your extension:

1. Remove all documentation comments with the syntax `/*@....*/` in Web Component interface files. For example:
    
    - IComponentA.ts
  
    ```ts
    /*-----Old-----*/

    /*@WebComponentInterface("component-a")*/
    export interface IComponentA {
        /*@DomProperty*/  
        propertyA: object;

        /*@DomProperty*/
        propertyB: object;
    }

    declare global {
        namespace JSX {
            interface Element { }
            interface ElementClass { }
            interface ElementAttributesProperty { }
            interface IntrinsicElements {
                /*@WebComponent*/
                "component-a": TsxAllowUnknowProperties<IComponentA>;
            }
        }
    }




    /*-----New-----*/
 
    export interface IComponentA {
        propertyA: object;
        propertyB: object;
    }

    declare global {
        namespace JSX {
            interface Element { }
            interface ElementClass { }
            interface ElementAttributesProperty { }
            interface IntrinsicElements {
                "component-a": TsxAllowUnknowProperties<IComponentA>;
            }
        }
    }

    ```

2. Component class must extend `VueComponentBase`. For example:

    - ComponentA.tsx

    ```ts
    /*-----Old-----*/

    @Component
    export default class ComponentA extends Vue implements IComponentA

    @Component
    export default class ComponentA extends tsx.Component implements IComponentA

    /*-----New-----*/

     @Component
    export default class ComponentA extends VueComponentBase implements IComponentA
    
    ```

# Breaking Changes

## Environment Variables 

Runtime error: 

    Can't get current extensions using Current, missing environment variable OMNIA_EXTENSIONID

Follow the instruction beflow to fix the issue:

-   For WebApp
  
    Edit the existing file `Properties\launchSettings.json`

    ```json
    {
        "profiles": {
            "IIS Express": {
                "environmentVariables": {

                    "OMNIA_EXTENSIONID": "you-extension-id"

                }
            },
            "The-file-name-of-webapp-csproj-file": { 
                "environmentVariables": {

                    "OMNIA_EXTENSIONID": "you-extension-id"

                },
            }
        }
    }
    ```

-   For Worker

    Add the new file `Properties\launchSettings.json`

    ```json
    {
        "profiles": {
            "The-file-name-of-worker-csproj-file": {
                "environmentVariables": {
                
                    "OMNIA_EXTENSIONID": "you-extension-id"
                    
                }
            }
        }
    }
    ```

## Custom RTF extension

You must return a promise in `getDefinition` function.

```ts
export class ACustomEditorExtension implements RichTextEditorExtension {

    //Old
    getDefition(): ACustomEditorExtensionDefinition {}

    //New
    getDefition(): Promise<ACustomEditorExtensionDefinition> {}
}
```

## Server-side HttpClient

All obsolete parts of HttpClient are offically removed from this version, please follow the instruction written in obsolete attributes to fix it all before updating to new Nuget.

## Audit Log

**Server-side:**

It is forbidden to update an existing audit log. 

IAuditLogService - `AddOrUpdateAsync` has been replaced with `AddAsync`.

To see whether the AuditLog is enabled or not, you must use IAuditLogService - `GetSettingsAsync` instead of ITenantService. 

**Client-side:**

You are no longer allowed to add audit log from client-side, which is also not a best practice. Audit log must be added during an action flow on server-side so that client cannot bypass it.

## User

Enum `UserPrincipalType` has been renamed to `AzureAdObjectPrincipalTypes`, in both client-side and server-side.

Client-side model `OmniaUserContext` has been replaced with `UserWithPropertyBag`.

Model `User` has been updated to be generic to support different types of user. The new model `AzureAdUser`, which is inherited from the new `User`, is equivalent to the old `User`.

## Worker program.cs

Replace `.AddOmniaFxNetCore` to `.AddOmniaFxWorker`

## Create Page

To create normal/default variation page, you are no longer allowed to input `Security Resource Id`. It will be handled internally.

To create non-default variation page, you have to update to use the new api.

**Server-side:**

INavigationService - `CreatePageAsync`.

**Client-side:**

PagesStore - `createPageWithVariation` action.

## Delete Page

You are no longer allowed to delete pages, you have to archive it instead.

**Server-side:**

IPageService - `DeletePageAsync` has been replaced with `ArchivePageAsync`.

**Client-side:**

PagesStore - `delete` action has been replaced with `archive`.

## Delete Navigation Node

You are no longer allowed to delete page navigation nodes. They wil be archived together with pages in new archive functionality.

If you want to delete link navigation node.

**Server-side:**

IPageService - `DeleteLinkNavigationNodeAsync`.

**Client-side:**

NavigationStore - `deleteLinkNode` action.
