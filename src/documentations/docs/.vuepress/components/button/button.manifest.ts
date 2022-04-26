import { Composer } from "@omnia/tooling-composers";
import { Guid } from "@omnia/fx-models";

Composer
    .registerManifest(new Guid("5e525d5d-30ed-4056-b663-ce5830753c9e"), "omniafx.doc.button")
    .registerWebComponent({
        elementName: "omfx-doc-button",
        entryPoint: "./Button.tsx"
    });