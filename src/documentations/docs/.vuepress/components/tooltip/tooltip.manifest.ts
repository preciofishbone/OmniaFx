import { Composer } from "@omnia/tooling-composers";
import { Guid } from "@omnia/fx-models";

Composer
    .registerManifest(new Guid("32ac8281-d36f-40f6-9d40-1ba5a122b44d"), "omniafx.doc.tooltip")
    .registerWebComponent({
        elementName: "omfx-doc-tooltip",
        entryPoint: "./Tooltip.tsx"
    });