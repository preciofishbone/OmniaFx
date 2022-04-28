import { Composer } from "@omnia/tooling-composers";
import { Guid } from "@omnia/fx-models";

Composer
    .registerManifest(new Guid("0cf5942f-1fff-4a85-96c0-bfcccab486cf"), "omniafx.doc.peoplepicker")
    .registerWebComponent({
        elementName: "omfx-doc-people-picker",
        entryPoint: "./PeoplePicker.tsx"
    });