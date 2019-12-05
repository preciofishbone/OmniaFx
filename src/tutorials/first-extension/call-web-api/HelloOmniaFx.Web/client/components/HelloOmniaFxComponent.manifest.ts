import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("{a guid id}"), "HelloOmniaFxComponent")
    .registerWebComponent({
        elementName: "hello-omnia-fx-component",
        entryPoint: "./HelloOmniaFxComponent.jsx",
        typings: ["./IHelloOmniaFxComponent.ts"]
    })
    //add load rules
    .withLoadRules()
    .loadByUrlMatching({ startsWith: '/' });