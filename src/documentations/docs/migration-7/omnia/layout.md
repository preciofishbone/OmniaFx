# Layout

Properties **allowChildOverride** and **isParentOverride** in **LayoutItem** are removed from Omnia 7.0. No alternative properties will be provided.

```ts
interface LayoutItem {
    allowChildOverride?: boolean; // Removed from 7.0
    isParentOverride?: boolean; // Removed from 7.0
}
```

**BlockSettingsReaderOptions** will no longer have **editElement** property to identify block setting web components.
Instead of relying on element selector, the model will now require **editElementManifestId** which is block setting manifest id.

```ts
interface BlockSettingsReaderOptions<T> {
    editElement?: string; // Removed from 7.0
    editElementManifestId?: GuidValue; // Use this instead
}
```

For example

```tsx
import { BlockSettingsReader } from "@omnia/fx/ux";

// this is the old way to identify block setting web component
@BlockSettingsReader<AccordionBlockSettings>({
    defaultValue: AccordionConfigurationFactory.defaultSettings(),
    editElement: "wcm-accordion-settings" // deprecated property
})

// the new way requires manifest id of the web component
@BlockSettingsReader<AccordionBlockSettings>({
    defaultValue: AccordionConfigurationFactory.defaultSettings(),
    editElementManifestId: new Guid("224BC52E-F18F-4CC5-B201-35857D4D8745")
})
```

The manifest that contains block setting web component does not change anything but you can see the reference.
Before you need to provide **elementName** to **BlockSettingsReader** but now is manifest id.

```ts
import { Composer } from "@omnia/tooling/composers";

Composer
    .registerManifest(
        // same value for editElementManifestId in BlockSettingReader
        new Guid("224BC52E-F18F-4CC5-B201-35857D4D8745"),
        "wcm.accordion.settings")
    .registerWebComponent({
        // same value for editElement property in BlockSettingsReader
        elementName: "wcm-accordion-settings",
        entryPoint: "./AccordionSettingsComponent.tsx",
        typings: ["./IAccordionSettingsComponent.ts"]
    });
```