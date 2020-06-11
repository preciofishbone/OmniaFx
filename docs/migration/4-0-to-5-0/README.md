# Migrate from 4.0 to 5.0

This article explains how to update an existing Omnia extension from 4.0 to 5.0

| WARNING: Fx 5.0 is currently in preview! |
| --- |

# Omnia Fx 

Run the below cmd to update all omnia fx npm/nuget to 5.0 version:

```
omnia dev update omniafx -v 5.0.0 -p C:\your-extension-path
```

| Breaking Changes |
| --- |
| [Custom RTF extension](#custom-rtf-extension)|
| [Server Side HttpClient](#server-side-http-client)|

---

# WCM Fx

Run the below cmd to update all wcm fx npm/nuget to 5.0 version:

```
omnia dev update wcmfx -v 5.0.0 -p C:\your-extension-path
```

| Breaking Changes |
| --- |
| [Delete Page](#delete-page)|

---

# Breaking Changes

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

## Server Side HttpClient

All obsolete parts of HttpClient are offically removed from this version, please follow the instruction written in obsolete attributes to fix it all before updating to new Nuget.

## Delete Page

You are no longer allowed to delete pages, you have to archive it instead. 

**Server side:**

IPageService - `DeletePageAsync` has been replaced with `ArchivePageAsync`

**Client side:**

PagesStore - `delete` action has been replaced with `archive`

