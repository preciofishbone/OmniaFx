import { Composer } from "@omnia/tooling/composers";
import { Guid } from "@omnia/fx/models";

Composer
    .registerManifest(new Guid("a52f974a-f65d-4b2c-9087-03f40e2f2b42"), "HelloOmniaFxComponent")
    .registerWebComponent({
        elementName: "hello-omnia-fx-component",
        entryPoint: "./HelloOmniaFxComponent.tsx"
    })
    .withLoadRules()
    .loadByUrlMatching({ startsWith: '/' });